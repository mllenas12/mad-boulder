"use client";
import React, { useEffect, useContext, createContext } from "react";
import { auth } from "@/app/lib/firebase/firebase-config";
import { useState } from "react";
import { User } from "firebase/auth";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  onAuthStateChanged,
  updateProfile,
  signOut,
} from "firebase/auth";

import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
interface IContext {
  user: User | null;
  useUser: () => User | null;
}

export const AuthContext = createContext<any>("");

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  const logIn = (
    email: string,
    password: string,
    router: AppRouterInstance
  ) => {
    signInWithEmailAndPassword(auth, email, password)
      .then(() => router.push("/video-uploader"))
      .catch((err) => {
        console.log(err);
      });
  };

  const signUp = async (
    email: string,
    password: string,
    displayName: string,
    router: AppRouterInstance
  ) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        if (user) {
          updateProfile(user, { displayName });
          router.push("/success");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const loginWithGoogle = async () => {
    const provider = new GoogleAuthProvider();
    return signInWithPopup(auth, provider);
  };

  const logOut = (router: AppRouterInstance) => {
    signOut(auth)
      .then(() => router.replace("/"))
      .catch((err) => console.log(err));
  };

  const getUser = () => {
    return auth.currentUser;
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (authUser) => {
      setCurrentUser(authUser);
      setLoading(false);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <AuthContext.Provider
      value={{ currentUser, getUser, logIn, signUp, logOut, loginWithGoogle }}
    >
      {!loading && children}
    </AuthContext.Provider>
  );
};

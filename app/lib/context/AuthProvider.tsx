"use client";
import React, { useEffect, useContext, createContext, Suspense } from "react";
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
  const [isLoading, setIsLoading] = useState(true);

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
          router.push("/sign-up/success");
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
      .then(() => {
        router.replace("/");
      })
      .catch((err) => console.log(err));
  };

  const getUser = () => {
    return auth.currentUser;
  };

  useEffect(() => {
    setIsLoading(true);
    const unsubscribe = onAuthStateChanged(auth, (authUser) => {
      setCurrentUser(authUser);
      setIsLoading(false);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <AuthContext.Provider
      value={{
        currentUser,
        getUser,
        logIn,
        signUp,
        logOut,
        loginWithGoogle,
        isLoading,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

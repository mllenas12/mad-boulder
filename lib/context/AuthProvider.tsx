"use client";
import React, { useEffect, useContext, createContext, useMemo } from "react";
import { auth } from "@/lib/firebase/firebase-config";
import { useState } from "react";
import { User } from "firebase/auth";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  updateProfile,
  signOut,
} from "firebase/auth";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";

export type TAuthContext = {
  currentUser: User | null;
  getUser: () => User | null;
  signUp: (
    email: string,
    password: string,
    displayName: string,
    router: AppRouterInstance
  ) => void;
  logOut: (router: AppRouterInstance) => void;
  isLoading: boolean;
};
export const AuthContext = createContext<TAuthContext | null>(null);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

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
        signUp,
        logOut,
        isLoading,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

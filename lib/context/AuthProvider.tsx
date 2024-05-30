"use client";
import React, { useEffect, useContext, createContext } from "react";
import { auth } from "@/lib/firebase/firebase-config";
import { useState } from "react";
import { User } from "firebase/auth";
import { onAuthStateChanged } from "firebase/auth";

export type TAuthContext = {
  currentUser: User | null;
  getUser: () => User | null;
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
        isLoading,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

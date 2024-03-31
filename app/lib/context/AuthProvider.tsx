"use client";
import React, { useEffect, useContext, createContext } from "react";
import { auth } from "@/app/lib/firebase/firebase-config";
import { useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { User } from "firebase/auth";

const AuthContext = createContext<User | null>(null);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (authUser) => {
      setUser(authUser);
    });

    return () => {
      unsubscribe(); // Detener el observador cuando el componente se desmonte
    };
  }, []);

  return <AuthContext.Provider value={user}>{children}</AuthContext.Provider>;
};

export const useUser = () => useContext(AuthContext);

"use client";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/lib/firebase/firebase-config";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import { useState } from "react";
import { formatFirebaseError } from "@/lib/utils/utils";

export const useLogin = () => {
  const [error, setError] = useState<string | null>(null);

  const logIn = (
    email: string,
    password: string,
    router: AppRouterInstance
  ) => {
    signInWithEmailAndPassword(auth, email, password)
      .then(() => router.push("/video-uploader"))
      .catch((err) => {
        setError(formatFirebaseError(err));
        console.log(err);
      });
  };

  return { logIn, error };
};

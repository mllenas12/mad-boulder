import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "@/lib/firebase/firebase-config";
import { useState } from "react";
import { formatFirebaseError } from "../utils/utils";

export const useSignUp = () => {
  const [error, setError] = useState<string | null>(null);
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
        setError(formatFirebaseError(err));
        console.log(err);
      });
  };
  return { signUp, error };
};

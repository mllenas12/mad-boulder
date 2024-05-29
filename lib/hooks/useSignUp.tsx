import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "@/lib/firebase/firebase-config";
export const useSignUp = () => {
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
  return { signUp };
};

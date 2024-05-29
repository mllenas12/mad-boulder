import { signOut } from "firebase/auth";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import { auth } from "../firebase/firebase-config";

export const useLogout = () => {
  const logOut = (router: AppRouterInstance) => {
    signOut(auth)
      .then(() => {
        router.replace("/");
      })
      .catch((err) => console.log(err));
  };
  return { logOut };
};

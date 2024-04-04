"use client";
import { FcGoogle } from "react-icons/fc";
import { useAuth } from "@/app/lib/context/AuthProvider";
import { useRouter } from "next/navigation";

export const SignUpGoogle = () => {
  const { loginWithGoogle } = useAuth();
  const router = useRouter();

  const handleLoginWithGoogle = () => {
    loginWithGoogle()
      .then(() => router.push("/video-uploader"))
      .catch((err: string) => {
        console.log(err);
      });
  };
  return (
    <button
      onClick={handleLoginWithGoogle}
      className="w-full flex border p-2 justify-center gap-2 bg-white"
    >
      <FcGoogle className="my-auto" />
      <p>Continue with Google</p>
    </button>
  );
};

"use client";
import { FcGoogle } from "react-icons/fc";
import { useRouter } from "next/navigation";
import { useLoginWithGoogle } from "@/lib/hooks/useLoginWithGoogle";

export const SignUpGoogle = () => {
  const { loginWithGoogle } = useLoginWithGoogle();
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

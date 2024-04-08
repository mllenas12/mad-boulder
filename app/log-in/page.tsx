import React from "react";
import { SignInForm } from "@/app/ui/Forms/SignInForm";

export default function SignInPage() {
  return (
    <div className="flex flex-col text-center bg-neutral-100 py-16">
      {/* Header */}
      <img src="/logo/MB_empty_back.png" alt="" className="w-32 mx-auto" />
      {/* Main */}
      <div className="py-8 flex flex-col gap-6 w-2/3 md:w-1/2 lg:w-1/3 mx-auto">
        <h2 className="font-semibold">Log In to your account</h2>
        <SignInForm />
        <div className="my-2 flex flex-col gap-2 justify-center h-[180px] w-full mx-auto rounded text-white font-bold  text-center text-2xl bg-cover bg-center bg-[url('/images/backgrounds/upload-background.png')]">
          <h4 className="drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">597</h4>
          <h4 className="drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">
            CONTRIBUTORS
          </h4>
        </div>
      </div>
    </div>
  );
}

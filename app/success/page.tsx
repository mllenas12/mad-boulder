"use client";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function SuccessPage() {
  const router = useRouter();

  useEffect(() => {
    const redirectTimer = setTimeout(() => {
      router.push("/video-uploader");
    }, 3000);

    return () => clearTimeout(redirectTimer);
  }, [router]);

  return (
    <div>
      <h1>¡Registro exitoso!</h1>
      <p>Tu cuenta ha sido creada con éxito.</p>
    </div>
  );
}

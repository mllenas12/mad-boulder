"use client";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import { FiCheckCircle } from "react-icons/fi";

export default function Success({
  route,
  h2Text,
  pText,
}: {
  route: string;
  h2Text: string;
  pText: string;
}) {
  const router = useRouter();
  useEffect(() => {
    const redirectTimer = setTimeout(() => {
      router.push(route);
    }, 1500);

    return () => clearTimeout(redirectTimer);
  }, [router]);

  return (
    <div className="py-24 flex flex-col items-center gap-8">
      <h2>{h2Text}</h2>
      <FiCheckCircle color="green" size="100px" />
      <p>{pText}</p>
    </div>
  );
}

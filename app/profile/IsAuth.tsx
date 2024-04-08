"use client";
import { redirect } from "next/navigation";
import { useAuth } from "@/lib/context/AuthProvider";
import { useEffect } from "react";

export default function isAuth({ Component }: { Component: any }) {
  return function IsAuth(props: any) {
    const user = useAuth();
    useEffect(() => {
      if (!user) {
        redirect("/log-in");
      }
    }, []);
    if (!user) {
      return null;
    }
    return <Component {...props} />;
  };
}

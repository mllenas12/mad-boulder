"use client";
import { isAuthenticated } from "../lib/utils/protect-utils";
import { useEffect } from "react";
import { redirect } from "next/navigation";

export default function IsAuth({
  user,
  children,
}: {
  user: any;
  children: any;
}) {
  useEffect(() => {
    const auth = isAuthenticated(user);

    if (!auth) {
      redirect("/");
    }
  }, [user]);

  if (!user) {
    return null;
  }

  return children;
}

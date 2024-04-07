"use client";
import { redirect } from "next/navigation";
import { useAuth } from "../lib/context/AuthProvider";

export default function IsAuth({
  user,
  children,
}: {
  user: any;
  children: any;
}) {
  const { isLoading } = useAuth();
  if (isLoading) return null;

  if (!user) {
    redirect("/log-in");
  } else {
    return children;
  }
}

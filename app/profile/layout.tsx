"use client";
import { ProfileHeader } from "@/app/ui/Profile/ProfileHeader";
import { useAuth } from "@/lib/context/AuthProvider";
import { redirect } from "next/navigation";
import { useEffect } from "react";

export default function ProfileLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const currentUser = useAuth();
  useEffect(() => {
    if (!currentUser) {
      redirect("/log-in");
    }
  }, [currentUser]);

  if (!currentUser) {
    return null;
  }

  return (
    <div className="flex flex-col min-h-screen ">
      <ProfileHeader />
      <main className="py-12 ">{children}</main>
    </div>
  );
}

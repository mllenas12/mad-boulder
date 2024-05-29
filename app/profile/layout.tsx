"use client";
import { ProfileHeader } from "@/app/ui/Profile/ProfileHeader";
import { useAuth } from "@/lib/context/AuthProvider";
import { useRouter, redirect } from "next/navigation";
import { useEffect } from "react";
export default function ProfileLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { getUser } = useAuth();
  const user = getUser();

  useEffect(() => {
    if (!user) {
      redirect("/log-in");
    }
  }, [user]);

  if (!user) {
    return null;
  }

  return (
    <div className="flex flex-col min-h-screen ">
      <ProfileHeader />
      <main className="py-12 ">{children}</main>
    </div>
  );
}

"use client";
import { ProfileHeader } from "@/app/ui/Profile/ProfileHeader";
import IsAuth from "./IsAuth";
import { useAuth } from "@/app/lib/context/AuthProvider";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
export default function ProfileLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { getUser } = useAuth();
  const user = getUser();
  const router = useRouter();

  useEffect(() => {
    if (!user) {
      router.replace("/log-in");
    }
  }, [user, router]);

  if (!user) {
    return null;
  }

  return (
    <div className="flex flex-col min-h-screen">
      <ProfileHeader />
      <main className="py-12 ">{children}</main>
    </div>
  );
}

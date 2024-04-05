"use client";
import { ProfileHeader } from "@/app/ui/Profile/ProfileHeader";
import IsAuth from "./IsAuth";
import { useAuth } from "@/app/lib/context/AuthProvider";

export default function ProfileLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { getUser } = useAuth();
  const user = getUser();
  return (
    <IsAuth user={user}>
      <div className="flex flex-col min-h-screen">
        <ProfileHeader />
        <main className="py-12 ">{children}</main>
      </div>
    </IsAuth>
  );
}

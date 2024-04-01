import { ProfileHeader } from "../ui/Profile/ProfileHeader";

export default function ProfileLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col min-h-screen">
      <ProfileHeader />
      <main className="py-12">{children}</main>
    </div>
  );
}

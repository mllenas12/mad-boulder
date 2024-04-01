import { ProfileHeader } from "../ui/Profile/ProfileHeader";

export default function ProfileLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <main className="lg:px-64 lg:py-10 h-[1000px] relative flex flex-col  text-center">
        <ProfileHeader />
        {children}
      </main>
    </div>
  );
}

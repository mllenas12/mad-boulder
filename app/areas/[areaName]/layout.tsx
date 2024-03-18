import { AreaHeader } from "@/app/ui/Areas/AreaHeader";
export default function AreaNameLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <AreaHeader areaName={"Ahedo"} />
      <main className="">{children}</main>
    </div>
  );
}

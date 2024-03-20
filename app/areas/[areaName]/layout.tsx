import { AreaHeader } from "@/app/ui/Areas/AreaHeader";

export default function AreaNameLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { areaName: string };
}) {
  return (
    <div>
      <AreaHeader areaName={decodeURIComponent(params.areaName)} />
      <main className="lg:px-64 lg:py-10">{children}</main>
    </div>
  );
}

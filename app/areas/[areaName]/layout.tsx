import { AreaHeader } from "@/ui/Areas/AreaHeader";

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
      <main className="md:py-6 md:w-3/4 lg:w-1/2 md:mx-auto">{children}</main>
    </div>
  );
}

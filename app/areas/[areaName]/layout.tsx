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
      <main className="py-6 md:w-3/4 lg:w-2/3 md:mx-auto">{children}</main>
    </div>
  );
}

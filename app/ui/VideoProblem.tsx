"use client";
export const VideoProblem = ({ url }: { url: string | undefined }) => {
  if (typeof window !== "undefined") {
    return (
      <iframe
        width="100%"
        height="100%"
        src={url}
        allowFullScreen
        className="mx-auto h-[250px] lg:h-[400px]"
      ></iframe>
    );
  }
};

import Link from "next/link";
const Button = ({
  children,
  url,
}: {
  children: React.ReactNode;
  url: string;
}) => {
  return (
    <Link
      href={url}
      className="bg-yellow-400 z-10 text-neutral-700 font-semibold rounded w-fit px-4 py-2 lg:my-8 mx-auto"
    >
      {children}
    </Link>
  );
};

export default Button;

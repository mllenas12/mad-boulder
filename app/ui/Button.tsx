import Link from "next/link";
const Button = ({
  children,
  url,
  className,
}: {
  children: React.ReactNode;
  url: string;
  className: string;
}) => {
  return (
    <Link
      href={url}
      className={`bg-yellow-400 z-10 text-neutral-700 font-semibold rounded w-fit px-4 py-2 ${className}`}
    >
      {children}
    </Link>
  );
};

export default Button;

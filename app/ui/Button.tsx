const Button = ({ children }: { children: React.ReactNode }) => {
  return (
    <button className="bg-yellow-400 z-10 text-neutral-700 font-semibold rounded w-fit px-4 py-2 lg:my-8 mx-auto">
      {children}
    </button>
  );
};

export default Button;

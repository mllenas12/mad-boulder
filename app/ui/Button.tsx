const Button = ({ children }: { children: React.ReactNode }) => {
  return (
    <button className="bg-yellow-400 text-neutral-700 font-semibold rounded w-fit px-4 py-2 mx-4">
      {children}
    </button>
  );
};

export default Button;

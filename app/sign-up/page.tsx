import Link from "next/link";
import { SignUpForm } from "../ui/SignUpForm";
import { SignUpGoogle } from "../ui/SignUpGoogle";
export default function SignUpPage() {
  return (
    <div className="flex flex-col text-center rounded-xl w-4/5 md:w-1/2 bg-neutral-400 mx-auto my-16 py-8 text-white">
      {/* Header */}
      <img src="/logo/MB_empty_back.png" alt="" className="w-20 mx-auto" />
      {/* Main */}
      <div className="py-8 flex flex-col gap-6 w-4/5 mx-auto">
        <div className="">
          <h2 className="font-semibold">Sign up</h2>
          <p className=" text-sm py-2">
            Create an account and save time sharing your betas
          </p>
        </div>
        <SignUpForm />
        <div className="divider text-xs">OR</div>
        <SignUpGoogle />
        <p>
          Already have an account?{" "}
          <Link
            href={"/log-in"}
            className="text-semantic2-900 font-semibold underline cursor-pointer"
          >
            Log in here
          </Link>
        </p>
        {/* <div className="my-2 flex flex-col gap-2 justify-center h-[139px] w-full mx-auto rounded text-white font-bold  text-center text-2xl bg-cover bg-[url('/images/example.jpeg')]">
          <h4>591</h4>
          <h4>CONTRIBUTORS</h4>
        </div> */}
      </div>
    </div>
  );
}

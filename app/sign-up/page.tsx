import Link from "next/link";
import { SignUpForm } from "@/app/ui/SignUpForm";
import { SignUpGoogle } from "@/app/ui/SignUpGoogle";

export default function SignUpPage() {
  return (
    <div className="flex flex-col text-center bg-neutral-100 py-16">
      {/* Header */}
      <img src="/logo/MB_empty_back.png" alt="" className="w-32 mx-auto" />
      {/* Main */}
      <div className="py-8 flex flex-col gap-6 w-4/5 md:w-1/2 lg:w-1/3 mx-auto">
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
            className="text-amber-400 font-semibold underline cursor-pointer"
          >
            Log in here
          </Link>
        </p>
      </div>
    </div>
    // <div className="flex flex-col text-center rounded-xl w-4/5 md:w-1/2 bg-neutral-400 mx-auto my-16 py-8 text-white">
    //   {/* Header */}
    //   <img src="/logo/MB_empty_back.png" alt="" className="w-20 mx-auto" />
    //   {/* Main */}
    //   <div className="py-8 flex flex-col gap-6 w-4/5 mx-auto">
    //     <div className="">
    //       <h2 className="font-semibold">Sign up</h2>
    //       <p className=" text-sm py-2">
    //         Create an account and save time sharing your betas
    //       </p>
    //     </div>
    //     <SignUpForm />
    //     <div className="divider text-xs">OR</div>
    //     <SignUpGoogle />
    //     <p>
    //       Already have an account?{" "}
    //       <Link
    //         href={"/log-in"}
    //         className="text-amber-700 font-semibold underline cursor-pointer"
    //       >
    //         Log in here
    //       </Link>
    //     </p>
    //   </div>
    // </div>
  );
}

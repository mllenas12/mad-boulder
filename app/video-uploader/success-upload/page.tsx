import Success from "@/app/ui/Layout/Success";
export default function SuccessUploadPage() {
  return (
    <Success
      route={"/areas"}
      h2Text={"Your video has been successfully uploaded"}
      pText={"¡Continue exploring more climbing betas!"}
    />
  );
}

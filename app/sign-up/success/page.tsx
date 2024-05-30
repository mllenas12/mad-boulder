import Success from "@/app/ui/Layout/Success";

export default function SuccessPage() {
  return (
    <Success
      route={"/video-uploader"}
      h2Text={"Your account has been successfully created"}
      pText={"¡Register Success!"}
    />
  );
}

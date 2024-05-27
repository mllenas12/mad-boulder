import { UploadForm } from "@/app/ui/Forms/UploadForm";
import HeadComponent from "../ui/HeadComponent";
export default function VideoUploaderPage() {
  return (
    <>
      <HeadComponent
        title="Upload Your Beta"
        description="Upload your beta video to MadBoulder"
      />
      <div className="relative flex flex-col h-[950px] md:h-[700px]">
        <header
          style={{ backgroundImage: "url(/images/bg-example.jpg)" }}
          className="flex justify-center h-[150px] md:h-[200px] relative bg-no-repeat bg-cover bg-center"
        >
          <div className="absolute inset-0 bg-black opacity-10"></div>
          <h2 className="text-white font-semibold pt-8 relative z-2 px-2 drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">
            UPLOAD YOUR BETA
          </h2>
        </header>

        <div className="absolute top-[100px] left-1/2 transform -translate-x-1/2">
          <UploadForm />
          <p className="text-[10px] text-center mt-4  w-64 md:w-96">
            MadBoulder reserves the right to not publish a video. Possible
            reasons are, but are not limited to: poor video quality, poor camera
            angle and wrong or repeated line. Please note that there might be a
            delay between uploading and publishing a video.
          </p>
        </div>
      </div>
    </>
  );
}

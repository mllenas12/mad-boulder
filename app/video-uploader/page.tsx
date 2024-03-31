import { UploadForm } from "../ui/UploadForm";
export default function VideoUploaderPage() {
  return (
    <div className="relative flex flex-col h-[950px] md:h-[700px]">
      <header className="flex justify-center bg-[url('/images/bg-example.jpg')] h-[150px] md:h-[200px] bg-cover bg-center">
        <h2 className="text-white font-semibold text-2xl pt-8">
          UPLOAD YOUR BETA
        </h2>
      </header>
      <div className="absolute top-[100px] left-1/2 transform -translate-x-1/2">
        <UploadForm />
        <p className="text-[10px] text-center mt-4  w-64 md:w-96">
          MadBoulder reserves the right to not publish a video. Possible reasons
          are, but are not limited to: poor video quality, poor camera angle and
          wrong or repeated line. Please note that there might be a delay
          between uploading and publishing a video.
        </p>
      </div>
    </div>
  );
}

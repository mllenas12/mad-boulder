import Button from "../Button";
export const Beta = () => {
  return (
    <div className="h-72 flex flex-col justify-center text-center gap-4 text-white bg-cover bg-no-repeat bg-[url('/images/home/upload-background-small.png')] md:bg-[url('/images/home/upload-background.png')]">
      <h2 className="text-3xl font-semibold">UPLOAD YOUR BETA</h2>
      <p>
        Do you want to help us in our journey? Upload your beta and contribute
        to the project.
      </p>
      <Button>UPLOADER</Button>
    </div>
  );
};

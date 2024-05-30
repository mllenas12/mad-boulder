"use client";
import { storage } from "@/lib/firebase/firebase-config";
import { useState } from "react";
import { getDownloadURL, ref } from "firebase/storage";
import { uploadFormToDb } from "@/lib/firebase/firebase-utils";
import { useAuth } from "@/lib/context/AuthProvider";
import { uploadBytesResumable } from "firebase/storage";
import { useRouter } from "next/navigation";
import { IFormData } from "@/lib/types";
import { useUploadVideo } from "@/lib/hooks/useUploadVideo";

export const UploadForm = () => {
  const { getUser } = useAuth();
  const router = useRouter();
  const user = getUser();

  const FORM_STATES = {
    USER_NOT_KNOWN: 0,
    LOADING: 1,
    SUCCESS: 2,
    ERROR: -1,
  };

  const [formData, setFormData] = useState<IFormData>({
    climber: "",
    email: "",
    problem: "",
    area: "",
    sector: "",
    grade: "",
    message: "",
    file: "",
    isSubscribed: true,
  });

  // const [uploadProgress, setUploadProgress] = useState(2);
  const { uploadVideo, uploadProgress, error } = useUploadVideo();
  const [status, setStatus] = useState(FORM_STATES.USER_NOT_KNOWN);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = event.target;
    setFormData((prevData) => {
      return {
        ...prevData,
        [name]: type === "checkbox" ? checked : value,
      };
    });
  };

  const handleTextareaChange = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handelVideoChange = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const fileVideo = event.target.files ? event.target.files[0] : null;
    setFormData((prevData) => ({
      ...prevData,
      file: fileVideo,
    }));
  };

  // const uploadVideo = (file: any): Promise<string> => {
  //   return new Promise((resolve, reject) => {
  //     const videoRef = ref(storage, `videos/${file.name}`);
  //     const uploadTask = uploadBytesResumable(videoRef, file);

  //     uploadTask.on(
  //       "state_changed",
  //       (snapshot) => {
  //         const progress =
  //           (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
  //         setUploadProgress(progress);
  //       },
  //       (error) => {
  //         console.error("Error uploading file:", error);
  //         reject(error);
  //       },
  //       () => {
  //         getDownloadURL(uploadTask.snapshot.ref)
  //           .then((downloadURL) => {
  //             console.log("Success upload");
  //             resolve(downloadURL);
  //           })
  //           .catch((error) => {
  //             console.error("Error getting download URL:", error);
  //             reject(error);
  //           });
  //       }
  //     );
  //   });
  // };

  const handleSubmit = async (event: React.ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();

    setStatus(FORM_STATES.LOADING);
    try {
      const url = await uploadVideo(formData.file);
      await uploadFormToDb(formData, user, url);
      setStatus(FORM_STATES.SUCCESS);
      router.push("/video-uploader/success-upload");
    } catch (err) {
      console.error(err);
      setStatus(FORM_STATES.ERROR);
    }
  };
  const isButtonDisabled = status === FORM_STATES.LOADING;
  return (
    <form
      className="bg-neutral-100 grid grid-cols-2 p-8 rounded-lg shadow-lg w-64 md:w-96 mx-auto gap-4"
      onSubmit={handleSubmit}
    >
      {!user && (
        <>
          <div className="col-span-2">
            <input
              type="text"
              placeholder="Climber (Optional)"
              onChange={handleChange}
              name="climber"
              value={formData.climber}
              className="w-full pl-2 rounded"
            />
          </div>

          <div className="col-span-2">
            <input
              type="email"
              placeholder="Email"
              onChange={handleChange}
              name="email"
              value={formData.email}
              className="w-full pl-2 rounded"
              required
            />
          </div>
        </>
      )}
      <div className="col-span-2 md:col-span-1">
        <input
          type="text"
          placeholder="Problem"
          onChange={handleChange}
          name="problem"
          value={formData.problem}
          className="w-full pl-2 rounded"
          required
        />
      </div>
      <div className="col-span-2 md:col-span-1">
        <input
          type="text"
          placeholder="Zone"
          onChange={handleChange}
          name="area"
          value={formData.area}
          className="w-full pl-2 rounded"
          required
        />
      </div>
      <div className="col-span-2 md:col-span-1">
        <input
          type="text"
          placeholder="Sector"
          onChange={handleChange}
          name="sector"
          value={formData.sector}
          className="w-full pl-2 rounded"
          required
        />
      </div>
      <div className="col-span-2 md:col-span-1">
        <input
          type="text"
          placeholder="Grade"
          onChange={handleChange}
          name="grade"
          value={formData.grade}
          className="w-full pl-2 rounded"
          required
        />
      </div>
      <div className="col-span-2">
        <textarea
          placeholder="Message"
          onChange={handleTextareaChange}
          name="message"
          value={formData.message}
          className="w-full h-20 resize-none pl-2 rounded"
        />
      </div>
      <div className="col-span-2">
        <input
          type="file"
          onChange={handelVideoChange}
          name="file"
          accept="video/*"
          className="file-input file-input-bordered file-input-xs w-full max-w-xs"
          required
        />
      </div>

      <div className="col-span-2 flex items-start">
        <input
          type="checkbox"
          id="permission"
          name="permission"
          className="mr-2 my-auto"
          required
        />
        <label htmlFor="permission" className="text-xs">
          I grant permission to MadBoulder to use the submitted video on YouTube
          for public display.
        </label>
      </div>

      {!user && (
        <div className="col-span-2 flex items-start">
          <input
            type="checkbox"
            id="isSubscribed"
            name="isSubscribed"
            checked={formData.isSubscribed}
            onChange={handleChange}
            className="mr-2 my-auto"
          />
          <label htmlFor="isSubscribed" className="text-xs">
            {" "}
            I wish to subscribe to MadBoulder&apos;s newsletter
          </label>
        </div>
      )}
      <button
        disabled={isButtonDisabled}
        className={`col-span-2   text-neutral-700 font-semibold rounded w-fit px-4 py-2 mx-auto ${
          isButtonDisabled ? "bg-slate-200" : "bg-yellow-400"
        }`}
      >
        Upload Video
      </button>
      <div className="col-span-2 w-full bg-gray-200 rounded-md overflow-hidden mx-auto">
        <div
          className={`bg-yellow-400 h-2 transition-all`}
          style={{ width: `${uploadProgress}%` }}
        ></div>
      </div>
      {error && (
        <p className="col-span-2 text-red-500 text-center mt-2">{error}</p>
      )}
    </form>
  );
};

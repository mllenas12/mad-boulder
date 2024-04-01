"use client";
import { storage } from "../lib/firebase/firebase-config";
import { useState, useEffect } from "react";
import { getBytes, getDownloadURL, ref, uploadBytes } from "firebase/storage";
import {
  useUser,
  uploadFormToDb,
  uploadVideo,
} from "../lib/firebase/firebase-utils";
import { useRouter } from "next/navigation";
export const UploadForm = () => {
  const FORM_STATES = {
    USER_NOT_KNOWN: 0,
    LOADING: 1,
    SUCCESS: 2,
    ERROR: -1,
  };

  const VIDEO_STATES = {
    ERROR: -1,
    NONE: 0,
    UPLOADING: 2,
    COMPLETE: 3,
  };

  const [formData, setFormData] = useState({
    climber: "",
    email: "",
    problem: "",
    area: "",
    sector: "",
    grade: "",
    message: "",
    file: undefined,
    isSubscribed: true,
  });

  //const [task, setTask] = useState<any>();
  const [file, setFile] = useState<any>("");
  const [videoUrl, setVideoUrl] = useState("");
  const [status, setStatus] = useState(FORM_STATES.USER_NOT_KNOWN);
  const user = useUser();
  const router = useRouter();

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type, checked } = event.target;
    setFormData((prevData) => {
      return {
        ...prevData,
        [name]: type === "checkbox" ? checked : value,
      };
    });
    console.log(formData);
  };

  const handelVideoChange = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const fileVideo = event.target.files ? event.target.files[0] : null;
    setFile(fileVideo);
  };

  const handleSubmit = async (event: React.ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();

    setStatus(FORM_STATES.LOADING);
    uploadVideo(file)
      .then(() => {
        const videoRef = ref(storage, `videos/${file?.name}`);
        return getDownloadURL(videoRef);
      })
      .then((url) => {
        setVideoUrl(url);
        return uploadFormToDb(formData, user, url);
      })
      .then(() => setStatus(FORM_STATES.SUCCESS))
      .then(() => {
        router.push("/");
      })
      .catch((err) => {
        console.log(err);
        setStatus(FORM_STATES.ERROR);
      });
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
              placeholder="Climber"
              onChange={handleChange}
              name="climber"
              value={formData.climber}
              className="w-full pl-2 rounded"
              required
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
        />
      </div>
      <div className="col-span-2 md:col-span-1">
        <input
          type="text"
          placeholder="Area"
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
        />
      </div>
      <div className="col-span-2">
        <textarea
          placeholder="Message"
          onChange={handleChange}
          name="message"
          value={formData.message}
          className="w-full h-20 resize-none pl-2 rounded"
        />
      </div>
      <div className="col-span-2">
        <input
          type="file"
          onChange={handelVideoChange}
          //onChange={(e) => handelVideoChange(e.target.files[0])}
          name="file"
          accept="file"
          value={formData.file}
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
      <button
        disabled={isButtonDisabled}
        className={`col-span-2   text-neutral-700 font-semibold rounded w-fit px-4 py-2 mx-auto ${
          isButtonDisabled ? "bg-slate-200" : "bg-yellow-400"
        }`}
      >
        Upload Video
      </button>
    </form>
  );
};

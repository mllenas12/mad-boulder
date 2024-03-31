"use client";
import { useState } from "react";
import { useUser, uploadVideo } from "../lib/firebase/firebase-utils";
import { useRouter } from "next/navigation";

export const UploadForm = () => {
  const FORM_STATES = {
    USER_NOT_KNOWN: 0,
    LOADING: 1,
    SUCCESS: 2,
    ERROR: -1,
  };
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    problem: "",
    area: "",
    sector: "",
    grade: "",
    message: "",
    video: "",
    isSubscribed: true,
  });
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
  };

  const handleSubmit = (event: React.ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus(FORM_STATES.LOADING);
    uploadVideo(formData)
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
      <div className="col-span-2">
        <input
          type="text"
          placeholder="Name"
          onChange={handleChange}
          name="name"
          value={formData.name}
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
        />
      </div>
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
          onChange={handleChange}
          name="video"
          value={formData.video}
          className="file-input file-input-bordered file-input-xs w-full max-w-xs"
        />
      </div>
      <div className="col-span-2 flex items-start">
        <input
          type="checkbox"
          id="check1"
          name="check1"
          value="check1"
          className="mr-2 my-auto"
          //onChange={handleChange}
        />
        <label htmlFor="check1" className="text-xs">
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

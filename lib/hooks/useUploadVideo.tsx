"use client";
import { useState } from "react";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { storage } from "../firebase/firebase-config";

export const useUploadVideo = () => {
  const [uploadProgress, setUploadProgress] = useState(2);
  const [error, setErrors] = useState<string | null>(null);

  const uploadVideo = (file: any): Promise<string> => {
    return new Promise((resolve, reject) => {
      const videoRef = ref(storage, `videos/${file.name}`);
      const uploadTask = uploadBytesResumable(videoRef, file);

      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          setUploadProgress(progress);
        },
        (error) => {
          console.error("Error uploading file:", error);
          setErrors("Error uploading file");
          reject(error);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref)
            .then((downloadURL) => {
              console.log("Success upload");
              resolve(downloadURL);
            })
            .catch((error) => {
              console.error("Error getting download URL:", error);
              reject(error);
            });
        }
      );
    });
  };

  return { uploadVideo, uploadProgress, error };
};

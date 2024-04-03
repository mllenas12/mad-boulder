"use client";
import { IFormData } from "@/app/lib/types";
import { PiVideo } from "react-icons/pi";
import { useAuth } from "@/app/lib/context/AuthProvider";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "@/app/lib/firebase/firebase-config";
import { useEffect, useState } from "react";
import { VideoCards } from "@/app/ui/Profile/VideoCards";
import Link from "next/link";

export default function MyVideosPage() {
  const { currentUser } = useAuth();
  const user = currentUser;
  const uid = user?.uid;

  const [videos, setVideos] = useState<IFormData[]>([]);
  const [color, setColor] = useState("");

  useEffect(() => {
    if (uid) {
      console.log(uid);
      getVideos();
    }
  }, [uid]);

  const getVideos = async () => {
    const q = query(collection(db, "videos"), where("userId", "==", uid));
    getDocs(q)
      .then((querySnapshot) => {
        const videoList: any = [];
        querySnapshot.forEach((doc) => {
          videoList.push({ id: doc.id, ...doc.data() });
        });
        setVideos(videoList);
      })
      .catch((error) => {
        console.error("Error fetching videos:", error);
      });
  };

  const videoCard = videos.map((video: IFormData) => {
    return <VideoCards key={video.id} video={video} />;
  });

  return (
    <div className="text-center flex flex-col gap-4 ">
      <h3 className="text-xl font-semibold">Your uploaded videos:</h3>
      {/* <div className="flex flex-col gap-4 "> */}
      {videos.length == 0 ? (
        <div className="py-2 mx-auto">
          No videos uploaded yet. Try to upload your first video{" "}
          <Link
            href="/video-uploader"
            className="text-amber-400 font-semibold underline text-center"
          >
            here!
          </Link>
          <PiVideo size={"40px"} className="mx-auto my-4" />
        </div>
      ) : (
        <div className="flex flex-col gap-y-6 md:px-8 md:grid md:grid-cols-2">
          {videoCard}
        </div>
      )}
    </div>
  );
}

"use client";
import { PiMedal } from "react-icons/pi";
import { useState, useEffect } from "react";
import { useAuth } from "@/app/lib/context/AuthProvider";
export const ProfileHeader = () => {
  const { getUser } = useAuth();
  const user = getUser();
  const uid = user?.uid;
  const [userPhotoUrl, setUserPhotoUrl] = useState("");

  useEffect(() => {
    if (user) {
      const url = user.photoURL ? user.photoURL : "/images/user.png";
      setUserPhotoUrl(url);
    } else {
      setUserPhotoUrl("/images/user.png");
    }
  }, [user]);
  return (
    <div className="h-[370px] ">
      <header className="relative bg-neutral-400 h-[194px] md:h-[200px] bg-cover bg-center">
        <div className="absolute top-[50px] left-1/2 transform -translate-x-1/2 w-full">
          <img
            src={userPhotoUrl}
            alt=""
            className="rounded-full bg-neutral-100 w-48 h-48 mx-auto mb-4"
          />
          <div className="text-center">
            <h3 className="font-semibold text-2xl ">{user?.displayName}</h3>
            <p className="text-sm text-neutral-400">Welcome to MadBoulder</p>
            <PiMedal size="67px" color="#FAC12F" className="mx-auto mt-4" />
          </div>
        </div>
      </header>
    </div>
  );
};

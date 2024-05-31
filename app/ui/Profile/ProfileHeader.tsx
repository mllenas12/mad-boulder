"use client";
import { PiMedal } from "react-icons/pi";
import { useState, useEffect } from "react";
import { useAuth } from "@/lib/context/AuthProvider";

export const ProfileHeader = () => {
  const { currentUser } = useAuth();
  const [userPhotoUrl, setUserPhotoUrl] = useState("");
  useEffect(() => {
    if (currentUser) {
      const url = currentUser.photoURL
        ? currentUser.photoURL
        : "/images/profile.jpeg";
      setUserPhotoUrl(url);
    } else {
      setUserPhotoUrl("/images/user.png");
    }
  }, [currentUser]);

  return (
    <div className="h-[370px] ">
      <header className="relative h-[194px] md:h-[200px] bg-cover  bg-neutral-400">
        <div className="absolute top-[50px] left-1/2 transform -translate-x-1/2 w-full">
          <img
            src={userPhotoUrl}
            alt="Profile photo"
            className="rounded-full bg-neutral-100 w-48 h-48 mx-auto mb-4"
          />

          <div className="text-center">
            <h3 className="font-semibold text-2xl ">
              {currentUser?.displayName}
            </h3>
            <p className="text-sm text-neutral-400">Welcome to MadBoulder</p>
            <PiMedal size="67px" color="#FAC12F" className="mx-auto mt-4" />
          </div>
        </div>
      </header>
    </div>
  );
};

"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import React from "react";
import styles from "./cardFlip.module.css";
import { IArea } from "@/app/lib/types";

export const Card = ({
  imageUrl,
  title,
  link,
}: {
  imageUrl: string;
  title: string;
  link: string;
}) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  function handleFlip() {
    if (!isAnimating) {
      setIsFlipped(!isFlipped);
      setIsAnimating(!isAnimating);
    }
  }

  const imageThumbnail = imageUrl || "/images/example.jpeg";

  return (
    <div
      className={`${styles.flipCard} w-[140px] h-[200px] rounded-md mx-auto`}
      onClick={handleFlip}
    >
      <motion.div
        className={`${styles.flipCardInner} w-[100%] h-[100%] `}
        initial={false}
        animate={{ rotateY: isFlipped ? 180 : 360 }}
        transition={{ duration: 0.2, animationDirection: "normal" }}
        onAnimationComplete={() => setIsAnimating(false)}
      >
        <img
          className={`${styles.flipCardFront} w-full h-full text-white rounded-lg `}
          src={imageThumbnail}
        ></img>

        <div
          className={`${styles.flipCardBack} w-[100%] h-[100%] bg-cover border-[1px] text-center rounded-lg p-4 bg-neutral-300 flex flex-col justify-center gap-4`}
        >
          <h4 className="font-semibold text-xs ">{title}</h4>
          <a
            className="bg-yellow-400 px-4 p-2 w-fit text-xs mx-auto rounded"
            href={link}
            target="_blank"
          >
            BUY
          </a>
        </div>
      </motion.div>
    </div>
  );
};

export const CardFlip = ({ data }: { data: IArea | undefined }) => {
  return (
    <div className="flex flex-wrap gap-8">
      {data?.guides.map((guide, index) => (
        <Card
          key={index}
          imageUrl={guide.thumbnail}
          title={guide.name}
          link={guide.link[0]}
        />
      ))}
    </div>
  );
};

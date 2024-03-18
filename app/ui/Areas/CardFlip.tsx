"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import React from "react";
import "/Users/mariallenas/Desktop/DEVELOPMENT/IT ACADEMY/Especialització - REACT/s9.ProjecteFinal/madboulder-project/app/ui/Areas/cardflip.modules.css";

export const Card = () => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  function handleFlip() {
    if (!isAnimating) {
      setIsFlipped(!isFlipped);
      setIsAnimating(!isAnimating);
    }
  }
  return (
    <div className="flex items-center justify-center">
      <div
        className="flip-card w-[120px] h-[180px] rounded-md"
        onClick={handleFlip}
      >
        <motion.div
          className="flip-card-inner w-[100%] h-[100%]"
          initial={false}
          animate={{ rotateY: isFlipped ? 180 : 360 }}
          transition={{ duration: 0.2, animationDirection: "normal" }}
          onAnimationComplete={() => setIsAnimating(false)}
        >
          <div className="flip-card-front w-[100%] h-[100%] bg-no-repeat bg-contain  text-white rounded-lg p-4 bg-[url('https://m.media-amazon.com/images/I/81UJX3rkGML._AC_UY218_.jpg')]"></div>

          <div className="flip-card-back w-[100%] h-[100%] bg-cover border-[1px] text-center rounded-lg p-4 bg-neutral-300 flex flex-col justify-center gap-4">
            <h4 className="font-semibold text-xs ">Boulder En España Guide</h4>
            <a
              className="bg-yellow-400 px-4 p-2 w-fit text-xs mx-auto rounded"
              href="https://amzn.to/3UizeG0"
              target="_blank"
            >
              BUY
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export const CardFlip = () => {
  // Array de datos de las tarjetas
  const cardData = [
    {
      imageUrl:
        "https://m.media-amazon.com/images/I/81UJX3rkGML._AC_UY218_.jpg",
      title: "Boulder En España Guide",
    },
    { imageUrl: "https://example.com/your-image-url.jpg", title: "Your Title" },
    // Puedes añadir más objetos de datos aquí
  ];

  return (
    <div className="flex items-center justify-center gap-4">
      {/* Mapeo sobre el array de datos y renderizo una tarjeta para cada objeto */}
      {cardData.map((card, index) => (
        <Card key={index} imageUrl={card.imageUrl} title={card.title} />
      ))}
    </div>
  );
};

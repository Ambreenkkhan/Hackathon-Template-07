"use client";
import React, { useState } from "react";

const HeartButton: React.FC = () => {
  const [isLiked, setIsLiked] = useState(false);

  const toggleLike = () => {
    setIsLiked((prev) => !prev);
  };

  return (
    <button
      onClick={toggleLike}
      className="flex items-center justify-center w-6 h-6 sm:w-8 sm:h-8 rounded-full cursor-pointer"
      aria-label={isLiked ? "Unlike" : "Like"}
    >
      <img
        src={isLiked ? "/redheart.png" : "/whiteheart.png"}
        alt={isLiked ? "Red heart" : "White heart"}
        className="w-full h-full object-contain"
      />
    </button>
  );
};

export default HeartButton;

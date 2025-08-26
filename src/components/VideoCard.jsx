// components/VideoCard.jsx
import React from "react";

const VideoCard = ({ src, title }) => {
  return (
    <div className="rounded-2xl overflow-hidden shadow-lg max-w-md w-full">
      <iframe
        src={src}
        height="316"
        width="100%"
        title={title}
        allowFullScreen
        loading="lazy"
        frameBorder="0"
        allow="clipboard-write"
        referrerPolicy="strict-origin-when-cross-origin"
        className="w-full h-[316px]"
      ></iframe>
    </div>
  );
};

export default VideoCard;

import React from "react";

export default function ImageCard({ src, alt, caption, link }) {
  return (
    <div className="rounded-lg shadow-lg w-full max-w-sm object-cover relative group w-64 h-64 overflow-hidden rounded-2xl shadow-lg">
      {/* Image */}
      <img
        src={src}
        alt={alt}
className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-105"
      />

      {/* Hover overlay */}
      <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-4 text-center">
        <div className="text-white">
          <p className="text-lg font-semibold">{caption}</p>
          {link && (
            <a
              href={link}
              target="_blank"
              className="text-sm underline mt-2 block"
            >

            </a>
          )}
        </div>
      </div>
    </div>
  );
}

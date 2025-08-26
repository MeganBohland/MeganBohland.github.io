import React from "react";
import Section from "./Section";
import ImageCard from "./ImageCard";

export default function ContentBlock({
  heading,
  children,
  image,
  imageAlt,
  imageCaption,
  imagePosition = "left", // "left" or "right"
}) {
  return (
    <div className="container mx-auto px-4 py-8">
      <div
        className={`flex flex-col lg:flex-row ${
          imagePosition === "right" ? "lg:flex-row-reverse" : ""
        } items-center gap-6`}
      >
        {image && (
          <div className="flex-shrink-0">
            <ImageCard src={image} alt={imageAlt} caption={imageCaption} />
          </div>
        )}
        <div className="flex-1 rounded-xl shadow-md p-6 text-lg leading-relaxed">
          <Section heading={heading}>{children}</Section>
        </div>
      </div>
    </div>
  );
}

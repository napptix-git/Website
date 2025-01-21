"use client";

import React, { forwardRef } from "react";

const FeatureSection = forwardRef(({ title, description }, ref) => {
  return (
    <div ref={ref} className="w-full h-screen flex flex-col items-start justify-center opacity-0">
      <h2 className="text-5xl font-bold text-white">{title}</h2>
      <p className="text-gray-400 mt-4">{description}</p>
    </div>
  );
});

export default FeatureSection;

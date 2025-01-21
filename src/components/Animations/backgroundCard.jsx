"use client";

import React from "react";

export function magicCard({ children, className }) {
  return (
    <div className="h-screen w-[80%] flex items-center justify-center bg-gray-200">
      <div className={`relative flex w-full h-[60%] rounded-xl shadow-lg bg-white ${className}`}>
        <div className="absolute inset-px z-10 rounded-xl bg-background" />
        <div className="relative z-30 text-black">{children || "Hello, I'm visible!"}</div>
      </div>
    </div>
  );
}

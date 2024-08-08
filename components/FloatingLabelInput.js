"use client";
import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const FloatingLabelInput = ({ label, ...props }) => {
  const [isFocused, setIsFocused] = useState(false);
  const [hasValue, setHasValue] = useState(false);

  const handleFocus = () => setIsFocused(true);
  const handleBlur = (e) => {
    setIsFocused(false);
    setHasValue(e.target.value !== "");
  };

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="relative w-full max-w-md">
        <Input
          {...props}
          onFocus={handleFocus}
          onBlur={handleBlur}
          className="block w-full px-4 pt-6 pb-1 text-lg text-white bg-gray-800 border border-gray-700 rounded-lg appearance-none focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent peer"
          placeholder=" "
        />
        <Label
          className={`absolute text-md duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-4 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 ${
            isFocused || hasValue ? "text-blue-500" : "text-gray-400"
          }`}
        >
          {label}
        </Label>
      </div>
    </div>
  );
};

export default FloatingLabelInput;

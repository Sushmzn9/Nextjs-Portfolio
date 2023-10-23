"use client";

import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import BackgroundCircle from "./BackgroundCircle";
import Link from "next/link";

type Props = {};

function Hero({}: Props) {
  const [text, count] = useTypewriter({
    words: ["Hello", "I'm Sushan Maharjan", "ILoveToCode</>", "<Let's Code/>"],
    loop: true,
    delaySpeed: 2000,
  });
  const navLabel = ["About", "Experience", "Skills", "Projects"];
  return (
    <div className="h-screen flex space-y-8 flex-col items-center overflow-hidden text-center justify-center">
      <BackgroundCircle />
      <img
        className="relative rounded-full h-32 w-32 mx-auto object-cover"
        src="https://media.licdn.com/dms/image/D5603AQH759IX5d4iGA/profile-displayphoto-shrink_200_200/0/1679713206470?e=1702512000&v=beta&t=AbyPoLHu7uEgZERmW3pSZLq1kU58D3meoI2qOGQOn2Q"
        alt=""
      />
      <div className="z-20">
        <h2 className="pb-2 text-sm uppercase text-gray-500 tracking-[15px]">
          Software Developer
        </h2>
        <h1 className="text-2xl lg:text-6xl font-semibold px-10">
          <span>{text}</span>
          <Cursor cursorColor="gold" />
        </h1>
        <div className="pt-5">
          {navLabel.map((label) => (
            <Link key={label} href={`#` + `${label.toLowerCase()}`}>
              <button className="heroButton">{label}</button>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Hero;

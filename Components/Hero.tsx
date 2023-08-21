"use client";

import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import BackgroundCircle from "./BackgroundCircle";
import Link from "next/link";

type Props = {};

function Hero({}: Props) {
  const [text, count] = useTypewriter({
    words: [
      "Hello",
      "I'm Sushan Maharjan",
      "GuY-who-loves-Coffee.tsx",
      "<ButLovesToMakeNewFriends/>",
      "ILoveToCode</>",
    ],
    loop: true,
    delaySpeed: 2000,
  });
  return (
    <div className="h-screen flex space-y-8 flex-col items-center overflow-hidden text-center justify-center ">
      <BackgroundCircle />
      <img
        className="relative rounded-full h-32 w-32 mx-auto object-cover"
        src="https://scontent.fsyd10-1.fna.fbcdn.net/v/t1.6435-9/131762545_3267486333363335_7468727792312820782_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=e3f864&_nc_ohc=46gYV1lMmn8AX8UK8F8&_nc_ht=scontent.fsyd10-1.fna&oh=00_AfCHIFfGMMhXQoMkn2gWkjGHMK2dunGS_4hG86R1S0Yk3A&oe=6508F294"
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
          <Link href="#about">
            <button className="heroButton">About</button>
          </Link>
          <Link href="#expreience">
            <button className="heroButton">Expreience</button>
          </Link>
          <Link href="#skills">
            <button className="heroButton">Skills</button>
          </Link>
          <Link href="#projects">
            <button className="heroButton">Projects</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Hero;

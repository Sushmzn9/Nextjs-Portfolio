"use client";

import React from "react";
import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";
import Link from "next/link";
type Props = {};

function Header({}: Props) {
  return (
    <header className="sticky top-0 flex p-5 items-start justify-between max-w-7xl mx-auto z-20 xl:items-center">
      <motion.div
        initial={{
          x: -500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1,
        }}
        className="flex flex-row items-center"
      >
        {/* social icons */}
        <SocialIcon
          url="https://www.github.com"
          fgColor="gray"
          bgColor="transparent"
        />
        <SocialIcon
          url="https://www.linkedin.com"
          fgColor="gray"
          bgColor="transparent"
        />
        <Link href="/resume.pdf" target="/">
          <button className="uppercase hover:opacity-50 font-bold rounded bg-[#F7AB0A] text-black md:inline-flex p-2 text-sm">
            Download CV
          </button>
        </Link>
      </motion.div>
      <motion.div
        initial={{
          x: 500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1,
        }}
        className="flex flex-row gap-3 items-center"
      >
        <Link href="#contact">
          <SocialIcon
            className="cursor-pointer"
            url="https://www.gmail.com"
            network="email"
            bgColor="transparent"
            fgColor="gray"
          />
          <p className="uppercase hidden md:inline-flex text-sm text-gray-400 ">
            Get in touch
          </p>
        </Link>
      </motion.div>
    </header>
  );
}

export default Header;

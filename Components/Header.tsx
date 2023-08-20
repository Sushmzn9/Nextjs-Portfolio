"use client";

import React from "react";
import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";
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
          url="https://www.facebook.com"
          fgColor="gray"
          bgColor="transparent"
        />
        <SocialIcon
          url="https://www.twitter.com"
          fgColor="gray"
          bgColor="transparent"
        />
        <SocialIcon
          url="https://www.linkedin.com"
          fgColor="gray"
          bgColor="transparent"
        />
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
          duration: 100000,
        }}
        className="flex flex-row items-center bg-gray-300 cursor-pointer"
      >
        <SocialIcon
          className="cursor-pointer"
          network="email"
          bg="transparent"
        />
        <p className="uppercase hidden md:inline-flex text-sm text-gray-400 ">
          Get in touch
        </p>
      </motion.div>
    </header>
  );
}

export default Header;

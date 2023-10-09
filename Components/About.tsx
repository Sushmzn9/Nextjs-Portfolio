"use client";
import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      transition={{
        duration: 1.5,
      }}
      whileInView={{ opacity: 1 }}
      className="h-screen flex relative overflow-hidden flex-col text-left md:flex-row max-w-full px-10 justify-evenly mx-auto items-center"
    >
      <h3 className="absolute top-24 uppercase text-gray-500 tracking-[20px] text-2xl">
        About
      </h3>
      <motion.img
        initial={{
          x: -200,
          opacity: 0,
        }}
        transition={{
          duration: 1.2,
        }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        src="https://scontent.fbne10-1.fna.fbcdn.net/v/t1.6435-9/131762545_3267486333363335_7468727792312820782_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=e3f864&_nc_ohc=sUB6bKmj1V8AX9PXdsM&_nc_ht=scontent.fbne10-1.fna&oh=00_AfDCvrHZj9fdzNonj4gA9pny5__LrolANjkfyizZ7dNTOA&oe=654B4E14"
        className="mt-20 md:mb-0 flex-shrink-0 w-32 h-32 rounded-full object-cover md:rounded-lg md:w-64 md:h-[17rem] xl:w-[500px] xl:h-[500px]"
        alt="Profile"
      />
      <div className="space-y-2 px-0 md:px-10">
        <h4 className="text-2xl font-semibold">Full Stack Developer</h4>
        <p className="text-base">
          Hello! I'm a passionate MERN Stack Full-Stack Developer with a knack
          for crafting powerful web applications. With a strong foundation in
          React, Node.js, and MongoDB, I bring ideas to life with clean code and
          stunning user interfaces.
        </p>
        <p className="text-base">
          If you have any exciting projects or opportunities, feel free to
          connect with me. I'm always eager to collaborate!
        </p>
      </div>
    </motion.div>
  );
};

export default About;

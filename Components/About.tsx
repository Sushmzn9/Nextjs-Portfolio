"use client";
import React from "react";
import { motion } from "framer-motion";
import Sushan from "../public/assets/sushan-pp.jpeg";

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
      className="h-screen flex relative overflow-hidden flex-col text-left md:flex-row max-w-full px-8 justify-evenly mx-auto items-center"
    >
      <h3 className="absolute top-24 uppercase text-gray-500 tracking-[20px] text-2xl">
        About
      </h3>
      <motion.img
        initial={{
          x: 200,
          opacity: 0,
        }}
        transition={{
          duration: 1.2,
        }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        src="/assets/sushan-pp.jpeg"
        className="mt-20 mb-0 flex-shrink-0 w-32 h-32 rounded-full object-cover md:rounded-lg md:w-64 md:h-[17rem] xl:w-[500px] xl:h-[500px]"
        alt="Profile"
      />
      <div className="space-y-1 mt-0 px-0 md:px-8">
        <h2 className="text-2xl font-semibold text-center">
          Full Stack Developer
        </h2>
        <p className="text-base text-center">
          Hello! I'm a passionate MERN Stack Full-Stack Developer with a knack
          for crafting powerful web applications. With a strong foundation in
          React, Node.js, and MongoDB, I bring ideas to life with clean code and
          stunning user interfaces.
        </p>
        <p className="text-base text-center">
          If you have any exciting projects or opportunities, feel free to
          connect with me. I'm always eager to collaborate!
        </p>
      </div>
    </motion.div>
  );
};

export default About;

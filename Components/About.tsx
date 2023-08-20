"use client";

import React from "react";
import { motion } from "framer-motion";
type Props = {};

const About = (props: Props) => {
  return (
    <motion.div
      initial={{
        x: -200,
        opacity: 0,
      }}
      transition={{
        duration: 1.2,
      }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className="flex max-w-7xl px-10 justify-evenly items-center relative flex-col h-screen md:text-left md:flex-row"
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
        src="https://scontent.fsyd10-1.fna.fbcdn.net/v/t1.6435-9/131762545_3267486333363335_7468727792312820782_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=e3f864&_nc_ohc=46gYV1lMmn8AX8UK8F8&_nc_ht=scontent.fsyd10-1.fna&oh=00_AfCHIFfGMMhXQoMkn2gWkjGHMK2dunGS_4hG86R1S0Yk3A&oe=6508F294"
        className="mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-95 xl:w-[500px] xl:h-[500px]"
      />
      <div className="space-y-10 px-0 md:px-10">
        <h4 className="text-4xl font-semibold">
          Lorem ipsum dolor sit amet{" "}
          <span className="underline decoration-[#F7AB0A]">little</span>
        </h4>
        <p className="text-base">
          consectetur adipisicing elit. Praesentium pariatur, nemo aperiam iure
          provident est cum recusandae doloribus culpa atque neque aliquam
          aliquid corporis necessitatibus unde, delectus voluptatem alias!
          Numquam?
        </p>
      </div>
    </motion.div>
  );
};

export default About;

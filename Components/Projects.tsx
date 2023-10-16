"use client";

import React from "react";
import { motion } from "framer-motion";
type Props = {};

const Projects = (props: Props) => {
  const projects = [
    {
      Name: "Ecommerce CMS",
      src: "https://media.licdn.com/dms/image/D562DAQEH0ddSTXeMLA/profile-treasury-image-shrink_800_800/0/1696649334137?e=1697817600&v=beta&t=pCB9vvW1n4oNQqOGucdPuEfLk7A8CNVGHryeNWTlyE8",
      p: "Built Ecommerce CMS with MERN stack, deployed on AWS forscalability and reliability. Test Now => Email: test@00.com Password : 123456",
    },
    {
      Name: "Ecommerce Tech Store",

      src: "/assets/TechStore.png",
      p: "Built an online store with a shopping cart, Stripe payments, and secure user authentication using the MERN stack",
    },
  ];

  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      transition={{
        duration: 1.5,
      }}
      whileInView={{ opacity: 1 }}
      className="h-screen relative text-left flex flex-col xl:flex-row  justify-evenly items-center mx-auto max-w-full z-0"
    >
      <h3 className="absolute top-24 uppercase text-gray-500 tracking-[20px] text-2xl">
        Projects
      </h3>
      <div className="relative mx-auto w-full flex overflow-x-scroll overflow-y-hidden snap-z snap-mandatory  scrollbar-track-gray-400/20 scrollbar-thin scrollbar-thumb-[#F7AB0A]/80 z-20">
        {projects.map(({ Name, p, src }, i) => (
          <div
            key={Name}
            className="w-screen flex-shrink-0 snap-center flex flex-col space-y-2 items-center justify-center p-8 h-screen"
          >
            <motion.img
              initial={{
                y: -300,
                opacity: 0,
              }}
              transition={{
                duration: 1,
              }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              src={src}
              alt=""
              key={i}
              className=" object-contain rounded-lg cursor-pointer object-center"
            />
            <div className="space-y-2 px-0 md:px-10">
              <h4 className="text-sm font-semibold text-center">
                <span className="underline text-lg decoration-[#F7AB0A]/50">
                  {i + 1} of {projects.length} : {Name}
                </span>
              </h4>
              <p className="text-sm text-center md:text-left">{p}</p>
            </div>
            <div className="flex flex-row gap-2">
              <button className="border cursor-pointer p-2 bg-slate-600 rounded">
                Code Here
              </button>
              <button className="border cursor-pointer p-2 bg-white text-black rounded">
                Website Link
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="w-full absolute top-[30%] bg-[#F7AB0A]/10 left-0 h-[500px] -skew-y-12"></div>
    </motion.div>
  );
};

export default Projects;

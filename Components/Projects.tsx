"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
type Props = {};

const Projects = (props: Props) => {
  const projects = [
    {
      name: "Ecommerce CMS",
      src: "https://media.licdn.com/dms/image/D562DAQEH0ddSTXeMLA/profile-treasury-image-shrink_800_800/0/1696649334137?e=1697817600&v=beta&t=pCB9vvW1n4oNQqOGucdPuEfLk7A8CNVGHryeNWTlyE8",
      p: "Built Ecommerce CMS with MERN stack, deployed on AWS forscalability and reliability. Test Now => Email: test@00.com Password : 123456",
      webLink:
        "http://ecommerce-cms-frontend.s3-website-ap-southeast-2.amazonaws.com/",
      codeLink: "https://github.com/Sushmzn9/e_commerce-cms",
    },
    {
      name: "Ecommerce Tech Store",
      webLink:
        "http://customer-store-frontend.s3-website-ap-southeast-2.amazonaws.com/",
      codeLink: "https://github.com/Sushmzn9/Customer-Front-Store",
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
      viewport={{ once: true }}
      className="h-screen relative text-left flex flex-col xl:flex-row  justify-evenly items-center mx-auto max-w-full z-0"
    >
      <h3 className="absolute top-24 uppercase text-gray-500 tracking-[20px] text-2xl">
        Projects
      </h3>
      <div className="relative mx-auto w-full flex overflow-x-scroll overflow-y-hidden snap-z snap-mandatory  scrollbar-track-gray-400/20 scrollbar-thin scrollbar-thumb-[#F7AB0A]/80 z-20">
        {projects.map(({ name, p, src, webLink, codeLink }, i) => (
          <div
            key={name}
            className="w-screen flex-shrink-0 snap-center flex flex-col space-y-2 items-center justify-center p-8"
          >
            <motion.img
              initial={{
                y: 200,
                opacity: 0,
              }}
              transition={{
                duration: 1,
              }}
              whileInView={{ opacity: 1, y: 0 }}
              src={src}
              alt={name}
              key={i}
              className="object-contain rounded-lg cursor-pointer w-[400px] object-center"
            />
            <div className="space-y-2 px-0 pt-6 md:px-10">
              <h4 className="text-sm font-semibold text-center">
                <span className="underline text-lg decoration-[#F7AB0A]/50">
                  {i + 1} of {projects.length} : {name}
                </span>
              </h4>
              <p className="text-sm text-center md:text-left">{p}</p>
            </div>
            <div className="flex flex-row gap-2">
              <Link href={codeLink} target="_blank">
                <button className="border cursor-pointer p-2 bg-slate-600 rounded">
                  Code Here
                </button>
              </Link>
              <Link href={webLink} target="_blank">
                <button className="border cursor-pointer p-2 bg-white text-black rounded">
                  Website Link
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>

      <div className="w-full absolute top-[30%] bg-[#F7AB0A]/10 left-0 h-[500px] -skew-y-12"></div>
    </motion.div>
  );
};

export default Projects;

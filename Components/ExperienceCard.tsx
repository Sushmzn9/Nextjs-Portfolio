import React from "react";
import { motion } from "framer-motion";
type Props = {};

const ExperienceCard = (props: Props) => {
  return (
    <article className="flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[400px] md:w-[500px] xl:w-[800px] snap-center bg-[#292929] p-10 opacity-40 hover:opacity-100 curosr-pointer transition-opacity duration-200 overflow-hidden">
      <motion.img
        initial={{
          opacity: 0,
          y: -100,
        }}
        transition={{
          duration: 1.2,
        }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="w-20 h-20x rounded-full md:rounded-full xl:w-[100px] xl:h-[100] object-cover object-center"
        src="https://yt3.ggpht.com/yti/AOXPAcUcgJJ3NdnAOANI0ZUoM7B8pwuuYGKceb4okQfxaLk=s88-c-k-c0x00ffffff-no-rj"
        alt=""
      />
      <div className="px-0 md:px-10">
        <h4 className="text-xl md:text-3xl font-light">Travelex</h4>
        <p className="font-bold text-xl mt-1">Sushna</p>
        <div className="flex space-x-2 my-2">
          {/* tech used */}
          <img className="h-10 w-10 rounded-full" src="" alt="" />
          <img className="h-10 w-10 rounded-full" src="" alt="" />
          <img className="h-10 w-10 rounded-full" src="" alt="" />
        </div>
        <p className="uppercase py-5 text-gray-300">started work .. .</p>
        <ul className="list-disc space-y-4 ml-5 text-lg">
          <li>summary</li>
        </ul>
      </div>
    </article>
  );
};

export default ExperienceCard;

import React from "react";
import { motion } from "framer-motion";

type Props = {
  directionLeft?: Props;
};

const Skill = ({ directionLeft }: Props) => {
  const skillsList = [
    "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/1200px-Typescript_logo_2020.svg.png",
    "https://www.computerhope.com/jargon/j/javascript.png",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLYHk6vuD_jiLQhdh65PprE1SwaJme_pQjd6w_n24yNCYCMOibdUSPCmkxD6IajrOy7WA&usqp=CAU",
    "https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582747_1280.png",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpQ-R5wuiE6fj9bdVQ2OItJ5AndmJyYQfbVrzmP6E2FFU5hhK4PQyv3gr4P8yb8GQCvtM&usqp=CAU",
    "https://blog.geekhunter.com.br/wp-content/uploads/2021/02/1_mp91A9RzagntGGjBnwu4Yw.png",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1XIIlDkIwxWIQld7MhOfCCSRdhjkfpGid3nbxHmym8YbwqYmuYVULA9jKIbY3z72fieE&usqp=CAU",
    "https://legacy.reactjs.org/logo-og.png",
    "https://miro.medium.com/v2/resize:fit:500/1*tOI6UC5EaS2fPItCesI-AQ.png",
    "https://miro.medium.com/v2/resize:fit:632/1*KTAstxDm8yEG17u94avrXw.png",
    "https://getbootstrap.com/docs/5.3/assets/brand/bootstrap-logo-shadow.png",
    "https://miro.medium.com/v2/resize:fit:800/1*ulCspc56K_swYE1uuel_TA.png",
    "https://images.ctfassets.net/23aumh6u8s0i/c04wENP3FnbevwdWzrePs/1e2739fa6d0aa5192cf89599e009da4e/nextjs",
  ];

  return (
    <div className="grid grid-cols-2 gap-4 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-5">
      {skillsList.map((skill, index) => (
        <motion.div
          key={skill}
          initial={{
            x: directionLeft ? -50 : 50,
            opacity: 0,
          }}
          transition={{ duration: 0.5 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="group relative flex cursor-pointer"
        >
          <img
            src={skill}
            alt={`Skill ${index + 1}`}
            className="rounded-full border border-gray-500 object-cover h-16 w-16 md:w-[80px] md:h-[80px] filter group-hover:grayscale transition duration-300 ease-in-out"
          />
          <div className="absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white h-16 w-16 md:w-[80px] md:h-[80px] rounded-full z-0"></div>
        </motion.div>
      ))}
    </div>
  );
};

export default Skill;

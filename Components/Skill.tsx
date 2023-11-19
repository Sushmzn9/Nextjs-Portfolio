import React from "react";
import { motion } from "framer-motion";

type Props = {
  directionLeft?: Props;
};

const Skill = ({ directionLeft }: Props) => {
  const skillsList = [
    "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/1200px-Typescript_logo_2020.svg.png",
    "https://www.computerhope.com/jargon/j/javascript.png",
    "https://banner2.cleanpng.com/20180526/owx/kisspng-html-computer-icons-web-development-bootstrap-5b0a25293828a9.92335899152739152923.jpg",
    "https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582747_1280.png",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpQ-R5wuiE6fj9bdVQ2OItJ5AndmJyYQfbVrzmP6E2FFU5hhK4PQyv3gr4P8yb8GQCvtM&usqp=CAU",
    "https://blog.geekhunter.com.br/wp-content/uploads/2021/02/1_mp91A9RzagntGGjBnwu4Yw.png",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1XIIlDkIwxWIQld7MhOfCCSRdhjkfpGid3nbxHmym8YbwqYmuYVULA9jKIbY3z72fieE&usqp=CAU",
    "https://legacy.reactjs.org/logo-og.png",
    "https://miro.medium.com/v2/resize:fit:500/1*tOI6UC5EaS2fPItCesI-AQ.png",
    "https://miro.medium.com/v2/resize:fit:632/1*KTAstxDm8yEG17u94avrXw.png",
    "https://getbootstrap.com/docs/5.3/assets/brand/bootstrap-logo-shadow.png",
    "https://media.licdn.com/dms/image/D4D12AQHW9aRSWIOMxQ/article-cover_image-shrink_600_2000/0/1657421703592?e=2147483647&v=beta&t=nKygyfSDFwgPdEoC-nEkogMS0527SBa8z8D_FqUr-us",
    "https://images.ctfassets.net/23aumh6u8s0i/c04wENP3FnbevwdWzrePs/1e2739fa6d0aa5192cf89599e009da4e/nextjs",
    "https://next-auth.js.org/img/logo/logo-sm.png",
    "https://upload.wikimedia.org/wikipedia/en/thumb/3/30/Java_programming_language_logo.svg/1200px-Java_programming_language_logo.svg.png",
    "https://miro.medium.com/v2/resize:fit:300/1*R4c8lHBHuH5qyqOtZb3h-w.png",
    "https://1000logos.net/wp-content/uploads/2021/06/Stripe-Logo-2009.png",
  ];

  return (
    <div className="grid grid-cols-4 gap-4">
      {skillsList.map((skill, index) => (
        <motion.div
          key={skill}
          initial={{
            x: directionLeft ? -100 : 100,
            opacity: 0,
          }}
          transition={{ duration: 0.6 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="group  relative flex cursor-pointer"
        >
          <img
            src={skill}
            alt={`Skill ${index + 1}`}
            className="rounded-full border border-gray-500 object-contain h-16 w-16 md:w-[80px] md:h-[80px] filter group-hover:grayscale transition duration-300 ease-in-out"
          />
        </motion.div>
      ))}
    </div>
  );
};

export default Skill;

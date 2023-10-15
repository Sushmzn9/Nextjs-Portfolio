import React from "react";
import { motion } from "framer-motion";
import { FaceFrownIcon } from "@heroicons/react/20/solid";
type Props = {};

const ExperienceCard = (props: Props) => {
  const experienceData = [
    {
      companyName: "Beauty.peaks",
      techStack:
        "https://res.cloudinary.com/practicaldev/image/fetch/s--BMWspgKL--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/ds4yi6va1jyjhyfroddl.png",
      src: "/assets/beautypeaks.jpeg",
      date: "2023",
      li: "Developed a user-friendly booking platform using TypeScript and Next.js",
      li2: "Enabled clients to schedule appointments, explore stylist profiles, and view services",
      li3: "Integrated real-time availability, payment processing, and user authentication.",
      li4: "Responsive design for seamless user experience on various devices.",
    },
    {
      companyName: "Intern at Dented Code",

      techStack:
        "https://miro.medium.com/v2/resize:fit:720/format:webp/0*kxPYwfJmkXZ3iCWy.png",
      src: "https://dentedcode.com/_next/static/media/logo.571fc0c1.svg",
      date: "2023",
      li: "User-Friendly Design: Boosted user engagement by 20% with intuitive web interfaces",
      li2: "Efficient APIs: Implemented RESTful APIs, reducing data transfer times by 50%.",
      li3: "Database Efficiency: Improved queries, reducing response times by 40%.",
      li4: "Optimized Load Time: Reduced page load times by 300% (from 6s to 2s) for enhanceduser experience.",
    },
  ];
  return (
    <>
      {experienceData.map(
        ({ companyName, techStack, src, date, li, li2, li3, li4 }) => (
          <article
            key={companyName}
            className="flex mt-4 flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[400px] md:w-[500px] xl:w-[800px] snap-center bg-[#292929] p-8 opacity-40 hover:opacity-100 cursor-pointer transition-opacity duration-200 overflow-hidden"
          >
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
              className="w-20 h-20 rounded-full md:rounded-full xl:w-[100px] xl:h-[100px] object-contain object-center"
              src={src}
              alt=""
            />
            <div className="px-0 md:px-10">
              <h4 className="text-lg md:text-xl font-light">
                {companyName.toUpperCase()}
              </h4>
              <p className="font-bold text-xl">FULL STACK DEVELOPER</p>
              <div className="flex space-x-1 justify-center items-center my-2">
                <img
                  src={techStack}
                  alt={companyName}
                  className="h-20 w-60
                  rounded-full object-center object-contain"
                />
              </div>
              <p className="uppercase text-sm py-2 text-gray-300">
                started work : {date}
              </p>
              <ul className="list-disc space-y-2 ml-5 text-sm">
                <li>{li}</li>
                <li>{li2}</li>
                <li>{li3}</li>
                <li>{li4}</li>
              </ul>
            </div>
          </article>
        )
      )}
    </>
  );
};

export default ExperienceCard;

"use client";
import { EnvelopeIcon, MapPinIcon, PhoneIcon } from "@heroicons/react/20/solid";
import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

type ContactInfo = {
  icon: React.ReactElement;
  text: string;
};

type Props = {};

const Contact = (props: Props) => {
  const { register, handleSubmit } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (formData) => {
    const subject = encodeURIComponent(formData.subject);
    const body = encodeURIComponent(
      `Hi, my name is ${formData.name}. ${formData.message} (${formData.email})`
    );
    window.location.href = `mailto:sushan.maharjan18@gmail.com?subject=${subject}&body=${body}`;
  };

  const contactInfoList: ContactInfo[] = [
    {
      icon: <PhoneIcon className="text-[#F7AB0A] h-7 w-7 animate-pulse" />,
      text: "0404030929",
    },
    {
      icon: <EnvelopeIcon className="text-[#F7AB0A] h-7 w-7 animate-pulse" />,
      text: "sushan.maharjan18@gmail.com",
    },
    {
      icon: <MapPinIcon className="text-[#F7AB0A] h-7 w-7 animate-pulse" />,
      text: "Sydney, Australia",
    },
  ];

  const inputFields: { label: string; name: keyof Inputs }[] = [
    { label: "Name", name: "name" },
    { label: "Email", name: "email" },
    { label: "Subject", name: "subject" },
    { label: "Message", name: "message" },
  ];

  return (
    <div className="h-screen flex relative flex-col text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center">
      <h3 className="absolute top-24 uppercase text-gray-500 tracking-[20px] text-2xl">
        Contact
      </h3>
      <div className="flex flex-col justify-evenly items-center top-28 md:top-26 mt-10 space-y-10 p-4">
        <span className="text-2xl text-center md:text-2xl font-bold mt-10 md:mt-2 font-serif">
          Let's get connected here:
        </span>
        <div className="space-y-3">
          {contactInfoList.map((contact, index) => (
            <div key={index} className="flex space-x-5">
              <span>{contact.icon}</span>
              <p className="text-l font-serif font-bold">{contact.text}</p>
            </div>
          ))}
        </div>
        <div className="max-w-xl w-screen mt-0">
          <form
            className="flex flex-col space-y-2 p-4 md:mx-auto mt-0 m-5"
            onSubmit={handleSubmit(onSubmit)}
          >
            {inputFields.map((field) => (
              <input
                {...register(field.name)}
                placeholder={field.label}
                className="contactInput"
                type={field.name === "email" ? "email" : "text"}
                key={field.name}
              />
            ))}

            <button
              type="submit"
              className="bg-[#F7AB0A] py-2 md:py-4 rounded-md text-black font-bold text-lg"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;

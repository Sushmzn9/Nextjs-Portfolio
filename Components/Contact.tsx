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
      text: "Sushan.Maharjan18@gmail.com",
    },
    {
      icon: <MapPinIcon className="text-[#F7AB0A] h-7 w-7 animate-pulse" />,
      text: "Sydney",
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
      <div className="flex flex-col top-28 md:top-26 mt-10 space-y-10">
        <p className="text-xl md:text-2xl text-center font-semibold mt-10 md:mt-2 mb-4">
          I have got what you need. Let's Talk
        </p>
        <div className="space-y-6">
          {contactInfoList.map((contact, index) => (
            <div
              key={index}
              className="flex items-center space-x-5 justify-center"
            >
              {contact.icon}
              <p className="text-lg">{contact.text}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="max-w-xl w-full">
        <form
          className="flex flex-col space-y-2 md:mx-auto mt-0 m-10"
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
  );
};

export default Contact;

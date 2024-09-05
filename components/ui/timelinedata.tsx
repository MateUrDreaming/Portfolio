/* eslint-disable prettier/prettier */
import React from "react";
import Image from "next/image";

export const timelinedata =  [
    {
      title: "2020",
      content: (
        <div className="flex flex-col items-center justify-normal">
          <h1 className="text-2xl font-bold text-primary">Orewa College</h1>
          <p className="mb-8 text-sm font-normal text-justify md:text-lg">
            Graduated from Orewa College with excellence endorsement in NCEA level 1, 2 and 3 alongside university enterence. Furthermore, I was awarded the top student award for Digial technologies and statistics in my year 13 Cohort.  
          </p>
          <Image
              alt="My friend group with david hansen in Orewa College (Im in the middle)"
              className="rounded-lg object-cover h-75 w-75 shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
              height={500}
              src="/images/Group Photo.jpg"
              width={500}
            />
        </div>
      ),
    },
    {
      title: "2021",
      content: (
        <>
          <div className="flex flex-col items-center pb-10 justify-normal">
            <h1 className="text-2xl font-bold text-primary">Starting at the University of Auckland</h1>
            <p className="mb-8 text-sm font-normal text-justify md:text-lg">
              After graduating from Orewa College, I started my journey at the University of Auckland where I am currently studying a conjoint degree in Science and Commerce. I recieved many options from other universities around New Zealand but I ultimately chose the University of Auckland due to offering a conjoint degree in which allows me to major in Computer science and Information systems.
            </p>
            <Image
                alt="Picture from my Compsci 367 course in 2023 S2 (I'm on the right)"
                className="rounded-lg object-cover h-75 w-75 shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                height={500}
                src="/images/compsci367_2023s2.png"
                width={500}
              />
          </div>
          <div className="flex flex-col items-center justify-normal">
          <h1 className="text-2xl font-bold text-primary">Working at provident</h1>
          <p className="mb-8 text-sm font-normal text-justify md:text-lg">
            After graduating from Orewa College, I started my journey at the University of Auckland where I am currently studying a conjoint degree in Science and Commerce. I recieved many options from other universities around New Zealand but I ultimately chose the University of Auckland due to offering a conjoint degree in which allows me to major in Computer science and Information systems.
          </p>
          <Image
              alt="Picture from my Compsci 367 course in 2023 S2 (I'm on the right)"
              className="rounded-lg object-cover h-75 w-75 shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
              height={500}
              src="/images/compsci367_2023s2.png"
              width={500}
            />
        </div>
       </>
      ),
    },
  ];

/* eslint-disable prettier/prettier */
import React from "react";
import Image from "next/image";

export const timelinedata =  [
    {
      title: "2020",
      content: (
        <div className="p-2">
          <div className="flex flex-col items-center justify-normal">
            <h1 className="text-2xl font-bold text-primary">Orewa College</h1>
            <p className="mb-2 text-xs">2014 - 2020</p>
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
        </div>
      ),
    },
    {
      title: "2021",
      content: (
        <div className="p-2">
          <div className="flex flex-col items-center pb-10 justify-normal">
            <h1 className="text-2xl font-bold text-primary">Starting at the University of Auckland</h1>
            <p className="mb-2 text-xs">March 2021 - Current</p>
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
          <p className="mb-2 text-xs">November 2021 - March 2022</p>
          <p className="mb-8 text-sm font-normal text-justify md:text-lg">
            During the summer break of 2021, I worked at Provident as a Administative assistant. Here, I was responsible for managing the database, processing payments of renewals and assisting the team with any other tasks. This was a great experience as it allowed me to apply my knowledge from university into a real world setting.
          </p>
          <Image
              alt="Picture the provident office in 2021 with the reception area in the front"
              className="rounded-lg object-cover h-75 w-75 shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
              height={500}
              src="/images/provident-office.jpg"
              width={500}
            />
        </div>
       </div>
      ),
    },
    {
      title: "2022",
      content: (
        <div className="p-2">
          <div className="flex flex-col items-center pb-10 justify-normal">
            <h1 className="text-2xl font-bold text-primary">DEVS Society Memeber  </h1>
            <p className="mb-2 text-xs">2022 - 2023 </p>
            <p className="mb-8 text-sm font-normal text-justify md:text-lg">
              In 2022, I joined the DEVS society at the University of Auckland. This society is for students who are interested in software development and computer science. I have been able to meet many like minded inviduals and participate in many club events such as hackatons, workshops and social events.
            </p>
            <Image
                alt="Devs society at the hackathon in 2022"
                className="rounded-lg object-cover h-75 w-75 shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                height={500}
                src="/images/devs hackathon.jpg"
                width={500}
              />
          </div>
       </div>
      ),
    },
    {
      title: "2023",
      content: (
        <div className="p-2">
          <div className="flex flex-col items-center pb-10 justify-normal">
            <h1 className="text-2xl font-bold text-primary">WDCC Society Memeber  </h1>
            <p className="mb-2 text-xs">2023 - Current </p>
            <p className="mb-8 text-sm font-normal text-justify md:text-lg">
              In 2023, I joined the WDCC society at the University of Auckland. This club is similar to the DEVS society but is more focused on web development and design. I have been able to meet many like minded inviduals and participate in many club events such as hackatons, workshops and social events.
            </p>
            <Image
                alt="Devs society at the hackathon in 2022"
                className="rounded-lg object-cover h-75 w-75 shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                height={500}
                src="/images/Changing History.png"
                width={500}
              />
          </div>
          <div className="flex flex-col items-center pb-10 justify-normal">
            <h1 className="text-2xl font-bold text-primary">Cisco Cyber Threat Management Certificate</h1>
            <p className="mb-2 text-xs">December 2023 </p>
            <p className="mb-8 text-sm font-normal text-justify md:text-lg">
              In 2023, I completed the Cisco Cyber Threat Management Certificate. This certificate is designed to help students understand the fundamentals of cybersecurity and how to protect their networks from cyber threats. This certificate has helped me gain a better understanding of cybersecurity and how to protect my personal devices from cyber attacks.
            </p>
            <Image
                alt="My Cisco Cyber Threat Management Certificate"
                className="rounded-lg object-cover h-75 w-75 shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                height={500}
                src="/images/Cisco.png"
                width={500}
              />
          </div>
       </div>
      ),
    },
    {
      title: "2024",
      content: (
        <div className="p-2">
          <div className="flex flex-col items-center pb-10 justify-normal">
            <h1 className="text-2xl font-bold text-primary">Microsoft AI 900</h1>
            <p className="mb-2 text-xs"> July 2023 </p>
            <p className="mb-8 text-sm font-normal text-justify md:text-lg">
              In 2024, I completed the Microsoft AI 900 certificate. This certificate is designed to help students understand the fundamentals of artificial intelligence and how it can be used to solve real-world problems. This certificate was obtained in the Akkidos AI900 bootcamp. 
            </p>
            <Image
                alt="My Microsoft AI 900 Certificate"
                className="rounded-lg object-cover h-75 w-75 shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                height={500}
                src="/images/ai900-png.png"
                width={500}
              />
          </div>
          <div className="flex flex-col items-center pb-10 justify-normal">
            <h1 className="text-2xl font-bold text-primary">Portfolio</h1>
            <p className="mb-2 text-xs"> September 2023 </p>
            <p className="mb-8 text-sm font-normal text-justify md:text-lg">
              In 2024, I completed my portfolio. This portfolio is designed to showcase my skills, projects and experiences. This portfolio was created using Next.js, React, NextUI, AceternityUI, Tailwind CSS and Framer Motion.
            </p>
            <Image
                alt="My Microsoft AI 900 Certificate"
                className="rounded-lg object-cover h-75 w-75 shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                height={500}
                src="/images/port.png"
                width={500}
              />
          </div>
       </div>
      ),
    },
  ];

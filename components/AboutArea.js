import Image from "next/image";
import Link from "next/link";
import React from "react";
import ContactImg from "../public/assets/contact2.jpg";

const AboutArea = () => {
  return (
    <div id="about" className="w-full  pt-28 flex items-center p-2 ">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <h2 className="uppercase text-center tracking-widest py-2 text-[#5651e5]">
            About
          </h2>
          <p className="py-4 text-xl text-center"> Who I am </p>
          {/* <p className="py-2 text-gray-600">I am not your normal developer</p> */}
          <p className="py-2 text-gray-600">
            I am ZAYED HOSSAIN, I have done BSc in Computer Science & Engineering. I
            have completed 6 months of experience in Complete Web
            Development Course With Jhankar Mahbub.I am a MERN Stack Developer. I have Solid working
            knowledge of MongoDB, Express.js, React.js, and Node.js. I always
            look for challenges where I can use my potential at most and always
            love to work on cutting-edge technologies. I am always ready to
            embrace new and required technology.
          </p>
          <p className="py-2 text-gray-600">
            Expertise : JavaScript, ES6, React JS, React Router DOM, React Hook
            Form, Firebase Authentication, JWT, HTML5, CSS3, React, Bootstrap,
            React-Bootstrap, Tailwind CSS, daisyUi, React-Daisyui etc.
          </p>

          <div className="flex gap-4 py-5 justify-center font-bold text-lg">
            <a
              className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-110 ease-in duration-300"
              href="https://drive.google.com/file/d/1ZefEwPJaRxSq2nNKnDWg_lDoq3NeHc0F/view?usp=sharing"
              target="blank"
            >
              Resume
            </a>
            <a
              className="rounded-full  shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-110 ease-in duration-300"
              href="https://mail.google.com/mail/u/0/?fs=1&tf=cm&source=mailto&to=zayedopu4933@gmail.com"
              target="blank"
            >
              Hire Me
            </a>
          </div>
        </div>
        <div className="w-full h-auto m-auto shadow-xl shadow-gray-700 rounded-xl flex justify-center p-4 hover:scale-105 ease-in duration-300 ">
          <Image className="rounded-xl" 
          src={ContactImg} 
          alt="/" 
          
          />
        </div>
      </div>
    </div>
  );
};

export default AboutArea;

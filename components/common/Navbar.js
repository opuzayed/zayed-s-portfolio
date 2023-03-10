import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { AiOutlineClose, AiOutlineMail } from "react-icons/ai";
import { FiAlignJustify } from "react-icons/fi";
import { BsFillPersonLinesFill } from "react-icons/bs";

function Navbar() {
  const [nav, setNav] = useState(false);
  const NavHandle = () => {
    setNav(!nav);
  };
  return (
    <div
      className="fixed w-full h-20 shadow-xl z-[100] p-2 pb-[27px] bg-white "
      style={{ marginBottom: "40px" }}
    >
      <div className="flex justify-between items-center w-full h-full px-2 2xl:px-16">
        <Image src="/../public/portfolio.png" alt="" width="50" height="50" />

        <div>
          <ul className="hidden md:flex">
            <Link href="/">
              <li className="ml-10 text-sm uppercase hover:border-b">Home</li>
            </Link>
            <Link href="/about">
              <li className="ml-10 text-sm uppercase hover:border-b">About</li>
            </Link>
            <Link href="/skills">
              <li className="ml-10 text-sm uppercase hover:border-b">Skills</li>
            </Link>
            <Link href="/projects">
              <li className="ml-10 text-sm uppercase hover:border-b">
                Project
              </li>
            </Link>
            <Link href="/contact">
              <li className="ml-10 text-sm uppercase hover:border-b">
                Contact
              </li>
            </Link>
          </ul>
          <div onClick={NavHandle} className="md:hidden">
            <FiAlignJustify size={25} />
          </div>
        </div>
      </div>
      <div
        className={
          nav ? "md:hidden fixed left-0 top-0 w-full h-screen bg-black/30" : ""
        }
      >
        <div
          className={
            nav
              ? " fixed left-0 top-0 w-[70%] sm:w-[60%] md-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500"
              : "fixed left-[-100%] top-0  p-10 ease-in duration-500"
          }
        >
          <div>
            <div className="flex w-full items-center justify-between">
              <Image
                src="/../public/portfolio.png"
                width="87"
                height="35"
                alt="/"
              />
              <div
                onClick={NavHandle}
                className="rounded-full shadow-lg shadow-gray-700 p-3 cursor-pointer"
              >
                <AiOutlineClose />
              </div>
            </div>
            {/* <div className="border-b border-gray-300 my-4">
              <p className="w-[85%] md:w-[90%] py-4">
                Lets go build a portfolio
              </p>
            </div> */}
          </div>
          <div className="py-4 flex flex-col">
            <ul className="uppercase ">
              <Link href="/">
                <li className="py-4 text-sm">Home</li>
              </Link>
              <Link href="/about">
                <li className="py-4 text-sm">About</li>
              </Link>
              <Link href="/skills">
                <li className="py-4 text-sm">Skill</li>
              </Link>
              <Link href="/projects">
                <li className="py-4 text-sm">Project</li>
              </Link>
              <Link href="/contact">
                <li className="py-4 text-sm">Contact</li>
              </Link>
            </ul>
            <div className="pt-40">
              <p className="uppercase tracking-widest text-[#5651e5]">
                Lets Connect
              </p>
              <div className="flex items-center justify-between my-4 w-full sm:w-[80%]">
                <div className="rounded-full  shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                  <FaLinkedinIn />
                </div>
                <div className="rounded-full  shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                  <FaGithub />
                </div>
                <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                  <AiOutlineMail />
                </div>
                <div className="rounded-full  shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                  <BsFillPersonLinesFill />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;

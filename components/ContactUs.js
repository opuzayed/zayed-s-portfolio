import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { AiOutlineMail } from "react-icons/ai";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { FaFacebook, FaGithub, FaLinkedinIn } from "react-icons/fa";
import { HiOutlineChevronDoubleUp } from "react-icons/hi";
import { MdAttachEmail } from "react-icons/md";
import ContactImg from "../public/assets/contact.jpg";

const ContactUs = () => {
  return (
    <div className="max-w-[1240px] m-auto px-2 pt-28 w-full  ">
      <h2 className=" tracking-widest uppercase text-[#5651e5] text-center pb-8 ">
        Contact Me
      </h2>

      <div className="grid lg:grid-cols-5 gap-8">
        {/* left */}
        <div className="col-span-3 lg:col-span-2 w-full h-full shadow-xl shadow-gray-400 rounded-xl p-4">
          <div className="lg:p-4 h-full">
           
            <div className="w-full h-auto m-auto flex justify-center lg:justify-start">
                <Image
                className="rounded-xl hover:scale-105 ease-in duration-300"
                src={ContactImg}
                alt="/"
              />
               </div>
                    <div>
                    <h2 className="py-2">Zayed Hossain</h2>
                     <p>Front-End Developer</p>
                     <p className="py-4">
                          I am available for Remote job or full-time positions. Contact me
                           and let&apos;s talk.
                      </p>
                  </div>
               
            <div>
              <div className="my-5">
                <div className="flex items-center justify-between text-3xl max-w-[330px] m-auto w-full sm:w-[80%]">
                  <div className="rounded-full  shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-110 ease-in duration-300">
                    <a
                      href="https://www.linkedin.com/in/zayed-hossain/"
                      target="blank"
                    >
                      <FaLinkedinIn />
                    </a>
                  </div>
                  <div className="rounded-full  shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-110 ease-in duration-300">
                    <a
                      href="https://github.com/opuzayed"
                      target="blank"
                    >
                      <FaGithub />
                    </a>
                  </div>
                  <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-110 ease-in duration-300">
                    <a
                      href="https://mail.google.com/mail/u/0/?fs=1&tf=cm&source=zayedopu4933@gmail.com"
                      target="blank"
                    >
                      <MdAttachEmail />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* right */}
        <div className="col-span-3 w-full h-auto shadow-xl shadow-gray-400 rounded-xl lg:p-4">
          <div className="p-4">
            <form
              action="https://getform.io/f/08ebcd37-f5b5-45be-8c13-714f011ce060"
              method="POST"
              enctype="multipart/form-data"
            >
              <div className="grid md:grid-cols-2 gap-4 w-full py-2">
                <div className="flex flex-col">
                  <label className="uppercase text-sm py-2">Name</label>
                  <input
                    className="border-2 rounded-lg p-3 flex border-gray-300"
                    type="text"
                    name="name"
                  />
                </div>
                <div className="flex flex-col">
                  <label className="uppercase text-sm py-2">Phone Number</label>
                  <input
                    className="border-2 rounded-lg p-3 flex border-gray-300"
                    type="text"
                    name="phone"
                    required
                  />
                </div>
              </div>
              <div className="flex flex-col py-2">
                <label className="uppercase text-sm py-2">Email</label>
                <input
                  className="border-2 rounded-lg p-3 flex border-gray-300"
                  type="email"
                  name="email"
                  required
                />
              </div>
              <div className="flex flex-col py-2">
                <label className="uppercase text-sm py-2">Subject</label>
                <input
                  className="border-2 rounded-lg p-3 flex border-gray-300"
                  type="text"
                  name="subject"
                />
              </div>
              <div className="flex flex-col py-2">
                <label className="uppercase text-sm py-2">Message</label>
                <textarea
                  className="border-2 rounded-lg p-3 border-gray-300"
                  rows="10"
                  name="message"
                ></textarea>
              </div>
              <button className="w-full p-4 text-gray-100 mt-4">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;

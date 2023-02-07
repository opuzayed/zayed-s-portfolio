import Link from "next/link";
import React from "react";
import { HiOutlineChevronDoubleUp } from "react-icons/hi";

const Footer = (props) => {
  return (
    <div className="pt-14" >
      <div className="flex justify-center py-12">
        <Link href="/">
          <a>
            <div className="rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-110 ease-in duration-300">
              <HiOutlineChevronDoubleUp className="text-[#5651e5]" size={30} />
            </div>
          </a>
        </Link>
      </div>
    </div>
  );
};

export default Footer;

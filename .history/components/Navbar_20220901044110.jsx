import Image from "next/image";
import React, { useState } from "react";
import Link from "next/link";
import { AiOutlineClose, AiOutlineMenu, AiOutlineMail } from "react-icons/ai";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(true);
  };
  return (
    <div className="fixed w-full h-20 shadow-xl z-[100]">
      <div className="flex justify-between items-center w-full h-full px-2 2xl:px-16">
        <Image
          className="rounded-full cursor-pointer"
          src="data:image/png;base64,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"
          alt=""
          width="50"
          height="50"
        />
        <div>
          <ul className="hidden md:flex">
            <Link href="/">
              <li className="ml-10 text-sm uppercase hover:border-b">Home</li>
            </Link>
            <Link href="/">
              <li className="ml-10 text-sm uppercase hover:border-b">About</li>
            </Link>
            <Link href="/">
              <li className="ml-10 text-sm uppercase hover:border-b">Skills</li>
            </Link>
            <Link href="/">
              <li className="ml-10 text-sm uppercase hover:border-b">
                Projects
              </li>
            </Link>
            <Link href="/">
              <li className="ml-10 text-sm uppercase hover:border-b">
                Contacts
              </li>
            </Link>
          </ul>
          <div onClick={han} className="md:hidden">
            <AiOutlineMenu size={25} />
          </div>
        </div>
      </div>
      <div className="fixed left-0 top-0 w-full h-screen bg-black/70 ">
        <div className="fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500">
          <div>
            <div className="flex w-full items-center justify-between">
              <Image
                className="rounded-full cursor-pointer"
                src="data:image/png;base64,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"
                alt=""
                width="50"
                height="50"
              />
              <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer">
                <AiOutlineClose />
              </div>
            </div>
            <div className="border-b border-gray-300 my-4">
              <p className="w-[85%] md:w-[905] PY-4">
                Let's builds something legendary together
              </p>
            </div>
          </div>
          <div className="py-4 flex flex-col">
            <ul className="uppercase">
              <Link href="/">
                <li className="py-4 text-sm">Home</li>
              </Link>
              <Link href="/">
                <li className="py-4 text-sm">About</li>
              </Link>
              <Link href="/">
                <li className="py-4 text-sm">Skills</li>
              </Link>
              <Link href="/">
                <li className="py-4 text-sm">Projects</li>
              </Link>
              <Link href="/">
                <li className="py-4 text-sm">Contacts</li>
              </Link>
            </ul>
            <div className="pt-40">
              <p className="uppercase tracking-widest text-[#5651e5]">
                Let's Connect
              </p>
              <div className="flex items-center justify-between my-4 w-full sm:w-[80%]">
                <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                  <FaLinkedinIn />
                </div>
                <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                  <FaGithub />
                </div>
                <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                  <AiOutlineMail />
                </div>
                <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                  <BsFillPersonLinesFill />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

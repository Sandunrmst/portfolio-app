"use client";

import { BsFillMoonFill } from "react-icons/bs";
import { useState } from "react";
import {
  AiFillLinkedin,
  AiFillGithub,
  AiFillFacebook,
  AiFillInstagram,
} from "react-icons/ai";

import { HiMenu } from "react-icons/hi";

import myimage from "../../public/working.png";
import Image from "next/image";
import webDesign from "../../public/web_design_icon.png";
import digitalMarketing from "../../public/advetising_icon.png";
import fronendDev from "../../public/frontend-development.png";
import graphicDesign from "../../public/graphic-design.png";
import ServiceCard from "@/components/ServiceCard";

const services = [
  {
    img: webDesign,
    title: "UI/UX Design",
    description:
      "I use my skills and experience to build ground-breaking UI/UX Designs for your business.",
  },
  {
    img: graphicDesign,
    title: "Graphic Design",
    description:
      "I am a Visual Artist and here to help you with all of your graphic design needs.",
  },
  {
    img: fronendDev,
    title: "Frontend Development",
    description:
      "I will help you to design your business website using HTML,CSS,Bootstrap and React",
  },
  {
    img: digitalMarketing,
    title: "Digital Marketing",
    description:
      "I will help you to achieve your brand goals in the digital world.",
  },
];

const handleClick = (anchor: string) => () => {
  const id = `${anchor}-section`;
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }
};

export default function Home() {
  const [isOpen, setIsOpen] = useState<boolean>(true);

  const menuHandler = () => {
    setIsOpen(!isOpen);
  };
  return (
    <main className="bg-yellow-50 px-6 md:px-20 lg:px-50 xl:px-70 min-h-screen">
      <section id="home-section">
        <nav className="flex justify-between items-center">
          <div className="flex-1">
            <h2 className="font-bold text-3xl text-orange-500 cursor-pointer">
              RMST
            </h2>
          </div>

          <div
            className={`flex-1 py-40 flex justify-between items-center h-screen ${
              isOpen ? "w-[50%]" : "w-0 overflow-hidden"
            } fixed top-0 left-0 bg-orange-300 flex-col z-10 transition-all sm:relative sm:bg-transparent sm:flex-row sm:py-10 sm:w-full sm:h-min`}
          >
            <ul className="flex flex-col gap-10 justify-center items-center sm:flex-row ">
              <li className="ml-5 sm:hidden md:block">
                <a href="#home" onClick={handleClick("home")}>
                  Home
                </a>
              </li>
              <li className="ml-5 sm:hidden md:block">
                <a href="#portfolio" onClick={handleClick("portfolio")}>
                  Portfolio
                </a>
              </li>
              <li className="ml-5 sm:hidden md:block">
                <a
                  href="#"
                  className="bg-black text-white px-5 py-2 rounded-md hover:bg-orange-400  transition-all whitespace-nowrap"
                >
                  Contact Me
                </a>
              </li>
            </ul>
          </div>

          <div>
            <ul className="flex justify-end items-center gap-5">
              <li className="cursor-pointer pl-4">
                <BsFillMoonFill size={"1.5em"} />
              </li>
              <li
                className="block sm:block md:hidden cursor-pointer"
                onClick={menuHandler}
              >
                <HiMenu size={"2em"} />
              </li>
            </ul>
          </div>
        </nav>

        <div className="p-8 text-center">
          <h1 className="text-4xl text-orange-500 font-bold md:text-6xl lg:text-7xl">
            My Personal WebSite
          </h1>
          <h3 className="text-2xl py-4 ">
            Freelancer , Web-Developer, UI/UX Designer
          </h3>

          <div className="flex justify-center mb-4">
            <p className="text-slate-500 max-w-4xl">
              As a software engineer, I bring a unique blend of technical
              expertise and problem-solving skills to the table. My experience
              in designing, coding, testing, and maintaining software systems
              has equipped me with a deep understanding of complex system
              architectures and algorithms.
            </p>
          </div>

          <div className="flex text-4xl justify-center gap-7">
            <AiFillLinkedin />
            <AiFillGithub />
            <AiFillFacebook />
            <AiFillInstagram />
          </div>

          <div className="flex justify-center my-8">
            <Image src={myimage} alt="myimage" />
          </div>
        </div>
      </section>

      <section id="portfolio-section">
        <div>
          <div className="flex flex-col justify-center items-center">
            <h2 className="font-bold text-4xl text-orange-500">My Services</h2>
            <p className="text-slate-700 max-w-4xl text-center">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore
              in nihil, quidem magni facere assumenda cupiditate doloremque
              adipisci, rerum quas beatae, vitae iste minus similique!
            </p>
          </div>

          <div className="mt-16 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 sm:gap-4 gap-14">
            {services.map((item) => (
              <ServiceCard
                img={item.img}
                title={item.title}
                description={item.description}
              />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

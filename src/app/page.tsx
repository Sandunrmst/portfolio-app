import { BsFillMoonFill } from "react-icons/bs";
import {
  AiFillLinkedin,
  AiFillGithub,
  AiFillFacebook,
  AiFillInstagram,
} from "react-icons/ai";

import myimage from "../../public/working.png";
import Image from "next/image";

export default function Home() {
  return (
    <main className="bg-yellow-50 px-12 min-h-screen">
      <section>
        <nav className="py-10 flex justify-between items-center">
          <h2 className="font-bold text-3xl text-orange-500 cursor-pointer">
            RMST
          </h2>
          <ul className="flex justify-between items-center">
            <li className="cursor-pointer">
              <BsFillMoonFill size={"1.5em"} />
            </li>
            <li className="ml-5">
              <a href="#home">Home</a>
            </li>
            <li className="ml-5">
              <a href="#portfolio">Portfolio</a>
            </li>
            <li className="ml-5 whitespace-nowrap">
              <a
                href="#"
                className="bg-orange-300 px-5 py-2 rounded-md hover:bg-orange-400  transition-all"
              >
                Contact Me
              </a>
            </li>
          </ul>
        </nav>

        <div className="p-8 text-center">
          <h1 className="text-4xl text-orange-500 font-bold">
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
    </main>
  );
}

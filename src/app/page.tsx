import { BsFillMoonFill } from "react-icons/bs";

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
              <a
                href="#"
                className="bg-orange-300 px-5 py-2 rounded-md hover:bg-orange-400  transition-all"
              >
                Contact Me
              </a>
            </li>
          </ul>
        </nav>
      </section>
    </main>
  );
}

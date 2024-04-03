import React from "react";
import Logo from "./assets/Logo.svg";
import PinkShape from "./assets/Pink Shape.svg";
import BlueShape from "./assets/Blue Shape.svg";
import PurpleShape from "./assets/Purple Shape.svg";
import Hero from "./assets/Hero Image (Model).png";
import CheckMark from "./assets/Checkmark.svg";
import Help from "./assets/Help Avatar.svg";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

library.add(fas); // This line adds all the free solid icons to the library

export default function App() {
  return (
    <div className="bg-[#f9f4e8] min-h-screen px-2 py-8 flex flex-col  gap-16 md:px-6 lg:py-14 lg:px-14 ">
      {/* <h1 className="text-3xl font-bold">RADHE RADHE!</h1> */}
      <Header />
      <Main />
      <Footer />
    </div>
  );
}
function Header() {
  return (
    <header className="flex justify-between items-center">
      <div className="h-5 flex items-center justify-center gap-2 md:gap-4">
        <img src={Logo} alt="hello" />
        <button className="text-base text-white px-5 py-1.5 md:py-1 bg-gradient-to-r from-orange-400 to-red-500 hover:from-pink-500 hover:to-yellow-500  text-center rounded-full font-playFair ">
          Hosterr is hiring!
        </button>
      </div>
      <ul className=" hidden lg:flex justify-between gap-5 text-xl">
        <li>
          {" "}
          <a href="">Plans</a>{" "}
        </li>
        <li>
          {" "}
          <a href="">Find Domain</a>{" "}
        </li>
        <li>
          {" "}
          <a href="">Why hoster</a>{" "}
        </li>
      </ul>
      <div className="hidden lg:flex justify-center items-center gap-2 text-xl ">
        <a href="">Sign in</a>
        <button className="bg-[#4977ea] text-white py-4 px-8 rounded">
          Join Waitlist
        </button>
      </div>
      <div className="text-3xl h-5 flex items-center lg:hidden">
        <FontAwesomeIcon icon="fa-solid fa-bars" />
      </div>
    </header>
  );
}

function Main() {
  return (
    <main className="lg:flex flex-row-reverse items-center lg:py-6 ">
      <div className="flex items-center justify-center pb-7 lg:flex-1 lg:order-1 lg:justify-end md:ml-10 ">
        <img
          src={BlueShape}
          alt=""
          className="absolute max-w-sm h-72 -rotate-[38deg] md:max-w-md  md:h-96 lg:h-5/6 lg:-rotate-[42deg]"
        />
        <img
          src={PinkShape}
          alt=""
          className="absolute max-w-sm h-72 -rotate-[25deg] md:max-w-md md:h-96 lg:h-5/6 lg:-rotate-[37deg]"
        />
        <img
          src={PurpleShape}
          alt=""
          className="absolute max-w-sm h-72 -rotate-[12deg] md:max-w-md md:h-96 lg:h-5/6 lg:-rotate-[26deg] "
        />
        <img
          src={Hero}
          alt=""
          className="relative max-w-sm h-72 md:max-w-lg md:h-96 lg:h-5/6 lg:max-w-lg "
        />
      </div>
      <div className="flex flex-col gap-5 lg:flex-1 lg:order-2 ">
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight  font-playFair ">
          Host your website in less than 5 minutes.
        </h1>
        <h2 className="font-thin text-slate-500 md:text-2xl">
          With Hosterr, get your website up and running in no less than 5
          minutes with the most competitive pricing packages available online.
        </h2>
        <form action="" className="flex flex-col gap-2 md:flex-row">
          <input
            type="text"
            placeholder="Enter e-mail adress"
            className="p-2 rounded-md placeholder-slate-600 font-playFair md:w-[45%] md:placeholder:text-lg md:p-5"
          />
          <button className="bg-[#4977ea] text-white p-2 font-semibold cursor-pointer rounded font-lato md:w-52 md:text-lg">
            Join Waitlist
          </button>
        </form>
        <div className="flex gap-3 font-playFair">
          <img src={CheckMark} alt="" />
          <p className="md:text-lg">No spam,ever. Unsubscribe anytime</p>
        </div>
      </div>
    </main>
  );
}
function Footer() {
  return (
    <footer className="flex flex-col md:justify-center gap-10 md:flex-row md:gap-64 md:items-end md:pt-8">
      <ul className="flex gap-10  font-lato text-gray-500">
        <li>
          <a href="">Facebook</a>
        </li>
        <li>
          <a href="">Instagram</a>
        </li>
        <li>
          <a href="">Twitter</a>
        </li>
      </ul>
      <div className="flex gap-2 ">
        <img src={Help} alt="" />
        <div className="">
          <p>Have any questions?</p>
          <a className="font-semibold" href="">
            Talk to specialists
          </a>
        </div>
      </div>
    </footer>
  );
}

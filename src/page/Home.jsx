import React from "react";

const Hero = () => {
  return (
    <section className="flex flex-col w-11/12 md:flex-row justify-evenly  py-16 mx-auto items-center text-center md:text-left">
      <div className="">
        <h1 className="text-4xl md:text-6xl font-bold">I'm Jimi Talabi Joy</h1>
        <p className="text-xl mt-4">Fullstack Developer</p>
        <div className="mt-6 space-x-4">
          <button className="bg-yellow-500 text-black py-2 px-6 rounded">
            Hire Me
          </button>
          <button className="border border-yellow-500 py-2 px-6 rounded text-yellow-500">
            My Works
          </button>
        </div>
      </div>
      <div className="mt-6 md:mt-0  flex justify-center">
        <img
          src="/assets/joy.jpg"
          alt=" Jimi Talabi Joy"
          className="rounded-full shadow-xl w-80 h-80 object-cover"
        />
      </div>
    </section>
  );
};

export default Hero;

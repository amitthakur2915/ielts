import React from "react";
import heroImg from "../assets/img1.jpg";

const Hero = () => {
  return (
    <section className="bg-blue-50 pt-[60px] m-0 p-0"> 
      <div className="w-full flex flex-col md:flex-row m-0 p-0">
        <div className="flex-1 p-6 md:p-12 flex flex-col justify-center">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
            Achieve Your Dream IELTS Score with{" "}
            <span className="text-blue-600">Expert Guidance</span>
          </h2>
          <p className="mt-4 text-gray-600">
            Join our institute and get access to professional trainers,
            AI-driven mock tests, and personalized study plans.
          </p>
          <button className="mt-6 bg-blue-600 text-white px-4 py-2 text-sm md:text-base rounded-full shadow-md hover:bg-blue-700 transition w-fit mx-auto block ">
            Get Started
          </button>
        </div>
        <div className="flex-1 flex justify-end items-start m-0 p-0">
          <img
            src={heroImg}
            alt="IELTS Study"
            className="w-full h-full object-cover m-0 p-0"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;

"use client";

import Header from "./components/Header";
import React, { ReactNode, useEffect, useState } from "react";
import { SlideInElement } from "./components/SlideInElement";
import PurpleDotsGraphic from "./components/PurpleDotsGraphic";
import WeCreateFade from "./components/WeCreateFade";
import QuoteInquiryFormGraphic from "./components/QuoteInquiryFormGraphic";
import axios from "axios";

export default function Home() {
  return (
    <div>
      <Header />
      <main className="pb-24">
        <Landing />
        <Secondary />
      </main>
    </div>
  );
}

function Landing() {
  return (
    <div>
      <LandingBg />
      <div className="absolute grid grid-cols-12 right-0 top-0 lg:mt-24 mt-24 h-[75vh] items-center w-screen lg:px-24 px-8">
        <div className="flex flex-col md:justify-center sm:justify-center justify-end lg:col-span-5 md:col-span-6 col-span-12">
          <h1 className="text-[#232323] leading-relaxed whitespace-nowrap font-Poppins font-semibold sm:text-4xl text-3xl xl:w-3/4 lg:6/7 md:5/6 w-full">
            Digital Futures, <br /> Developed Together.
          </h1>
          <p className="mt-3 text-[#1F1F1F] font-Poppins lg:text-lg font-light md:w-3/4 sm:w-1/2 w-full">
            Empowering your brand's online impact with custom design and
            development solutions tailored to you.
          </p>
          <div className="mt-4 -translate-x-2 grid md:grid-cols-1 grid-cols-2 gap-y-2">
            <ul aria-label="Our Pillars">
              <li className="font-Poppins font-medium text-[#1E1E1E] sm:text-md text-sm whitespace-nowrap flex items-center flex-row gap-2">
                <img src="/check-icon.svg" alt="Guaranteed" />
                Creative Designs
              </li>
              <li className="font-Poppins font-medium text-[#1E1E1E] sm:text-md text-sm whitespace-nowrap flex items-center flex-row gap-2">
                <img src="/check-icon.svg" alt="Guaranteed" />
                Quality Guarantee
              </li>
              <li className="font-Poppins font-medium text-[#1E1E1E] sm:text-md text-sm whitespace-nowrap flex items-center flex-row gap-2">
                <img src="/check-icon.svg" alt="Guaranteed" />
                Detail Oriented
              </li>
            </ul>

            {/* <div className="md:hidden flex items-end justify-end">
              <button
                aria-label="Get Started"
                className="h-12 w-[9.5rem] rounded-full bg-gradient-to-r from-[#7647F5] to-[#9275E0]"
              >
                Get Started
              </button>
            </div> */}
          </div>
          <div className="mt-4">
            <button
              aria-label="Get Started"
              className="h-12 md:w-[9.5rem] w-40 rounded-full bg-gradient-to-r from-[#7647F5] to-[#9275E0]"
            >
              Get Started
            </button>
          </div>
        </div>
        <div className="flex justify-center items-center lg:col-span-7 mt-10 md:col-span-6 col-span-12">
          <img
            src="/landing-graphic.svg"
            className=""
            alt="Computer with people around it working together and hard on a website."
          />
        </div>
      </div>
    </div>
  );
}

function LandingBg() {
  return (
    <div className="lg:h-[80vh] md:h-[80vh] h-[70vh] w-screen">
      <img
        className="xl:h-full lg:3/4 md:h-2/3 h-[45vw] absolute right-0 top-0 z-[-1]"
        src="/landing-bg.svg"
        alt="Wavy purple background symbolizing flow"
      />
    </div>
  );
}

function Secondary() {
  return (
    <div
      id="about"
      className="w-screen sm:min-h-[300vh] lg:mt-20 lg:px-24 px-8 mb-20"
    >
      <SlideInElement>
        <Main3Points />
      </SlideInElement>
      <SlideInElement>
        <AboutUs />
      </SlideInElement>
      <SlideInElement>
        <QuoteAndInquiry />
      </SlideInElement>
    </div>
  );
}

function Main3Points() {
  return (
    <div className="row-span-1 col-span-2 justify-center gap-12 w-full xl:min-h-[250px] lg:min-h-[350px] md:min-h-[350px] sm:flex grid grid-rows-1 md:mt-0 mt-[15vh]">
      <div className="bg-gradient-to-br from-[#7345D7] drop-shadow-3xl rounded-xl rounded-tr-[50%] to-[#986FF8] sm:w-1/3 w-full sm:h-auto h-full sm:py-0 py-8 px-8 grid items-center">
        <div>
          <div className="flex flex-row">
            <img src="/lightbulb.svg" alt="Ideas" />
          </div>
          <h2 className="flex flex-row font-Poppins font-semibold mt-3">
            Creativity
          </h2>
          <p className="flex flex-row font-Poppins font-light text-sm w-4/5 mt-2">
            Our development and design team's dedication to excellence has been
            instrumental in achieving outstanding results.
          </p>
        </div>
      </div>
      <div className="bg-white text-black sm:w-1/3 w-full drop-shadow-3xl rounded-xl rounded-tr-[50%] sm:h-auto h-full sm:py-0 py-8 px-8 grid items-center">
        <div>
          <div className="flex flex-row">
            <img src="/Badge.svg" alt="Ideas" />
          </div>
          <h2 className="flex flex-row font-Poppins font-semibold mt-3">
            Quality Guarantee
          </h2>
          <p className="flex flex-row font-Poppins font-light text-sm w-4/5 mt-2">
            Quality is key, our websites are built using the top technologies
            and innovative practices that are built to last and grow with your
            business.
          </p>
        </div>
      </div>
      <div className="bg-white text-black sm:w-1/3 w-full drop-shadow-3xl rounded-xl rounded-tr-[50%] sm:h-auto h-full sm:py-0 py-8 px-8 grid items-center">
        <div>
          <div className="flex flex-row">
            <img src="/Bullseye.svg" alt="Ideas" />
          </div>
          <h2 className="flex flex-row font-Poppins font-semibold mt-3">
            Detail Oriented
          </h2>
          <p className="flex flex-row font-Poppins font-light text-sm w-4/5 mt-2">
            We notice the small things, each website is observed with a fine
            eye. We ensure nothing is missed and it is how you invisioned it.
          </p>
        </div>
      </div>
    </div>
  );
}

function AboutUs() {
  return (
    <div className="sm:grid grid-rows-3 flex flex-col lg:mt-5 mt-0">
      <div className="sm:grid flex flex-col row-span-1 py-20 grid-rows-2">
        <h2 className="text-[#7D03FC] justify-center sm:grid flex flex-row items-end pb-2 text-lg font-Poppins font-bold text-center">
          Intrant Digital
        </h2>
        <h2 className="text-[#1A1A1A] justify-center sm:grid flex flex-row font-Poppins font-semibold text-4xl text-center">
          Learn More About Us
        </h2>
      </div>
      <div className="sm:grid flex flex-col row-span-2 grid-cols-3 lg:mt-5 mt-0">
        <div className="sm:col-span-2 sm:grid flex-row grid-cols-12">
          <div
            id="portfolio"
            className="bg-white rounded-xl p-5 h-full grid items-center grid-cols-2 drop-shadow-2xl col-span-11"
          >
            <div className="lg:col-span-1 col-span-2 grid justify-center grid-rows-6">
              <div className="row-span-1 grid grid-cols-12">
                <div className="col-span-2 grid items-center justify-center">
                  <img src="/Suitcase-Graphic.svg" alt="Our Work" />
                </div>
                <h3 className="pl-5 font-Poppins col-span-10 grid items-center font-semibold text-xl text-black">
                  Our Portfolio
                </h3>
              </div>

              <div className="row-span-5 py-8 grid grid-cols-12 justify-center">
                <div className="col-span-2 grid justify-center">
                  <div className="w-1 h-full rounded-full bg-gradient-to-b from-[#973AF9] to-[#E4CAFF]"></div>
                </div>
                <p className="px-5 leading-loose font-Poppins font-light grid items-center text-sm col-span-10 text-black">
                  Witness the expertise that drives our success in design,
                  development, marketing, content, and more. Discover our
                  diverse capabilities and let us bring excellence to your
                  projects. Reach out to us to discuss collaboration
                  opportunities.
                </p>
              </div>
            </div>

            <div className="col-span-1 lg:block hidden">
              <img
                src="/learn-about-us-graphic.svg"
                alt="Person with forms and questions wanting to learn more."
              />
            </div>
          </div>
          <div className="col-span-1 relative top-[50%] z-[-1] -translate-x-10">
            <PurpleDotsGraphic height="100" />
          </div>
        </div>
        <div className="lg:ml-20 ml-0 sm:grid flex flex-col sm:col-span-1 col-span-3 py-8 px-10 bg-gradient-to-br from-[#aa87f4] rounded-xl via-[#9259F8] to-[#771AD9]">
          <div aria-label="We Create">
            <WeCreateFade height="70" />
          </div>
          <div className="w-1/4 bg-white h-[1px] mt-4"></div>
          <p className="mt-4 font-Poppins font-light text-sm leading-loose">
            We are a team driven by innovation, weaving together diverse talents
            to craft designs that transcend the ordinary. Embracing failure as a
            catalyst, we collaborate to create user-centric works that leave a
            lasting impact.
          </p>
        </div>
      </div>
    </div>
  );
}

function QuoteAndInquiry() {
  return (
    <div className="h-full mt-20" id="inquiry">
      <div className="grid grid-rows-2">
        <h2 className="text-[#7D03FC] grid items-end pb-2 text-lg font-Poppins font-bold text-center">
          Intrant Digital
        </h2>
        <h3 className="text-[#1A1A1A] font-Poppins font-semibold text-4xl text-center">
          Get Started Now
        </h3>
      </div>
      <div className="bg-white rounded-xl drop-shadow-3xl min-h-4/5 mb-20 mt-16 sm:p-8 p-0 grid grid-cols-5">
        <div className="lg:col-span-3 col-span-5 flex flex-col h-full">
          <div className="grid grid-cols-12">
            <div className="col-span-1 sm:grid hidden items-center">
              <img src="/Quote-Icon.svg" alt="Quotes and Inquiries" />
            </div>
            <h2 className="pl-8 sm:mt-0 mt-6 sm:text-3xl text-2xl sm:col-span-11 col-span-10 grid items-center text-[#1A1A1A] font-Poppins font-semibold">
              Quotes & Inquiries
            </h2>
            <div className="sm:hidden grid col-span-1 items-end">
              <img
                src="/Quote-Icon.svg"
                className="h-3/4"
                alt="Quotes and Inquiries"
              />
            </div>
          </div>
          <div className="row-span-1 grid grid-cols-12 pr-5 mt-8">
            <div className="col-span-1 w-full h-full"></div>
            <form
              id="contact"
              action={
                "https://docs.google.com/forms/u/6/d/e/1FAIpQLSdb4hpPaq5nsCAweTPZ37pONcqt2UhGJ7CRPPrCUjkiGPvWIQ/formResponse"
              }
              className="lg:col-span-11 col-span-10 sm:pl-8 pl-0"
              method="get"
              aria-label="Request Quote or Submit Inquiry Form"
            >
              <div className="grid gap-4 sm:grid-cols-2 grid-cols-1">
                <div className="grid grid-rows-2">
                  <div>
                    <label
                      htmlFor="name"
                      className="text-[#222222] font-Poppins font-semibold"
                    >
                      First Name
                      <span className="text-red-400 ml-2">*</span>
                    </label>
                  </div>
                  <div>
                    <input
                      className="text-[#1A1A1A] font-light font-Poppins outline-none w-full drop-shadow-sm border border-1 border-grey-500 rounded-md px-2 py-1"
                      type="text"
                      name="entry.2129001064"
                      id="name"
                      placeholder="First Name"
                      required
                    />
                  </div>
                </div>
                <div className="grid grid-rows-2">
                  <div>
                    <label
                      htmlFor="email"
                      className="text-[#222222] font-Poppins font-semibold"
                    >
                      Email Address
                      <span className="text-red-400 ml-2">*</span>
                    </label>
                  </div>
                  <div>
                    <input
                      className="text-[#1A1A1A] font-light font-Poppins outline-none w-full drop-shadow-sm border border-1 border-grey-500 rounded-md px-2 py-1"
                      type="email"
                      id="email"
                      name="entry.1081718932"
                      placeholder="Email Address"
                      required
                    />
                  </div>
                </div>
              </div>
              <div className="row-span-1 mt-4 grid gap-4 sm:grid-cols-2 grid-cols-1">
                <div className="grid grid-rows-2">
                  <div>
                    <label
                      htmlFor="company"
                      className="text-[#222222] font-Poppins font-semibold"
                    >
                      Company Name
                    </label>
                  </div>
                  <div>
                    <input
                      className="text-[#1A1A1A] font-light font-Poppins outline-none w-full drop-shadow-sm border border-1 border-grey-500 rounded-md px-2 py-1"
                      type="text"
                      name="entry.1024962110"
                      id="company"
                      placeholder="Company Name"
                    />
                  </div>
                </div>
                <div className="grid grid-rows-2">
                  <div>
                    <label
                      htmlFor="phone"
                      className="text-[#222222] font-Poppins font-semibold"
                    >
                      Phone Number
                    </label>
                  </div>
                  <div>
                    <input
                      className="text-[#1A1A1A] font-light font-Poppins outline-none w-full drop-shadow-sm border border-1 border-grey-500 rounded-md px-2 py-1"
                      type="tel"
                      name="entry.1081322583"
                      id="phone"
                      placeholder="Phone Number"
                    />
                  </div>
                </div>
              </div>

              <div className="row-span-1 mt-4">
                <div className="flex flex-col">
                  <label
                    htmlFor="description"
                    className="text-[#222222] flex flex-row items-center font-Poppins font-semibold"
                  >
                    Description
                    <span className="text-red-400 ml-2">*</span>
                  </label>
                  <div className="mt-2">
                    <textarea
                      name="entry.624050575"
                      required
                      id="description"
                      className="text-[#1A1A1A] font-light font-Poppins outline-none w-full drop-shadow-sm border border-1 border-grey-500 min-h-[200px] rounded-md px-2 py-1"
                      placeholder="Describe what you're looking for or any questions. Provide Links if Necessary"
                    />
                  </div>
                </div>
              </div>

              <div className="row-span-1 mt-4">
                <div className="grid grid-rows-2">
                  <div>
                    <label
                      htmlFor="budget"
                      className="text-[#222222] font-Poppins font-semibold"
                    >
                      Budget
                    </label>
                  </div>
                  <div>
                    <input
                      className="text-[#1A1A1A] font-light font-Poppins outline-none w-full drop-shadow-sm border border-1 border-grey-500 rounded-md px-2 py-1"
                      type="text"
                      id="budget"
                      name="entry.1268415430"
                      placeholder="Budget"
                    />
                  </div>
                </div>
              </div>

              <div className="mt-4 hidden text-[#1A1A1A] font-Poppins grid grid-rows-2 row-span-1">
                <label className="text-[#222222] flex flex-row items-center font-Poppins font-semibold">
                  Specifics
                  <span className="text-red-400 ml-2">*</span>
                </label>
                <div className="mt-2 flex flex-wrap items-center gap-2">
                  <div className="flex items-center">
                    <label className="mr-2 text-sm" htmlFor="Website">
                      Website
                    </label>
                    <input
                      className=""
                      type="checkbox"
                      name="entry.1317573497"
                      id=""
                    />
                  </div>

                  <div className="flex whitespace-nowrap items-center">
                    <label
                      className="mr-2 text-center text-sm"
                      htmlFor="Inquiry"
                    >
                      General Inquiry
                    </label>
                    <input
                      className=""
                      type="checkbox"
                      name="entry.1601300105"
                      id=""
                    />
                  </div>

                  <div className="flex items-center">
                    <label className="mr-2 text-sm" htmlFor="Software">
                      Software
                    </label>
                    <input
                      className=""
                      type="checkbox"
                      name="entry.1121891337"
                      id=""
                    />
                  </div>

                  <div className="flex items-center">
                    <label className="mr-2 text-sm" htmlFor="Design">
                      Design
                    </label>
                    <input
                      className=""
                      type="checkbox"
                      name="entry.380025316"
                      id=""
                    />
                  </div>

                  <div className="flex items-center">
                    <label className="mr-2 text-sm" htmlFor="Other">
                      Other
                    </label>
                    <input
                      className=""
                      type="checkbox"
                      name="entry.1252268454"
                      id=""
                    />
                  </div>
                </div>
              </div>
              <div className="row-span-1 my-12">
                <input
                  type="submit"
                  className="h-12 w-40 rounded-full bg-gradient-to-r from-[#7D03FC] to-[#9275E0] hover:cursor-pointer"
                  value={"Submit Details"}
                  aria-label="Submit Request"
                />
              </div>
            </form>
            <div className="col-span-1 w-full h-full"></div>
          </div>
        </div>
        <div className="col-span-2 justify-center items-center p-6 max-h-full lg:grid hidden">
          <QuoteInquiryFormGraphic height="400" />
        </div>
      </div>
    </div>
  );
}

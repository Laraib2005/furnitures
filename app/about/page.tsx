/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React from "react";

const About = () => {
  return (
    <div>
      {/* Hero Section */}
      <div className="w-full h-auto flex flex-col md:flex-row justify-between items-center px-4 md:px-16 py-8">
        {/* Text Section */}
        <div className="md:w-2/4 text-sm sm:text-base md:text-2xl text-center md:text-left text-custom-purple px-4">
          A brand built on the love of craftsmanship, quality, and outstanding customer service
        </div>
        {/* Button Section */}
        <div className="mt-6 md:mt-0">
          <button className="bg-gray-200 h-12 w-40 rounded-sm text-custom-purple">
            <Link href='/all'>
            View our products
            </Link>
          </button>
        </div>
      </div>

      {/* Story Section */}
      <div className="flex flex-col md:flex-row w-full h-auto items-center justify-between px-4 py-16">
        {/* Text Section */}
        <div className="bg-[#2A254B] w-full md:w-2/5 text-white p-8 md:p-20 mb-12 md:mb-0">
          <h1 className="text-sm sm:text-base md:text-2xl">It started with a small idea</h1>
          <p className="mt-6 text-xs sm:text-sm">
            A global brand with local beginnings, our story began in a small studio in South London in early 2014.
          </p>
          <button className="bg-input-bg h-12 w-40 rounded-sm mt-10 text-white">
            View Collection
          </button>
        </div>
        {/* Image Section */}
        <div className="w-full md:w-2/5">
          <img
            src="/images/About main.png"
            alt="About main"
            className="w-full"
            height={478}
          />
        </div>
      </div>

      {/* Service Section */}
      <div className="flex flex-col md:flex-row w-full h-auto items-center justify-between px-4 py-16 space-y-8 md:space-y-0">
        {/* Image Section */}
        <img
          src="/images/About second.png"
          alt="Service"
          className="w-full md:w-2/5" 
        />
        {/* Text Section */}
        <div className="border-2 bg-slate-200 w-full md:w-3/5 p-8 md:p-20">
          <h1 className="text-sm sm:text-base md:text-2xl text-custom-purple">
            Our service isn’t just personal, it’s actually hyper-personally exquisite
          </h1>
          <p className="text-custom-purple mt-6 text-xs sm:text-sm">
            When we started Avion, the idea was simple. Make high-quality furniture affordable and available for the
            mass market. Handmade, and lovingly crafted furniture and homeware is what we live, breathe, and design so
            our Chelsea boutique became the hotbed for the London interior design community.
          </p>
          <button className="bg-white h-12 w-40 rounded-sm mt-10 text-custom-purple">Get in Touch</button>
        </div>
      </div>

      {/* Features Section */}
      <div className="w-full h-auto pb-16">
        <h1 className="text-center text-custom-purple text-sm sm:text-base md:text-xl">What makes our brand different</h1>
        <div className="flex flex-wrap justify-center px-2 py-5 gap-4">
  {/* Feature Cards */}
  {[ 
    {
      img: "/images/Delivery.png",
      title: "Next day as standard",
      desc: "Order before 3pm and get your order the next day as standard",
    },
    {
      img: "/images/check.png",
      title: "Made by true artisans",
      desc: "Handmade crafted goods made with real passion and craftsmanship",
    },
    {
      img: "/images/Purchase.png",
      title: "Unbeatable prices",
      desc: "For our materials and quality you won’t find better prices anywhere",
    },
    {
      img: "/images/Sprout.png",
      title: "Recycled packaging",
      desc: "We use 100% recycled materials to ensure our footprint is more manageable",
    },
  ].map((item, index) => (
    <div
      key={index}
      className="bg-gray-200 w-72 h-auto rounded-sm px-6 py-8 text-center"
    >
      {/* Feature Image */}
      <img
                src={item.img}
                alt={item.title}
                className="mx-auto w-full" 
              />
              {/* Feature Title and Description */}
              <h1 className="text-custom-purple text-sm sm:text-base md:text-lg mt-4">{item.title}</h1>
              <p className="text-custom-purple text-xs sm:text-sm mt-4">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Newsletter Section */}
      <div className="w-full h-auto bg-gray-100 py-8">
        <div className="m-auto w-11/12 bg-white p-8 md:p-16">
          <h1 className="text-custom-purple text-sm sm:text-base md:text-2xl text-center">Join the club and get the benefits</h1>
          <p className="text-custom-purple text-center mt-6 text-xs sm:text-sm md:text-base">
            Sign up for our newsletter and receive exclusive offers on new ranges, sales, pop-up stores, and more.
          </p>
          <div className="flex flex-col md:flex-row justify-center items-center mt-6 space-y-4 md:space-y-0">
            {/* Newsletter Input and Button */}
            <input
              type="text"
              placeholder="you@gmail.com"
              className="bg-gray-100 w-full sm:w-80 h-12 p-5 rounded-sm"
            />
            <button className="bg-custom-purple h-12 w-full sm:w-32 rounded-sm text-white mt-4 sm:mt-0">Sign Up</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

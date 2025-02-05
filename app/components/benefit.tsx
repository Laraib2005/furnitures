import React from 'react';

const Benefit = () => {
  return (
    <>
      {/* Section Wrapper for the entire Benefit area */}
      <section className="py-12 bg-[#F9F9F9] mt-12">
        {/* Main Container with centered content */}
        <div className="w-full max-w-[640px] md:max-w-[1340px] h-[350px] bg-white mx-auto flex justify-center items-center flex-col px-6 md:px-12">
          
          {/* Main Heading - Join the Club */}
          <h1 className="text-2xl md:text-4xl text-center text-[#2A254B] font-semibold">
            Join the club and get the benefits
          </h1>
          
          {/* Subheading for the benefits description */}
          <h2 className="text-center py-4 text-sm md:text-base text-[#726E8D]">
            Sign up for our newsletter and receive exclusive offers on new
            <br /> ranges, sales, pop-up stores, and more.
          </h2>

          {/* Newsletter Sign-up Form */}
          <div className="w-full mt-6">
            <form className="flex flex-col md:flex-row items-center justify-center gap-4">
              
              {/* Email Input Field */}
              <input
                type="email"
                placeholder="your@email.com"
                className="p-4 bg-[#F9F9F9] w-full md:w-[354px] h-[56px] border border-[#DDD] rounded-md outline-none"
              />
              
              {/* Submit Button for the Sign-up */}
              <button
                type="submit"
                className="p-4 bg-[#2A254B] text-white w-full md:w-[150px] h-[56px] rounded-md hover:bg-[#4E4D93] transition"
              >
                Sign Up
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default Benefit;

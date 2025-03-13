import React from "react";

const Contact = () => {
  return (
    <>
      <div className="w-full container my-20 mx-40 px-16 py-14 bg-[#E6F7FF] flex flex-col gap-3">
        <div className="flex flex-col items-start justify-center gap-[18px] max-w-[495px]">
          <h2 className="font-franc text-5xl text-[#1F1F1F]">
            Get started with Whirl
          </h2>
          <p className="font-inter text-[#1F1F1F] text-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt.
          </p>
          <button className="cursor-pointer transition-colors delay-100 hover:bg-[rgba(0,112,160,0.7)]  mt-[18px] bg-[#0070A0] text-white font-inter px-8 py-2 text-center">
            Book a demo
          </button>
        </div>
        <div className="flex items-center justify-between w-[30%]">
          <div className="text-center">
            <i className="fa-solid fa-check text-[#626A72]"></i>
            <a href="#" className="font-inter text-sm text-[#626A72]">
              Free 30-day trial
            </a>
          </div>
          <div className="text-center">
            <i className="fa-solid fa-check text-[#626A72]"></i>
            <a href="#" className="font-inter text-sm text-[#626A72]">
              No credit-card required
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;

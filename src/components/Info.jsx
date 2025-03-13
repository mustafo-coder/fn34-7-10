import React from "react";

const Info = () => {
  return (
    <div className="container mx-auto px-6 py-16">
      <div className="p-10 flex flex-col md:flex-row items-center md:items-start justify-between gap-10">
        <div className="w-full md:w-1/4 text-center md:text-left">
          <h1 className="font-franc text-[42px] leading-[50.4px] tracking-[0.2px] text-[#1F1F1F]">
            What's Whirl
          </h1>
          <h2 className="font-franc text-[42px] leading-[50.4px] tracking-[0.2px] text-[#1F1F1F]">
            all about?
          </h2>
        </div>

        <div className="w-full md:w-3/4 grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <i className="fa fa-globe text-sky-700 text-2xl mb-2"></i>
            <h3 className="text-base font-franc">All on one place.</h3>
            <p className="text-gray-600  text-sm mt-2 place-items-baseline">
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>

          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <i className="fa fa-search text-sky-700 text-2xl mb-2"></i>
            <h3 className="text-base font-franc">Get daily alerts.</h3>
            <p className="text-gray-600 text-sm mt-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore.
            </p>
          </div>

          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <i className="fa fa-envelope text-sky-700 text-2xl mb-2"></i>
            <h3 className="text-base font-franc">Safe and secure.</h3>
            <p className="text-gray-600 text-sm mt-2">
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Info;

import React from "react";

const Hero = () => {
  return (
    <section className="h-[800px] bg-white bg-no-repeat bg-cover bg-center py-24 mt-20 md:mt-0 border-b">
      <div className="container mx-auto flex flex-col md:flex-row justify-around h-full">
        <div className="flex flex-col justify-center">
          <div className="font-semibold flex items-center uppercase">
            <div className="w-10 h-[2px] bg-red-500 mr-3"></div>New Trend
          </div>
          <h1 className="text-[70px] leading-[1.1] font-light mb-4">
            NICOLINAS WINE SHOP <br />
            <span className="font-semibold">WINE SELECTION</span>
          </h1>
          <a
            href="#wines"
            className="self-start uppercase font-semibold border-b-2 border-primary"
          >
            Discover More
          </a>
        </div>
        <div className="block md:order-last">
          <img
            className="sm:h-[700px] h-auto"
            src="https://assets-global.website-files.com/64c168e575d2b07666e2c93f/64cad22dc9bab4d84b8f3938_Wine%20Club%20Illustration.svg"
            alt=""
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;

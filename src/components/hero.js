import React from "react";

function Hero({ title, description, imageUrl, buttonText, from }) {
  return (
    <div
      className={`relative  text-white w-full  bg-no-repeat bg-cover bg-center ${
        // Conditional class to set height based on the "from" prop
        from === "banner" ? "h-screen" : "h-[70vh]"
      } `}
      // Inline style to set the background image
      style={{ backgroundImage: `url(${imageUrl})` }}
    >
      <div className="absolute inset-0 flex items-center sm:ml-20 ml-10 md:w-1/3 w-2/3">
        <div>
          {/* Conditional class to set font size based on the "from" prop */}
          <h1
            className={` ${
              from === "banner"
                ? "lg:text-6xl md:text-5xl sm:text-4xl text-3xl"
                : "lg:text-3xl md:text-2xl text-xl sm:text-nowrap"
            } font-bold`}
          >
            {title}
          </h1>
          <p className="mt-4 text-base text-left">{description}</p>
          <button className="mt-8 px-6 py-2 bg-white text-gray-800 font-semibold rounded">
            {buttonText}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Hero;

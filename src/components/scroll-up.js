import React from "react";

function ScrollUp() {
  // Function that scrolls to the top of the page with a smooth animation
  const scrollUp = () => {
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, 100); // 100ms delay to ensure any dynamic content has loaded
  };

  return (
    // Button that calls the scrollUp function when clicked
    <button
      onClick={scrollUp}
      className="fixed bottom-4 right-4 p-2 bg-black text-white shadow-lg hover:bg-gray-700 focus:outline-none"
    >
      <img
        src="/assets/icons/up-arrow.svg"
        alt="Up arrow"
        className="w-4 h-4"
      />
    </button>
  );
}

export default ScrollUp;

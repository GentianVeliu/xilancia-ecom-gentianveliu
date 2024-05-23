import React, { useState } from "react";
import { FaqData } from "../utils/data";
import FaqRow from "../components/faq-row";

function Faq() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="px-10 pb-8 sm:px-20">
      <h2 className="text-center sm:text-3xl text-2xl font-bold mb-8">FAQ</h2>
      <div className="w-full mx-auto">
        {FaqData.map((item, index) => (
          <div
            key={index}
            className={`border-b ${index === 0 ? "border-t" : ""}`}
          >
            <FaqRow
              item={item}
              index={index}
              toggleFAQ={toggleFAQ}
              activeIndex={activeIndex}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Faq;

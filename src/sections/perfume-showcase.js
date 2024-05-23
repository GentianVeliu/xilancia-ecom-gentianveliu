import React from "react";
import { PerfumesShowcase } from "../utils/data";
import PerfumeShowcaseCard from "../components/perfume-showcase-card";

function PerfumeShowcase() {
  return (
    <div className="pt-20 pb-32 sm:mx-20 mx-10">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
        {PerfumesShowcase.map((perfume, index) => (
          // Render each PerfumeShowcaseCard component, passing the perfume data and index as props
          <PerfumeShowcaseCard index={index} perfume={perfume} />
        ))}
      </div>
    </div>
  );
}

export default PerfumeShowcase;

import React from "react";
import PerfumeCard from "../components/perfume-card";
import { Perfumes } from "../utils/data";

function TopProducts() {
  return (
    <div className="py-10 sm:mx-20 mx-10">
      <h2 className="md:text-3xl text-2xl font-bold text-center mb-8">
        Unsere Top 4 Mini-Flacons
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {Perfumes.map((perfume, index) => (
          <PerfumeCard
            index={index}
            name={perfume.name}
            priceRange={perfume.priceRange}
            imageUrl={perfume.imageUrl}
          />
        ))}
      </div>
    </div>
  );
}

export default TopProducts;

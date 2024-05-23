import React from "react";
import { BrandsData } from "../utils/data";

function Brands() {
  return (
    <div className="py-10 sm:mx-20 mx-10">
      <div className="flex flex-wrap justify-center items-center gap-6">
        {BrandsData.map((brand, index) => (
          <div key={index} className="flex items-center justify-center p-4">
            {/* Render each brand logo */}
            <img
              src={brand.imageUrl}
              alt={brand.name}
              className={`object-contain ${
                brand.name === "Kilian" ? "h-32" : "h-16"
              }`}
              // Adjust the height of the logo image conditionally based on the brand name
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Brands;

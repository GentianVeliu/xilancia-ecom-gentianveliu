import React from "react";
import { FooterIcons, FooterLinks } from "../utils/data";

function Footer() {
  return (
    <div className="bg-black text-white py-10 sm:px-20 px-10">
      <div className="container lg:mx-auto grid grid-cols-1 lg:grid-cols-5 gap-7">
        <div className="lg:col-span-1 flex flex-col items-center lg:items-start">
          <img
            src="/assets/footer/footer-logo.png"
            alt="DuftSamples Logo"
            className="mb-4 w-24 h-36"
          />
        </div>

        {/* Map through FooterLinks to dynamically create sections */}
        {FooterLinks.map((item, index) => (
          <div key={index} className="md:col-span-1">
            <h4 className="font-bold mb-4">{item.title}</h4>
            <ul>
              {item.links.map((link, linkIndex) => (
                <li key={linkIndex} className="mb-2">
                  <a href={link.href} className={link.className || ""}>
                    {link.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}

        <div className="md:col-span-1">
          <h4 className="font-bold mb-4">UNSER ZIEL</h4>
          <p className="text-sm">
            Bei Duft Samples verstehen wir, dass die Auswahl des perfekten
            Duftes eine zutiefst persönliche und einzigartige Erfahrung ist.
          </p>
        </div>
      </div>

      <div className="mt-8 border-t border-gray-800 pt-4 flex flex-col md:flex-row justify-between items-center">
        <p className="text-xs text-center md:text-left">
          &copy; DUFTSAMPLES 2023. All Rights Reserved.
        </p>
        <div className="grid sm:grid-cols-7 grid-cols-4 mt-4 md:mt-0 gap-1 ">
          {FooterIcons.map((item, index) => (
            <div
              key={index}
              className="bg-white w-10 h-6 flex items-center rounded-sm"
            >
              <img src={item.src} alt={item.alt} className={item.className} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Footer;

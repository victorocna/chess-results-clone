import React from "react";

const Footer = () => {
  return (
    <footer className="w-full bg-gradient-to-t from-sky-900 to-sky-600 flex">
        <div className="w-3/5 py-2 px-1 flex flex-col justify-center">
            <p className="text-white italic underline">Chess-Results.com</p>
            <p className="text-white text-xs">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, deleniti?</p>
        </div>
        <div className="w-1/5 flex flex-col items-center justify-center">
            <a href="#" className="text-xs text-white">Dummy Link</a>
            <a href="#" className="text-xs text-white">Dummy Link</a>
            <a href="#" className="text-xs text-white">Dummy Link</a>
        </div>
        <div className="w-1/5 flex flex-col items-center justify-center">
            <a href="#" className="text-xs text-white">Dummy Link</a>
            <a href="#" className="text-xs text-white">Dummy Link</a>
            <a href="#" className="text-xs text-white">Dummy Link</a>
        </div>
      </footer>
  );
};

export default Footer;
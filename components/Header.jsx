import React from "react";

const Header = () => {
  return (
    <header className="w-full flex flex-col items-center justify-center bg-cover bg-center">
      <div className="w-full flex text-white bg-default">
        <div className="w-1/5 flex items-center justify-center">
          <img src="https://portal.frsah.ro/images/logo-frsah-transparent.png" alt="" className="h-[3rem]" />
        </div>
        <div className="w-3/5 py-6 flex items-center justify-center">
          <h1 className="text-xl">Federația Română de Șah</h1>
        </div>
        <div className="w-1/5 flex items-center justify-center">
          ☰
        </div>
      </div>

      <h1 className="w-full py-10 bg-default bg-opacity-50 text-white text-4xl text-center italic font-bold">
        Rezultate Turneu
      </h1>

      <div className="w-full py-2 flex flex-col items-center justify-center bg-default bg-opacity-50">
        <h2 className="text-2xl text-white">Tournament Name</h2>
        <p className="text-white italic">25/05/2022 | Round: 420</p>
      </div>
    </header>
  );
};

export default Header;

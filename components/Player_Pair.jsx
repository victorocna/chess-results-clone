import React from "react";

const Player_Pair = ({ white, black }) => {
    return (
      <div className="w-full mb-1 flex shadow">
          <div className="w-1/12 flex items-center justify-center bg-gradient-to-r from-sky-200 to-sky-100 border-r border-white">
            <p className="text-2xl">4</p>
          </div>
          <div className="w-10/12 flex flex-col bg-sky-100">
            <div className="h-full flex items-center border-b border-white">
              <p className="px-2 mx-1 text-[0.5rem] font-bold rounded bg-sky-600 text-white shadow">
                GM
              </p>
              <p className="text-l truncate">{white}</p>
              <p className="ml-2 text-xs text-gray-700">(1234)</p>
            </div>
            <div className="h-full flex items-center">
              <p className="px-2 mx-1 text-[0.5rem] font-bold rounded bg-sky-600 text-white shadow">
                GM
              </p>
              <p className="text-l truncate">{black}</p>
              <p className="ml-2 text-xs text-gray-700">(1234)</p>
            </div>
          </div>
          <div className="w-1/12 bg-gradient-to-l from-sky-200 to-sky-100 border-l border-white">
            <div className="flex items-center justify-center">
              <p className="text-2xl leading-6">1</p>
            </div>
            <div className="flex items-center justify-center">
              <p className="text-2xl leading-6">0</p>
            </div>
          </div>
        </div>
    );
};

export default Player_Pair;
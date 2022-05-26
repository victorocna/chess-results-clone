import { withRouter } from "next/router";
import React from "react";

const PlayerPair = ({
  board,
  white,
  black,
  result,
}) => {
  const splitRes = result.split('-');
  return (
    <div className="w-full flex">
      <div className="w-1/12 flex items-center justify-center">
        <p className="text-lg">{board}</p>
      </div>

      <div className="w-10/12 flex flex-col relative">
        <div className="h-full flex items-center"> {/*white*/}
          <p className="w-[5%] text-center text-xs text-gray-700">{white?.rank}</p>
          <p className="w-[10%] text-center px-1.5 mx-1 text-tiny rounded bg-default text-white font-mono">
            {white?.title}
          </p>
          <p className="w-[65%] text-sm truncate">{white?.name}</p>
          <p className="w-[15%] text-center text-xs text-gray-700">({white?.civ})</p>
          <p className="w-[5%] text-center text-xs text-gray-700">{white?.points}</p>
        </div>
        <div className="h-full flex items-center"> {/*black*/}
          <p className="w-[5%] text-center text-xs text-gray-700">{black?.rank}</p>
          <p className="w-[10%] text-center px-1.5 mx-1 text-tiny rounded bg-default text-white font-mono">
            {black?.title}
          </p>
          <p className="w-[65%] text-sm truncate">{black?.name}</p>
          <p className="w-[15%] text-center text-xs text-gray-700">({black?.civ})</p>
          <p className="w-[5%] text-center text-xs text-gray-700">{black?.points}</p>
        </div>
      </div>
      
      <div className="w-1/12">
        <div className="flex items-center justify-center">
          <p className="text-lg leading-6">{splitRes[0]}</p>
        </div>
        <div className="flex items-center justify-center">
          <p className="text-lg leading-6">{splitRes[1]}</p>
        </div>
      </div>
    </div>
  );
};

export default PlayerPair;

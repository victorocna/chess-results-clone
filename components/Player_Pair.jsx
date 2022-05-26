import React from "react";

const Player_Pair = ({
  board,
  name_w,
  name_b,
  rank_w,
  rank_b,
  rating_w,
  rating_b,
  result_w,
  result_b,
}) => {
  return (
    <div className="w-full mb-1 flex shadow">
      <div className="w-1/12 flex items-center justify-center bg-gradient-to-r from-neutral-400 to-neutral-300 border-r border-white">
        <p className="text-2xl">{board}</p>
      </div>
      <div className="w-10/12 flex flex-col bg-neutral-300">
        <div className="h-full flex items-center border-b border-white">
          <p className="px-2 mx-1 text-tiny font-bold rounded bg-sky-600 text-white shadow font-mono">
            {rank_w}
          </p>
          <p className="text-l truncate">{name_w}</p>
          <p className="ml-2 text-xs text-gray-700">({rating_w})</p>
        </div>
        <div className="h-full flex items-center">
          <p className="px-2 mx-1 text-tiny font-bold rounded bg-sky-600 text-white shadow font-mono">
            {rank_b}
          </p>
          <p className="text-l truncate">{name_b}</p>
          <p className="ml-2 text-xs text-gray-700">({rating_b})</p>
        </div>
      </div>
      <div className="w-1/12 bg-gradient-to-l from-neutral-400 to-neutral-300 border-l border-white">
        <div className="flex items-center justify-center">
          <p className="text-2xl leading-6">{result_w}</p>
        </div>
        <div className="flex items-center justify-center">
          <p className="text-2xl leading-6">{result_b}</p>
        </div>
      </div>
    </div>
  );
};

export default Player_Pair;

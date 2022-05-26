import React from "react";

const Player_Pair = ({
  board,
  start_no_w,
  start_no_b,
  name_w,
  name_b,
  rank_w,
  rank_b,
  rating_w,
  rating_b,
  score_w,
  score_b,
  result_w,
  result_b,
}) => {
  return (
    <div className="w-full flex">
      <div className="w-1/12 flex items-center justify-center">
        <p className="text-lg">{board}</p>
      </div>
      <div className="w-10/12 flex flex-col relative">
        <div className="h-full flex items-center">
          <p className="text-xs text-gray-700">{start_no_w}</p>
          <p className="px-1.5 mx-1 text-tiny rounded bg-default text-white font-mono">
            {rank_w}
          </p>
          <p className="text-l truncate">{name_w}</p>
          <p className="ml-2 text-xs text-gray-700">({rating_w})</p>
          <p className="text-xs text-gray-700 absolute right-0">{score_w}</p>
        </div>
        <div className="h-full flex items-center">
          <p className="text-xs text-gray-700">{start_no_b}</p>
          <p className="px-1.5 mx-1 text-tiny rounded bg-default text-white font-mono">
            {rank_b}
          </p>
          <p className="text-l truncate">{name_b}</p>
          <p className="ml-2 text-xs text-gray-700">({rating_b})</p>
          <p className="text-xs text-gray-700 absolute right-0">{score_b}</p>
        </div>
      </div>
      <div className="w-1/12 bg-gradient-to-l">
        <div className="flex items-center justify-center">
          <p className="text-lg leading-6">{result_w}</p>
        </div>
        <div className="flex items-center justify-center">
          <p className="text-lg leading-6">{result_b}</p>
        </div>
      </div>
    </div>
  );
};

export default Player_Pair;

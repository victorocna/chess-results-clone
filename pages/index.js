import React from "react";
import Header from "../components/Header";
import Player_Pair from "../components/Player_Pair";

const Page = () => {
  return (
    <div>
      <Header />
      <main className="w-full max-w-2xl mx-auto mt-1">
        <Player_Pair />
        <Player_Pair />
        <Player_Pair />
        <Player_Pair />
        <Player_Pair />
        <Player_Pair />
        <Player_Pair />
        <Player_Pair />
        <Player_Pair />
      </main>
      <footer className="w-full bg-gradient-to-t from-sky-900 to-sky-600 flex items-center justify-center">
        <p className="py-2 text-2xl text-white italic">footer</p>
      </footer>
    </div>
  );
};

export default Page;

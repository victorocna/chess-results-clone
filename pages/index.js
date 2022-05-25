import React from "react";
import Footer from "../components/Footer";
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
      <Footer />
    </div>
  );
};

export default Page;

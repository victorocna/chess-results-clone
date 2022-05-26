import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import PlayerPair from "../components/PlayerPair";
import Players from "../data/players.json";

const Page = () => {
  return (
    <div className="bg-white">
      <Header />
      <main className="w-full max-w-2xl mx-auto my-2 bg-stripe">
        <PlayerPair {...Players[0]}/>
        <PlayerPair {...Players[1]}/>
        <PlayerPair {...Players[2]}/>
        <PlayerPair {...Players[3]}/>
      </main>
      <Footer />
    </div>
  );
};

export default Page;

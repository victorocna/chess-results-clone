import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Player_Pair from "../components/Player_Pair";

const Page = () => {
  return (
    <div className="bg-white">
      <Header />
      <main className="w-full max-w-2xl mx-auto my-2 bg-stripe">
        <Player_Pair board="1" start_no_w="21" start_no_b="47" name_w="Victor" name_b="Vladimir" rank_w="GM" rank_b="FM" rating_w="1234" rating_b="2345" result_w="1" score_w="2" score_b="1" result_b="0"/>
        <Player_Pair board="2" start_no_w="21" start_no_b="47" name_w="Tiberiu" name_b="Pose" rank_w="NM" rank_b="IM" rating_w="4321" rating_b="5432" result_w="1" score_w="2" score_b="1" result_b="0"/>
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

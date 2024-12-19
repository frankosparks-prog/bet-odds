import React from "react";
import Footer from "./Footer";
import Odds from "../Odds";
import Search from "./search";

function Pred() {
  return (
    <>
      <div className="pred mt-[3rem] p-4">
        <div className="flex gap-16">
        <h3 className="font-serif mt-2 underline">Epl this week ⚽</h3>
        <Search />
        </div>
        <span className="font-serif text-green-700 text-[1.5rem]">Predictions</span>
        <Odds />
      </div>
      <Footer />
    </>
  );
}

export default Pred;

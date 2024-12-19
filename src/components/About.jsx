import React, { useState } from "react";
import Footer from "./Footer";
import { useNavigate } from "react-router";

function About() {
  const navigate = useNavigate();
  const [isGlittering, setIsGlittering] = useState(false);

  const handleGlitter = () => {
    setIsGlittering(true);
    setTimeout(() => setIsGlittering(false), 4000);
  };

  return (
    <div
      className={`bg-gradient-to-r to-blue-500 via-blue-300 from-white ${
        isGlittering ? "glitter-effect" : ""
      }`}
    >
      <div className="mt-[3rem] p-4">
        <h3 className="font-serif mt-2 underline">About Us 😁</h3>
      </div>
      <p className="text-black-400 font-semibold text-[1.4rem] mt-2 font-dancing text-center pl-14 pr-14">
        Welcome to Odds Hub, your ultimate destination for football odds and
        match predictions ⚽! We are dedicated to providing football enthusiasts
        and betting fans with a comprehensive platform to explore the best odds,
        predictions, and insights. Whether you're a seasoned bettor or just
        enjoy the thrill of the game, our site is designed to give you all the
        tools and information you need to make informed decisions. At Odds Hub,
        we offer real-time odds comparisons from top bookmakers, helping you
        stay ahead in the betting game. Our platform features expert predictions
        for matches across major leagues like the Premier League, La Liga, Serie
        A, and many more 😊. With detailed stats, team performance history, and
        head-to-head analysis, we ensure you have the complete picture before
        placing your bets. Our user-friendly and responsive interface makes it
        easy to navigate matches, view odds, and explore tips from any device
        💻.
      </p>
      <p className="text-black-400 font-semibold text-[1.4rem] mt-2 font-dancing text-center pl-14 pr-14">
        Beyond just numbers, we foster a vibrant community where football fans
        and bettors can share insights, strategies, and engage in meaningful
        discussions made possible at the comment section below. Whether you’re looking to track odds, analyze match trends,
        or simply stay updated on the latest football action, Odds Hub is here
        to enhance your experience. Join us today and make every match a winning
        moment 🥳! However, this is not a betting site! Moreover, to get more
        features and more legitimate predictions purchasable and sharable, you
        can register and login as a VIP and enjoy the explicit experience. For
        any inquiries or issue, contact us via the links provided. Happy to have
        you, enjoy 🤗.
      </p>
      <center>
        <button
          className="btnlogin flex justify-center items-center"
          onClick={handleGlitter}
        >
          Welcome 🎉
        </button>
      </center>

      <div class="relative">
        <button 
        onClick={() => navigate("/chat")}
        className="absolute bottom-0 right-16 w-[130px] h-[50px] bg-green-500 border-2 border-green-900 outline-none rounded-md cursor-pointer text-[1.1rem] text-black-500 font-medium transition-all duration-1000 items-center justify-center flex">
          <span>Comment Chatbox</span>
          <span>⏩</span>
        </button>
      </div>

      <Footer />
    </div>
  );
}

export default About;

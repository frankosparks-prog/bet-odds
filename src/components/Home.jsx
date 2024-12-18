import React from "react";
import Footer from "./Footer";

function Home() {
  const date = new Date();
  const hours = date.getHours();
  let timeofday;
  if (hours < 12) {
    timeofday = "morning ☀️";
  } else if (hours >= 12 && hours < 17) {
    timeofday = "afternoon 🌤️";
  } else if (hours >= 17 && hours < 20) {
    timeofday = "evening 🌄";
  } else {
    timeofday = "night 🌙";
  }
  return (
    <div>
      {/* className="bg-gradient-to-r to-blue-500 via-blue-300 from-white fixed" */}
      <div className="mt-[3rem] p-4">
        <marquee behavior="" direction="left" className="w-full">
          <h3 className="text-black">
            Hello there. Welcome to Odds Hub&#129303;. Get free odds and tips for the
            upcoming games. Enjoy the experience and have a great {timeofday}.
          </h3>
        </marquee>
        <h3 className="font-serif mt-2 underline">English Premier League ⚽</h3>
        <p className="font-serif text-green-700 text-[1.5rem]">
          Recent Predictions
        </p>
        <div className="flex gap-2 ">
          <div className="tcont flex-grow">
            <table className="w-full md:w-[50rem] border border-gray-700 mb-4">
              <thead className="bg-green-500">
                <tr>
                  <th className="border border-gray-400 px-4 py-2 font-bold text-left">
                    Monday 16.12.24
                  </th>
                  <th className="border border-gray-400 px-4 py-2 font-semibold text-left">
                    Tips
                  </th>
                  <th className="border border-gray-400 px-4 py-2 font-semibold text-left">
                    Odd
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="hover:bg-gray-100">
                  <td className="border border-gray-400 px-4 py-2 font-semibold">
                    Braga vs Famalicao
                  </td>
                  <td className="border border-gray-400 px-4 py-2 font-semibold">
                    Over 2.5
                  </td>
                  <td className="border border-gray-400 px-4 py-2 font-semibold">
                    1.80
                  </td>
                </tr>
                <tr className="hover:bg-gray-100">
                  <td className="border border-gray-400 px-4 py-2 font-semibold">
                    {" "}
                    Bournemouth vs West Ham
                  </td>
                  <td className="border border-gray-400 px-4 py-2 font-semibold">
                    1{" "}
                  </td>
                  <td className="border border-gray-400 px-4 py-2 font-semibold">
                    1.75
                  </td>
                </tr>
                <tr className="hover:bg-gray-100">
                  <td className="border border-gray-400 px-4 py-2 font-semibold">
                    Aalborg vs Silkeborg
                  </td>
                  <td className="border border-gray-400 px-4 py-2 font-semibold">
                    BTS Yes
                  </td>
                  <td className="border border-gray-400 px-4 py-2 font-semibold">
                    1.51
                  </td>
                </tr>
                <tr className="hover:bg-gray-100">
                  <td className="border border-gray-400 px-4 py-2 font-semibold">
                    {" "}
                    Lazio vs Inter
                  </td>
                  <td className="border border-gray-400 px-4 py-2 font-semibold">
                    Over 2.5
                  </td>
                  <td className="border border-gray-400 px-4 py-2 font-semibold">
                    1.94
                  </td>
                </tr>
              </tbody>
            </table>

            <table className="w-full md:w-[50rem] border border-gray-700 mb-4">
              <thead className="bg-green-500">
                <tr>
                  <th className="border border-gray-400 px-4 py-2 font-bold text-left">
                    Monday 16.12.24
                  </th>
                  <th className="border border-gray-400 px-4 py-2 font-semibold text-left">
                    Tips
                  </th>
                  <th className="border border-gray-400 px-4 py-2 font-semibold text-left">
                    Odd
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="hover:bg-gray-100">
                  <td className="border border-gray-400 px-4 py-2 font-semibold">
                    Braga vs Famalicao
                  </td>
                  <td className="border border-gray-400 px-4 py-2 font-semibold">
                    Over 2.5
                  </td>
                  <td className="border border-gray-400 px-4 py-2 font-semibold">
                    1.80
                  </td>
                </tr>
                <tr className="hover:bg-gray-100">
                  <td className="border border-gray-400 px-4 py-2 font-semibold">
                    {" "}
                    Bournemouth vs West Ham
                  </td>
                  <td className="border border-gray-400 px-4 py-2 font-semibold">
                    1{" "}
                  </td>
                  <td className="border border-gray-400 px-4 py-2 font-semibold">
                    1.75
                  </td>
                </tr>
                <tr className="hover:bg-gray-100">
                  <td className="border border-gray-400 px-4 py-2 font-semibold">
                    Aalborg vs Silkeborg
                  </td>
                  <td className="border border-gray-400 px-4 py-2 font-semibold">
                    BTS Yes
                  </td>
                  <td className="border border-gray-400 px-4 py-2 font-semibold">
                    1.51
                  </td>
                </tr>
                <tr className="hover:bg-gray-100">
                  <td className="border border-gray-400 px-4 py-2 font-semibold">
                    {" "}
                    Lazio vs Inter
                  </td>
                  <td className="border border-gray-400 px-4 py-2 font-semibold">
                    Over 2.5
                  </td>
                  <td className="border border-gray-400 px-4 py-2 font-semibold">
                    1.94
                  </td>
                </tr>
              </tbody>
            </table>

            <table className="w-full md:w-[50rem] border border-gray-700 mb-4">
              <thead className="bg-green-500">
                <tr>
                  <th className="border border-gray-400 px-4 py-2 font-bold text-left">
                    Monday 16.12.24
                  </th>
                  <th className="border border-gray-400 px-4 py-2 font-semibold text-left">
                    Tips
                  </th>
                  <th className="border border-gray-400 px-4 py-2 font-semibold text-left">
                    Odd
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="hover:bg-gray-100">
                  <td className="border border-gray-400 px-4 py-2 font-semibold">
                    Braga vs Famalicao
                  </td>
                  <td className="border border-gray-400 px-4 py-2 font-semibold">
                    Over 2.5
                  </td>
                  <td className="border border-gray-400 px-4 py-2 font-semibold">
                    1.80
                  </td>
                </tr>
                <tr className="hover:bg-gray-100">
                  <td className="border border-gray-400 px-4 py-2 font-semibold">
                    {" "}
                    Bournemouth vs West Ham
                  </td>
                  <td className="border border-gray-400 px-4 py-2 font-semibold">
                    1{" "}
                  </td>
                  <td className="border border-gray-400 px-4 py-2 font-semibold">
                    1.75
                  </td>
                </tr>
                <tr className="hover:bg-gray-100">
                  <td className="border border-gray-400 px-4 py-2 font-semibold">
                    Aalborg vs Silkeborg
                  </td>
                  <td className="border border-gray-400 px-4 py-2 font-semibold">
                    BTS Yes
                  </td>
                  <td className="border border-gray-400 px-4 py-2 font-semibold">
                    1.51
                  </td>
                </tr>
                <tr className="hover:bg-gray-100">
                  <td className="border border-gray-400 px-4 py-2 font-semibold">
                    {" "}
                    Lazio vs Inter
                  </td>
                  <td className="border border-gray-400 px-4 py-2 font-semibold">
                    Over 2.5
                  </td>
                  <td className="border border-gray-400 px-4 py-2 font-semibold">
                    1.94
                  </td>
                </tr>
              </tbody>
            </table>

            <p className="font-serif text-green-700 text-[1.5rem]">
              Our Achievements
            </p>

            <table className="w-full md:w-[50rem] border border-gray-700 mb-4">
              <thead className="bg-green-500">
                <tr>
                  <th className="border border-gray-400 px-4 py-2 font-bold text-left">
                    Monday 16.12.24
                  </th>
                  <th className="border border-gray-400 px-4 py-2 font-semibold text-left">
                    Tips
                  </th>
                  <th className="border border-gray-400 px-4 py-2 font-semibold text-left">
                    Odd
                  </th>
                  <th className="border border-gray-400 px-4 py-2 font-semibold text-left">
                    Thumbs up
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="hover:bg-gray-100">
                  <td className="border border-gray-400 px-4 py-2 font-semibold">
                    Braga vs Famalicao
                  </td>
                  <td className="border border-gray-400 px-4 py-2 font-semibold">
                    Over 2.5
                  </td>
                  <td className="border border-gray-400 px-4 py-2 font-semibold">
                    1.80
                  </td>
                  <td className="border border-gray-400 text-3xl text-center">
                    &#128077;
                  </td>
                </tr>
                <tr className="hover:bg-gray-100">
                  <td className="border border-gray-400 px-4 py-2 font-semibold">
                    {" "}
                    Bournemouth vs West Ham
                  </td>
                  <td className="border border-gray-400 px-4 py-2 font-semibold">
                    1{" "}
                  </td>
                  <td className="border border-gray-400 px-4 py-2 font-semibold">
                    1.75
                  </td>
                  <td className="border border-gray-400 text-3xl text-center">
                    &#128077;
                  </td>
                </tr>
                <tr className="hover:bg-gray-100">
                  <td className="border border-gray-400 px-4 py-2 font-semibold">
                    Aalborg vs Silkeborg
                  </td>
                  <td className="border border-gray-400 px-4 py-2 font-semibold">
                    BTS Yes
                  </td>
                  <td className="border border-gray-400 px-4 py-2 font-semibold">
                    1.51
                  </td>
                  <td className="border border-gray-400 text-3xl text-center">
                    &#128077;
                  </td>
                </tr>
                <tr className="hover:bg-gray-100">
                  <td className="border border-gray-400 px-4 py-2 font-semibold">
                    {" "}
                    Lazio vs Inter
                  </td>
                  <td className="border border-gray-400 px-4 py-2 font-semibold">
                    Over 2.5
                  </td>
                  <td className="border border-gray-400 px-4 py-2 font-semibold">
                    1.94
                  </td>
                  <td className="border border-gray-400 text-3xl text-center">
                    &#128077;
                  </td>
                </tr>
              </tbody>
            </table>

            <table className="w-full md:w-[50rem] border border-gray-700 mb-4">
              <thead className="bg-green-500">
                <tr>
                  <th className="border border-gray-400 px-4 py-2 font-bold text-left">
                    Monday 16.12.24
                  </th>
                  <th className="border border-gray-400 px-4 py-2 font-semibold text-left">
                    Tips
                  </th>
                  <th className="border border-gray-400 px-4 py-2 font-semibold text-left">
                    Odd
                  </th>
                  <th className="border border-gray-400 px-4 py-2 font-semibold text-left">
                    Thumbs up
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="hover:bg-gray-100">
                  <td className="border border-gray-400 px-4 py-2 font-semibold">
                    Braga vs Famalicao
                  </td>
                  <td className="border border-gray-400 px-4 py-2 font-semibold">
                    Over 2.5
                  </td>
                  <td className="border border-gray-400 px-4 py-2 font-semibold">
                    1.80
                  </td>
                  <td className="border border-gray-400 text-3xl text-center">
                    &#128077;
                  </td>
                </tr>
                <tr className="hover:bg-gray-100">
                  <td className="border border-gray-400 px-4 py-2 font-semibold">
                    {" "}
                    Bournemouth vs West Ham
                  </td>
                  <td className="border border-gray-400 px-4 py-2 font-semibold">
                    1{" "}
                  </td>
                  <td className="border border-gray-400 px-4 py-2 font-semibold">
                    1.75
                  </td>
                  <td className="border border-gray-400 text-3xl text-center">
                    &#128077;
                  </td>
                </tr>
                <tr className="hover:bg-gray-100">
                  <td className="border border-gray-400 px-4 py-2 font-semibold">
                    Aalborg vs Silkeborg
                  </td>
                  <td className="border border-gray-400 px-4 py-2 font-semibold">
                    BTS Yes
                  </td>
                  <td className="border border-gray-400 px-4 py-2 font-semibold">
                    1.51
                  </td>
                  <td className="border border-gray-400 text-3xl text-center">
                    &#128077;
                  </td>
                </tr>
                <tr className="hover:bg-gray-100">
                  <td className="border border-gray-400 px-4 py-2 font-semibold">
                    {" "}
                    Lazio vs Inter
                  </td>
                  <td className="border border-gray-400 px-4 py-2 font-semibold">
                    Over 2.5
                  </td>
                  <td className="border border-gray-400 px-4 py-2 font-semibold">
                    1.94
                  </td>
                  <td className="border border-gray-400 text-3xl text-center">
                    &#128077;
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div class="advertisement w-full bg-blue-300 p-4 hidden md:block">
            <a href="https://your-ad-link.com" target="_blank">
              <img
                src="https://via.placeholder.com/728x90?text=Advertisement"
                alt="Advertisement"
                class="w-full h-auto"
              />
            </a>
          </div>
        </div>
        <div class="advertisement w-full bg-blue-300 p-4 ">
          <a href="https://your-ad-link.com" target="_blank">
            <img
              src="https://via.placeholder.com/728x90?text=Advertisement"
              alt="Advertisement"
              class="w-full h-auto"
            />
          </a>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Home;

import React from "react";

function OddProps(props) {
  return (
    <>
      <div className="">
        <table className="w-full md:w-[40rem] border border-gray-700 mb-4">
          <thead className="bg-green-500">
            <tr>
              <th className="border border-gray-400 px-4 py-2 font-bold text-left"> 
                {props.dayTime}
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
                {props.game1}
              </td>
              <td className="border border-gray-400 px-4 py-2 font-semibold">
                {props.tip1}
              </td>
              <td className="border border-gray-400 px-4 py-2 font-semibold">
                {props.odd1}
              </td>
            </tr>
            <tr className="hover:bg-gray-100">
              <td className="border border-gray-400 px-4 py-2 font-semibold">
                {" "}
                {props.game2}
              </td>
              <td className="border border-gray-400 px-4 py-2 font-semibold">
                {props.tip2}
              </td>
              <td className="border border-gray-400 px-4 py-2 font-semibold">
                {props.odd2}
              </td>
            </tr>
            <tr className="hover:bg-gray-100">
              <td className="border border-gray-400 px-4 py-2 font-semibold">
                {props.game3}
              </td>
              <td className="border border-gray-400 px-4 py-2 font-semibold">
                {props.tip3}
              </td>
              <td className="border border-gray-400 px-4 py-2 font-semibold">
                {props.odd3}
              </td>
            </tr>
            <tr className="hover:bg-gray-100">
              <td className="border border-gray-400 px-4 py-2 font-semibold">
                {" "}
                {props.game4}
              </td>
              <td className="border border-gray-400 px-4 py-2 font-semibold">
                {props.tip4}
              </td>
              <td className="border border-gray-400 px-4 py-2 font-semibold">
                {props.odd4}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}

export default OddProps;

import React from "react";
import OddProps from "./components/OddProps";

function Odds() {
  const weekOdds = [
    {
      id: 1,
      dayTime: "Monday 16/12/2024",
      game1: "Braga vs Famalicao",
      tip1: "Over 2.5",
      odd1: "1.80",
      game2: "Bournemouth vs West Ham",
      tip2: "1",
      odd2: "1.75",
      game3: "Aalborg vs Silkeborg",
      tip3: "BTS Yes",
      odd3: "1.41",
      game4: "Lazio vs Inter",
      tip4: "Over 2.5",
      odd4: "1.93",
    },
    {
      id: 2,
      dayTime: "Tuesday 17/12/2024",
      game1: "Braga vs Famalicao",
      tip1: "Over 2.5",
      odd1: "1.80",
      game2: "Bournemouth vs West Ham",
      tip2: "1",
      odd2: "1.75",
      game3: "Aalborg vs Silkeborg",
      tip3: "BTS Yes",
      odd3: "1.41",
      game4: "Lazio vs Inter",
      tip4: "Over 2.5",
      odd4: "1.94",
    },
    {
      id: 3,
      dayTime: "Tuesday 17/12/2024",
      game1: "Braga vs Famalicao",
      tip1: "Over 2.5",
      odd1: "1.80",
      game2: "Bournemouth vs West Ham",
      tip2: "1",
      odd2: "1.75",
      game3: "Aalborg vs Silkeborg",
      tip3: "BTS Yes",
      odd3: "1.41",
      game4: "Lazio vs Inter",
      tip4: "Over 2.5",
      odd4: "1.90",
    },
    {
      id: 4,
      dayTime: "Tuesday 17/12/2024",
      game1: "Braga vs Famalicao",
      tip1: "Over 2.5",
      odd1: "1.80",
      game2: "Bournemouth vs West Ham",
      tip2: "1",
      odd2: "1.75",
      game3: "Aalborg vs Silkeborg",
      tip3: "BTS Yes",
      odd3: "1.41",
      game4: "Lazio vs Inter",
      tip4: "Over 2.5",
      odd4: "1.92",
    },
    {
      id: 5,
      dayTime: "Tuesday 17/12/2024",
      game1: "Braga vs Famalicao",
      tip1: "Over 2.5",
      odd1: "1.80",
      game2: "Bournemouth vs West Ham",
      tip2: "1",
      odd2: "1.75",
      game3: "Aalborg vs Silkeborg",
      tip3: "BTS Yes",
      odd3: "1.41",
      game4: "Lazio vs Inter",
      tip4: "Over 2.5",
      odd4: "1.92",
    },
    {
      id: 6,
      dayTime: "Tuesday 17/12/2024",
      game1: "Braga vs Famalicao",
      tip1: "Over 2.5",
      odd1: "1.80",
      game2: "Bournemouth vs West Ham",
      tip2: "1",
      odd2: "1.75",
      game3: "Aalborg vs Silkeborg",
      tip3: "BTS Yes",
      odd3: "1.41",
      game4: "Lazio vs Inter",
      tip4: "Over 2.5",
      odd4: "1.92",
    },
    {
      id: 7,
      dayTime: "Tuesday 17/12/2024",
      game1: "Braga vs Famalicao",
      tip1: "Over 2.5",
      odd1: "1.80",
      game2: "Bournemouth vs West Ham",
      tip2: "1",
      odd2: "1.75",
      game3: "Aalborg vs Silkeborg",
      tip3: "BTS Yes",
      odd3: "1.41",
      game4: "Lazio vs Inter",
      tip4: "Over 2.5",
      odd4: "1.92",
    },
    {
      id: 8,
      dayTime: "Tuesday 17/12/2024",
      game1: "Braga vs Famalicao",
      tip1: "Over 2.5",
      odd1: "1.80",
      game2: "Bournemouth vs West Ham",
      tip2: "1",
      odd2: "1.75",
      game3: "Aalborg vs Silkeborg",
      tip3: "BTS Yes",
      odd3: "1.41",
      game4: "Lazio vs Inter",
      tip4: "Over 2.5",
      odd4: "1.92",
    },
  ];
  
  return (
    <div className="flex flex-wrap gap-3">
      {weekOdds.map((pred) => {
        return (
          <OddProps
            key={pred.id}
            dayTime={pred.dayTime}
            game1={pred.game1}
            tip1={pred.tip1}
            odd1={pred.odd1}
            game2={pred.game2}
            tip2={pred.tip2}
            odd2={pred.odd2}
            game3={pred.game3}
            tip3={pred.tip3}
            odd3={pred.odd3}
            game4={pred.game4}
            tip4={pred.tip4}
            odd4={pred.odd4}
          />
        );
      })}
    </div>
  );
  
}

export default Odds;

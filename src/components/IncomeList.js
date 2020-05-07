import React, { useContext } from "react";

import { GlobalContext } from "../context/GlobalState";
import { IconContext } from "react-icons";

import IncomeTransaction from "./IncomeTransaction";

const IncomeList = () => {
  const { incomeTransactions } = useContext(GlobalContext);

  console.log(incomeTransactions);

  return (
    <IconContext.Provider value={{ color: "#343a40", size: "24px" }}>
      <ul className="p-0 m-0">
        {incomeTransactions.map((incomeTransaction) => {
          return (
            <IncomeTransaction
              key={incomeTransaction.id}
              incomeTransaction={incomeTransaction}
            />
          );
        })}
      </ul>
    </IconContext.Provider>
  );
};

export default IncomeList;

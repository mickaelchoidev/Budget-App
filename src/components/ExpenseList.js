import React, { useContext } from "react";

import { GlobalContext } from "../context/GlobalState";
import { IconContext } from "react-icons";

import ExpenseTransaction from "./ExpenseTransaction";

const ExpenseList = () => {
  const { expenseTransactions } = useContext(GlobalContext);

  console.log(expenseTransactions);

  return (
    <IconContext.Provider value={{ color: "#343a40", size: "24px" }}>
      <ul className="p-0 m-0">
        {expenseTransactions.map((expenseTransaction) => {
          return (
            <ExpenseTransaction
              key={expenseTransaction.id}
              expenseTransaction={expenseTransaction}
            />
          );
        })}
      </ul>
    </IconContext.Provider>
  );
};

export default ExpenseList;

import React, { useContext } from "react";

import { GlobalContext } from "../context/GlobalState";

import { MdDelete } from "react-icons/md";

const ExpenseTransaction = (props) => {
  const { deleteTransaction } = useContext(GlobalContext);

  const expenseTransaction = props.expenseTransaction;
  return (
    <li className="container-fluid p-0 m-0">
      <div className="row px-3 py-1 m-0 justify-content-between align-items-center">
        <div className="col px-1 py-0 pt-0 m-0">
          {expenseTransaction.expenseName}
        </div>
        <div className="col-5 px-1 py-0 pt-0 m-0 text-right">
          - {expenseTransaction.expenseAmount} €
        </div>
        <div className="col-2 px-1 py-0 pt-0 m-0 text-right align-middle">
          <button
            type="button"
            className="btn btn-sm m-0 p-0"
            onClick={() => deleteTransaction(props.expenseTransaction.id)}
          >
            <MdDelete />
          </button>
        </div>
      </div>
    </li>
  );
};

export default ExpenseTransaction;

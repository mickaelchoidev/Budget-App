import React from "react";

import { MdDelete } from "react-icons/md";

const ExpenseTransaction = (props) => {
  const expenseTransaction = props.expenseTransaction;
  return (
    <li className="container-fluid p-0 m-0">
      <div className="row px-3 py-1 m-0 justify-content-between align-items-center">
        <div className="col px-1 py-0 pt-0 m-0">
          {expenseTransaction.expenseName}
        </div>
        <div className="col-5 px-1 py-0 pt-0 m-0 text-right">
          + {expenseTransaction.expenseAmount} €
        </div>
        <div className="col-2 px-1 py-0 pt-0 m-0 text-right align-middle">
          <button type="button" className="btn btn-sm m-0 p-0">
            <MdDelete />
          </button>
        </div>
      </div>
    </li>
  );
};

export default ExpenseTransaction;

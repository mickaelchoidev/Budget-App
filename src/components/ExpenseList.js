import React from "react";

import { IconContext } from "react-icons";
import { MdDelete } from "react-icons/md";

const ExpenseList = () => {
  return (
    <IconContext.Provider value={{ color: "#343a40", size: "1.5rem" }}>
      <ul className="p-0 m-0">
        <li className="container-fluid p-0 m-0">
          <div className="row px-3 py-1 m-0 justify-content-between align-items-center">
            <div className="col px-1 py-0 pt-0 m-0">rent</div>
            <div className="col-5 px-1 py-0 pt-0 m-0">- 1000 €</div>
            <div className="col-1 px-1 py-0 pt-0 m-0 text-right align-middle">
              <button type="button" className="btn btn-sm m-0 p-0">
                <MdDelete />
              </button>
            </div>
          </div>
        </li>
      </ul>
    </IconContext.Provider>
  );
};

export default ExpenseList;

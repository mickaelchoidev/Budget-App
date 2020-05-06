import React from "react";

import { IconContext } from "react-icons";
import { FaFacebookSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";
import { FaGooglePlusSquare } from "react-icons/fa";

const Footer = () => {
  return (
    <IconContext.Provider value={{ color: "white", size: "1.5rem" }}>
      <div
        className="container-fluid px-0 p-0 m-0 d-flex flex-column align-items-center bg-dark text-light"
        id="footer"
      >
        <div className="text-center mt-2">
          <a href="#" className="btn-floating p-1 mx-3 mx-sm-5">
            <FaFacebookSquare />
          </a>

          <a href="#" className="btn-floating p-1 mx-3 mx-sm-5">
            <FaLinkedin />
          </a>

          <a href="#" className="btn-floating p-1 mx-3 mx-sm-5">
            <FaGithubSquare />
          </a>

          <a href="#" className="btn-floating p-1 mx-3 mx-sm-5">
            <FaGooglePlusSquare />
          </a>
        </div>

        <div className="w-50 row p-0 mx-0 my-2 justify-content-center">
          <h5 className="col-sm-7 text-center text-md-left p-0 m-0">
            Budget App
            <span className="font-italic mx-2">
              <small>designed by</small>
            </span>
            Mickael Choi
          </h5>
          <h5 className="col-sm-5 text-center text-md-right p-0 m-0">
            © 2020 Copyright
          </h5>
        </div>
      </div>
    </IconContext.Provider>
  );
};

export default Footer;

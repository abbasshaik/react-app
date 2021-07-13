import React from "react";

const NavBar = ({ totalCounter }) => {
  return (
    <React.Fragment>
      <nav className="navbar navbar-light bg-light">
        <div className="container-fluid">
          <span className="navbar-brand mb-0 h1">
            Cart
            <span
              style={{ backgroundColor: "grey" }}
              className="badge badge-pill badge-secondary m-2"
            >
              {totalCounter}
            </span>
          </span>
        </div>
      </nav>
      <main className="container"></main>
    </React.Fragment>
  );
};

export default NavBar;

import React from "react";
import { Link } from "react-router-dom";

function Navbar({login}) {
  return (
    <div>
      <nav class="navbar bg-dark navbar-expand-lg " data-bs-theme="dark">
        <div class="container-fluid">
          <Link class="navbar-brand" to="/">
            BAZAR.in
          </Link>

          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav">
              <form class="d-flex" role="search">
                <input
                  class="form-control me-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
                <button class="btn btn-outline-success" type="submit">
                  Search
                </button>
              </form>  
              <Link class="nav-link " aria-current="page" to="/watches">
                Watches
              </Link>
              <Link class="nav-link" to="/counter">
                Counter
              </Link>
              <Link class="nav-link" to="/logIn">

                <strong className="small " onClick={login}>Hello,sign in </strong>
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;

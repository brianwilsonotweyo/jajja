import React from "react";

function Nav() {
  return (
    <div>
      <nav class="navbar navbar-default navbar-trans navbar-expand-lg fixed-top">
        <div class="container">
          <button
            class="navbar-toggler collapsed"
            type="button"
            data-toggle="collapse"
            data-target="#navbarDefault"
            aria-controls="navbarDefault"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
          <a class="navbar-brand text-brand" href="#">
            JAJJA<span class="color-b">WALU</span>
          </a>
          <button
            type="button"
            class="btn btn-link nav-search navbar-toggle-box-collapse d-md-none"
            data-toggle="collapse"
            data-target="#navbarTogglerDemo01"
            aria-expanded="false"
          >
            <span class="fa fa-search" aria-hidden="true"></span>
          </button>
          <div
            class="navbar-collapse collapse justify-content-center"
            id="navbarDefault"
          >
            <ul class="navbar-nav">
              <li class="nav-item">
                <a class="nav-link active" href="#">
                  Home
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  JAJJAWALU
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  VOODOO
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  SPELLS
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  CONTACT ME
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  +256709916366
                </a>
              </li>
            </ul>
          </div>
          <button
            type="button"
            class="btn btn-b-n navbar-toggle-box-collapse d-none d-md-block"
            data-toggle="collapse"
            data-target="#navbarTogglerDemo01"
            aria-expanded="false"
          >
            <span class="fa fa-search" aria-hidden="true"></span>
          </button>
        </div>
      </nav>
    </div>
  );
}

export default Nav;

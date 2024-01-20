import React from "react";
import "./Main.css";

function Main() {
  return (
    <>
      <div>
        <div>
          <nav>
            <div className="nav-bar1">
              <img
                class="navbar-logo"
                src="https://www.sunnystateagency.com/icons/SSA-logo.svg"
                alt=""
              />
            </div>
            <div className="nav-bar">
              <a href="#">WHO ARE WE</a>
              <a href="#">CREATORS</a>
              <a href="#">SERVICES</a>
              <button>GET IN TOUCH</button>
            </div>
          </nav>
        </div>
        <div className="headingTab">
          <div className="heading">
            <span>We Optimize & Monetize </span>
            <span>Your Existing Content Using </span>
            <span> Data-Driven Technology</span>
          </div>
          <p>
            We are experts in optimizing, localizing, and monetizing your
            existing content and unlocking your full potential with no
            additional work involved on your end.
          </p>
        </div>
      </div>
    </>
  );
}

export default Main;

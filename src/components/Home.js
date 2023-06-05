import React from "react";
import "./Home.css";

function Home() {
  return (
    <>
      <div className="bg-image">
        <div className="bg-navbar">
          <div className="bg-logo"></div>
          <div className="bg-nav">
            <a className="bg-events" href="#">
              Events
            </a>
            <a className="bg-events" href="#">
              Create New Event
            </a>
            <button className="bg-btn">Upgrade</button>
            <span style={{color:'white'}}>|</span>
            <a className="bg-sign-up" href="#">
              Sign up
            </a>
          </div>
        </div>
        <div className="bg-text">
        <h1 className="bg-title">
          Life Changing Opportunity <br/> could be Just ONE Event Away
        </h1>
        <p className="bg-para">
          The World needs to Know your Message or You need the World To know
          your Message. Don’t Hold Back! It will change Lives. Get Started!
        </p>
        <button className="bg-button">See how it works</button>
      </div>
      </div>
     
    </>
  );
}

export default Home;
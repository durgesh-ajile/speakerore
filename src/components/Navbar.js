import React from 'react'

const Navbar = () => {
  return (
    <div>
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
    </div>
  )
}

export default Navbar

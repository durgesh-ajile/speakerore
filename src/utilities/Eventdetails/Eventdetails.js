import React, { useState } from "react";
import "./Eventdetails.css";

const Eventdetails = ({event , setEvent , setOrganise}) => {
  const [left, setLeft] = useState(true);

  const handleClick = ()=>{
    setEvent(false)
    setOrganise(true);
  }

  return (
    <div className="listevent-container">
     

      <div>
        
        <div>
          <form>
            <div className="input-details">
              <label>Title of Event</label>
              <input type="text" placeholder="Enter the title of event" required/>
            </div>

            <div className="input-details">
              <label>Short description Of the event</label>
              <textarea placeholder="A very short one line description of the event here.." required/>
            </div>

            <div className="input-details">
              <label>Detail description of the event</label>
              <textarea placeholder="Type here" required/>
            </div>

            <div className="input-details">
              <label>Event website URL</label>
              <input type="text" required/>
            </div>

            <div className="double">
              <div className="input-details">
                <label>Mode</label>
                <select>
                  <option>Online Event</option>
                  <option>Offline Event</option>
                </select>
              </div>

              <div className="input-details">
                <label>Engagement Team</label>
                <select>
                  <option>Online Event</option>
                  <option>Offline Event</option>
                </select>
              </div>
            </div>

            <div className="double">
              <div className="input-details">
                <label>Event Type</label>
                <select>
                  <option>Employee engagement</option>
                  <option> Event</option>
                </select>
              </div>

              <div className="input-details">
                <label> Audience Type</label>
                <select>
                  <option> Student</option>
                  <option> Business Man</option>
                </select>
              </div>
            </div>

            <div className="double">
              <div className="input-details">
                <label>Audience Size</label>
                <select>
                  <option> 100</option>
                  <option> 200</option>
                  <option> 400</option>
                  <option> 500</option>
                  <option> 700</option>
                  <option> 1000</option>
                </select>
              </div>

              <div className="input-details">
                <label>Cateogary</label>
                <select>
                  <option>Business </option>
                  <option> Musician</option>
                </select>
              </div>
            </div>

            <div className="input-details">
              <label>Location</label>
              <input type="text" placeholder="Type here" required/>
            </div>

            <div className="double">
              <div className="input-details">
                <label>City</label>
                <input type="text" placeholder="Type here" required/>
              </div>

              <div className="input-details">
                <label>Pin Code</label>
                <input type="text" placeholder="Type here" required/>
              </div>

              <div className="input-details">
                <label>Country</label>
                <input type="text" placeholder="Type here" required/>
              </div>
            </div>

            {event==true?<div className="card-3 next-button">
              <button type="submit" onClick={handleClick}>Next</button>
            </div>:""}
          </form>

        </div>

       
      </div>
      
    </div>
  );
};

export default Eventdetails;

import React, { useState } from "react";
import "./profile.css";
import { MdLocationOn } from "react-icons/md";
import { MdWatchLater } from "react-icons/md";
import { IoMdLogOut } from "react-icons/io";
const data = {
  name: "Divya Devendar",
  email: "example123@gmail.com",
};

const cardData = [
    {
        event_catogary: "Education",
        organizer: "Indian Business School",
        location: "Hyderabad",
        event_type: "Online Event",
        date: "Jan 2 , 2023 | 12:31 pm",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque sint consectetur nemo volup",
      },
      {
        event_catogary: "Education",
        organizer: "Indian Business School",
        location: "Hyderabad",
        event_type: "Online Event",
        date: "Jan 2 , 2023 | 12:31 pm",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque sint consectetur nemo volup",
      },
      {
        event_catogary: "Education",
        organizer: "Indian Business School",
        location: "Hyderabad",
        event_type: "Online Event",
        date: "Jan 2 , 2023 | 12:31 pm",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque sint consectetur nemo volup",
      },
      {
        event_catogary: "Education",
        organizer: "Indian Business School",
        location: "Hyderabad",
        event_type: "Online Event",
        date: "Jan 2 , 2023 | 12:31 pm",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque sint consectetur nemo volup",
      },
      {
        event_catogary: "Education",
        organizer: "Indian Business School",
        location: "Hyderabad",
        event_type: "Online Event",
        date: "Jan 2 , 2023 | 12:31 pm",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque sint consectetur nemo volup",
      },
  {
    event_catogary: "Education",
    organizer: "Indian Business School",
    location: "Hyderabad",
    event_type: "Online Event",
    date: "Jan 2 , 2023 | 12:31 pm",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque sint consectetur nemo volup",
  },
  {
    event_catogary: "Education",
    organizer: "Indian Business School",
    location: "Hyderabad",
    event_type: "Online Event",
    date: "Jan 2 , 2023 | 12:31 pm",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque sint consectetur nemo volup",
  },
  {
    event_catogary: "Education",
    organizer: "Indian Business School",
    location: "Hyderabad",
    event_type: "Online Event",
    date: "Jan 2 , 2023 | 12:31 pm",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque sint consectetur nemo volup",
  },
];
const Profile = () => {
  const [subs, setSubs] = useState(false);

  const handlesubs = () => {
    setSubs(true);
  };
  const handleevent = () => {
    setSubs(false);
  };

  return (
    <div className="profile-container">
      <div className="left-container">
        <div className="profile-pic">
          <div className="img">{data.name[0]}</div>
          <div className="name-deatils">
            <bold>{data.name}</bold>
            <span>{data.email}</span>
          </div>
        </div>

        <div className="subs-button">
          <div className="subsbutton">
            <button
              onClick={handleevent}
              className={subs == false ? "backgreen" : ""}
            >
              {" "}
              Your Events
            </button>
            <button
              onClick={handlesubs}
              className={subs == true ? "backgreen" : ""}
            >
              Subscription details
            </button>
          </div>
        </div>
        <hr/>
        <div className="logout">
            <IoMdLogOut/>{" "}<span>Logout</span>
        </div>
        
      </div>
      <div className="right-container">
        {subs == false ? (
          <div className="allevent" style={{flexWrap:'wrap'}}>
            {cardData.map((e) => (
              <div className="card" >
                <div className="card-1">
                  <small
                    style={{
                      margin: "20px  0 0 2rem",
                      fontSize: "1rem",
                      fontWeight: "900",
                      color: "green",
                    }}
                  >
                    {e.event_catogary}{" "}
                  </small>
                  <bold>{e.organizer}</bold>
                  <span>{e.location}</span>
                </div>
                <div className="card-2">
                  <small>
                    <MdLocationOn color="grey" size={20} />
                    {e.event_type}
                  </small>
                  <br />
                  <date>
                    {" "}
                    <MdWatchLater size={20} color="grey" />
                    {e.date}
                  </date>
                  <p></p>
                </div>
                <div className="desc">
                  <p>{e.desc}</p>
                </div>
                <div className="card-3">
                  <button>View Details</button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="subs-details">
            <h2>Subscription Details</h2>
            <div>
              <div className="plan-head">
                {" "}
                <span>Subscription Plan</span>
              </div>
              <div className="plan">
                <select>
                  <option>Yearly</option>
                  <option>Half Yearly</option>
                  <option>Monthly</option>
                </select>
              </div>
            </div>

            <div className="billing date">
            <h5>Next Billing Date : 01 Apr 2024</h5>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Profile;

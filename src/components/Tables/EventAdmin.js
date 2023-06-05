import React from 'react'
import { MdLocationOn } from "react-icons/md";
import { MdWatchLater } from "react-icons/md";

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

const EventAdmin = () => {
  return (
    <div>
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
                <div className="card-4">
                  <button>Delete Event</button>
                  <button style={{color:'#24754F', border:'#24754F 1px solid'}}>View Event</button>
                </div>

              </div>
            ))}
          </div>
    </div>
  )
}

export default EventAdmin

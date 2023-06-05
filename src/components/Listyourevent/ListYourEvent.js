import React ,{useState}from "react";
import './listyourevent.css'
import tech from "../../images/tech-support 1.png";
import Eventdetails from "../../utilities/Eventdetails/Eventdetails";
import Organizerdetails from "../../utilities/organizerdeatails/Organizerdetails";
import Preview from "../../utilities/Preview/Preview";
import { Event } from "@mui/icons-material";

const ListYourEvent = () => {
  const [event, setEvent] = useState(true);
  const [organise, setOrganise] = useState(false);
  const [preview, setPreview] = useState(false);

  // className={left == true ? "green" : ""}
  const handleEvent = ()=>{
      setEvent(true);
      setOrganise(false)
      setPreview(false)
  }
  const handleOrganiser = ()=>{
    setEvent(false);
    setOrganise(true)
    setPreview(false)
  }
  const handlePreview = ()=>{
    setEvent(false);
    setOrganise(false)
    setPreview(true)
  }

  return (
    <div>
      <div className="event-logo">
        <div className="event-img">
          <img src={tech} />
          <h2>List your Event</h2>
        </div>
        <div className="list-event">
          <span>
            Get the best Industry experts on your stage for your audience
            without any middlemen. Any <br />
            niche, any location, any occasion. Interviews, Keynotes, Emcees,
            Trainers, Workshops,
            <br /> Webinars, Seminars, Collaborations or more. We have got you
            covered.
          </span>
        </div>
      </div>
      <div className="swapbutton event-button">
        <button onClick={handleEvent} className={event==true ? "green" : ""}>
          1. Event details
        </button>
        <button onClick={handleOrganiser} className={organise==true ? "green" : ""}>
          2. Organizer details
        </button>
        <button onClick={handlePreview} className={preview==true ? "green" : ""}>3. Preview</button>
      </div>
      {/* ............. */}


      {/* <Eventdetails/> */}

      {/* <Organizerdetails/> */}

        {event==true? <Eventdetails event={event} setEvent={setEvent} setOrganise={setOrganise}/> : organise==true?<Organizerdetails organise={organise} setOrganise={setOrganise} setPreview={setPreview} />:<Preview/>}
    </div>
  );
};

export default ListYourEvent;

import React ,{useState}from "react";
import './listyourevent.css'
import tech from "../../images/tech-support 1.png";
import Eventdetails from "../../utilities/Eventdetails/Eventdetails";
import Organizerdetails from "../../utilities/organizerdeatails/Organizerdetails";
import Preview from "../../utilities/Preview/Preview";
import { Event } from "@mui/icons-material";
import pinkback from '../../images/Vector 9.png'
import orangeback from '../../images/Vector 10.png'

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
        <div className="list-img">
        <img id='orange-list' src={orangeback} />
          <img id='pink-list' src={pinkback} />
          <img id='man-img' src={tech} />
        </div>
          <h2>List your Event</h2>
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
      <div className="listbutton event-button">
        <button onClick={handleEvent} id={event==true ? "green" : ""}>
          1. Event details
        </button>
        <button onClick={handleOrganiser} id={organise==true ? "green" : ""}>
          2. Organizer details
        </button>
        <button onClick={handlePreview} id={preview==true ? "green" : ""}>3. Preview</button>
      </div>
      {/* ............. */}


      {/* <Eventdetails/> */}

      {/* <Organizerdetails/> */}

        {event==true? <Eventdetails event={event} setEvent={setEvent} setOrganise={setOrganise}/> : organise==true?<Organizerdetails organise={organise} setOrganise={setOrganise} setPreview={setPreview} />:<Preview/>}
    </div>
  );
};

export default ListYourEvent;

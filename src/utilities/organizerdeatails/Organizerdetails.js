import React from "react";

const Organizerdetails = ({organise , setOrganise ,setPreview}) => {

    const handleClick = ()=>{
        setOrganise(false)
        setPreview(true)
    }
  return (
    <div>
      <form>
        <div className="input-details">
          <label>Organizer Name</label>
          <input type="text" placeholder="Enter the Organizer Name" />
        </div>

        <div className="double">
          <div className="input-details">
            <label>Organizer Email</label>
            <input type="text" required />
          </div>

          <div className="input-details">
            <label>Organizer Contact Number</label>
            <input type="number" required />
          </div>
        </div>

        <div className="input-details">
          <label>Tags</label>
          <span>Improve discoverability of your event by adding relevent to subject matter.</span>
          <textarea type="text" placeholder="Type and press enter to add a tag"/>
        </div>

        {organise==true?<div className="card-3 next-button">
              <button onClick={handleClick}>Next</button>
            </div>:""}

      </form>
    </div>
  );
};

export default Organizerdetails;

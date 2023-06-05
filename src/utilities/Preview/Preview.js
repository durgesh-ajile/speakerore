
import React from 'react'
import Eventdetails from '../Eventdetails/Eventdetails'
import Organizerdetails from '../organizerdeatails/Organizerdetails'

const Preview = () => {
    return (
      <div >
      <Eventdetails />
      <div style={{width:"47%" ,textAlign:"center"}}>
      <h1 >Organizer Details</h1></div>
      <Organizerdetails/>
  
      <div className="card-3 next-button" style={{width:"85%" ,textAlign:"right"}}>
                <button>Submit</button>
              </div>
      </div>
    )
  }
  
  export default Preview
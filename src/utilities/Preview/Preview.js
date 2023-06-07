
import React from 'react'
import Eventdetails from '../Eventdetails/Eventdetails'
import Organizerdetails from '../organizerdeatails/Organizerdetails'

const Preview = () => {
    return (
      <div >
      <Eventdetails />
      <div style={{marginLeft:'16.5%', color:'#4D4B4B'}}>
      <h1 >Organizer Details</h1></div>
      <Organizerdetails/>
  
      <div className="card-3 next-button" style={{width:"85%" ,textAlign:"right"}}>
                <button>Submit</button>
              </div>
      </div>
    )
  }
  
  export default Preview
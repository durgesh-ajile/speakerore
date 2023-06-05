import React, {useState} from 'react'
import UserTable from '../../components/Tables/UserTable'
import './Admin.css'
import { IoMdLogOut } from "react-icons/io";

import TeamMembers from '../../components/Tables/TeamMembers'
import CouponTable from '../../components/Tables/CouponTable'
import EventAdmin from '../../components/Tables/EventAdmin';
const data = {
    name: "Divya Devendar",
    email: "example123@gmail.com",
  };
  

const Admin = () => {

    const [event, setevent] = useState(true);
    const [user, setUser] = useState(false);
    const [members, setMembers] = useState(false);
    const [coupon, setCoupon] = useState(false);

  const handleUser = () => {
    setUser(true);
    setevent(false)
    setCoupon(false)
    setMembers(false)
  };
  const handleMember = () => {
    setUser(false);
    setevent(false)
    setCoupon(false)
    setMembers(true)
  };
  const handleEvent = () => {
    setUser(false);
    setevent(true)
    setCoupon(false)
    setMembers(false)
  };
  const handleCoupon = () => {
    setUser(false);
    setevent(false)
    setCoupon(true)
    setMembers(false)
  };
  return (
    <div className='admin'>
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
              onClick={handleEvent}
              className={event == true ? "backgreen" : ""}
            >
              {" "}
              Events
            </button>
            <button
              onClick={handleUser}
              className={user == true ? "backgreen" : ""}
            >
              Users
            </button>
            <button
              onClick={handleMember}
              className={members == true ? "backgreen" : ""}
            >
              Team Members
            </button>
            <button
              onClick={handleCoupon}
              className={coupon == true ? "backgreen" : ""}
            >
              Coupons
            </button>
          </div>
        </div>
        <hr/>
        <div className="logout">
            <IoMdLogOut/>{" "}<span>Logout</span>
        </div>
        
      </div>
      <div className='events-content'>
      {event == true ? <EventAdmin/> : ""}
      {user == true ? <UserTable/> : ""}
      {members == true ? <TeamMembers/> : ""}
      {coupon == true ? <CouponTable/> : ""}
      </div>
    </div>
  )
}

export default Admin

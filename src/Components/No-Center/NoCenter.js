import React from 'react'
import {FaRegLightbulb} from 'react-icons/fa'
import './NoCenter.css'
const NoCenter = () =>{
	let currentDate = new Date();
	return(
		<>
		<div className="message-box" style={{ backgroundColor: "red" }}>
          <span className="center-detail">
            Time :{currentDate.getHours() + ":" + currentDate.getMinutes()}
          </span>
          <div>No Vaccine AVAILABLE </div>
        </div>
		<div className="tip-box bg-secondary">
		  <span className="d-inline float-left"><FaRegLightbulb/></span>
          <span className="center-detail">
		     Check between <br/> 6:30am - 8:30am <br/> 5:00pm - 8:00pm <br/> 9:00pm - 10:30pm 
          </span>
        </div>
		</>
	)
}

export default NoCenter
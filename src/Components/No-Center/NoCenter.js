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
		     Check between 5:00 pm - 10:00 pm
          </span>
        </div>
		</>
	)
}

export default NoCenter
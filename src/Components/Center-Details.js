import React from 'react'

const CenterDetails = ({name,address,pincode,vaccine,date}) =>{
  return(
	<div className="message-box" >
	<h3 className="text-dark">AVAILABLE</h3>
	<div className="center-detail">
	  <div>Center Name = {name}</div>
	  <div>Address = {address}</div>
	  <div>Pin code = <span className="bg-light p-1" style={{borderRadius:"10px"}}>{pincode}</span></div>
	  <div>Vaccine = {vaccine}</div>
	  <div>Date = {date}</div>
	</div>
  </div>
  )

}

export default CenterDetails
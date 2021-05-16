import React, { useRef } from 'react'
import {AiFillCopy} from 'react-icons/ai'

const CenterDetails = ({name,address,pincode,vaccine,date}) =>{
  let pinCodeRef = useRef();
  const copyToClipboard = () =>{
	 
	  pinCodeRef.current.style.backgroundColor="yellow";
	  console.log(pinCodeRef.current.select());
	  document.execCommand("Copy")
	 
	 
  }
  return(
	<div className="message-box" >
	<h3 className="text-dark">AVAILABLE</h3>
	<div className="center-detail">
	  <div>Center Name = {name}</div>
	  <div>Address = {address}</div>
	  <div>
	  	 <label> Pin code  </label>
	  	 <div>
		   <input type="text" className=" d-inlinebg-light p-1" style={{width:"60%",borderRadius:"10px"}} ref={pinCodeRef} 			value={pincode}readOnly/>
		  <button className="d-inline text-success bg-dark mx-1" style={{borderRadius:"10px"}} onClick={copyToClipboard}>Copy 	<AiFillCopy/></button>
		 </div>
	  </div>
	   
	  <div>Vaccine = {vaccine}</div>
	  <div>Date = {date}</div>
	</div>
  </div>
  )

}

export default CenterDetails
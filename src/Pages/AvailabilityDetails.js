import React, { useState , useEffect, Component  } from 'react'
import { useHistory } from 'react-router-dom'
import axios from 'axios'
import CenterDetails from '../Components/Center-Details'
import NoCenter from '../Components/No-Center/NoCenter'



let date = new Date();
let currentDate= date.getDate()
let hourHand=date.getHours();
let month=(date.getMonth())+1
if(hourHand>9){
  ++currentDate;
}

const api =
  `https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByDistrict?district_id=770&date=${currentDate}-${month}-2021`;
console.log(currentDate +" - " + month)

  
 const AvailabilityDetails = ()=>{
	const [center,setCenter] = useState([])

	const syncStates = async () => {
		try {
		  const { data } = await axios.get(api, {
			responseType: "application/json"
		  });
		  //console.log(data)
		  if (data.sessions.length) {
			data.sessions = data.sessions.map((center) => {
			  if (center.available_capacity > 0 && center.min_age_limit === 18 ) {
				  setCenter((prevState) => {
				  return prevState.concat(center);
				});
			  }
			});
		  }
		} catch (err) {
		  console.log(err);
		}
	  };

	useEffect(()=>{
		syncStates();
	},[])
	  setTimeout(() => {
		location.reload();
	  }, 10000);
	

	
	return (	
		center.length ? (
			center.map((cntr) => (
			  <CenterDetails 
				key={cntr.center_id}
				name={cntr.name} 
				address={cntr.address} 
				pincode={cntr.pincode} 
				vaccine={cntr.vaccine}
				available_capacity={cntr.available_capacity}
				date={cntr.date}
				/>
				
			))
		  ) 
		  : 
			<NoCenter/>
		  
	)
}

export default AvailabilityDetails
import axios from "axios";
import { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./styles.css";
import CenterDetails from "./Components/Center-Details";
import NoCenter from "./Components/No-Center/NoCenter";
import Footer from "./Components/Footer/Footer";



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
const App = () => {
  const [center, setCenter] = useState([]);

  const syncStates = async () => {
    try {
      const { data } = await axios.get(api, {
        responseType: "application/json"
      });

      if (data.sessions.length) {
        data.sessions = data.sessions.map((center) => {
          if (center.available_capacity > 0 && center.min_age_limit === 18) {
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
  useEffect(() => {
    syncStates();
  }, []);

  setTimeout(() => {
    location.reload();
  }, 10000);
 

  return (
    <>
      <header className="jumbotron ">
        Vaccine Availability for 18+ in Ahmedabad Corporation
      </header>
      <p className="marquee  text-muted">Made By: Mayur keswani</p>
      <section className="main-section">
      {center.length ? (
        center.map((cntr) => (
          <CenterDetails 
            key={cntr.center_id}
            name={cntr.name} 
            address={cntr.address} 
            pincode={cntr.pincode} 
            vaccine={cntr.vaccine}
            date={cntr.date}
            />
            
        ))
      ) : (
        <NoCenter/>
      )}
      </section>
      <Footer/>
    </>
  );
};

export default App;

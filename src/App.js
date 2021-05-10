import axios from "axios";
import { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./styles.css";

const api =
  "https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByDistrict?district_id=770&date=11-05-2021";
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
  let currentDate = new Date();

  return (
    <>
      <header className="jumbotron">
        Vaccine Availability for 18+ in Ahmedabad Corporation
        <p className="marquee text-muted">Made By: Mayur keswani</p>
      </header>

      {center.length ? (
        center.map((cntr) => (
          <div className="message-box" key={cntr.center_id}>
            <h2>AVAILABLE</h2>
            <div className="center-detail">
              <div>Center Name={cntr.name}</div>
              <div>Address={cntr.address}</div>
              <div>Pin code={cntr.pincode}</div>
              <div>Vaccine={cntr.vaccine}</div>
            </div>
          </div>
        ))
      ) : (
        <div className="message-box" style={{ backgroundColor: "red" }}>
          <span className="center-detail">
            Time :{currentDate.getHours() + ":" + currentDate.getMinutes()}
          </span>
          <div>No Vaccine AVAILABLE </div>
        </div>
      )}
      <div className="footer">
        <pre>
          सिमरउ सिमरि सिमरि सुखु पावउ ॥<br /> कलि कलेस तन माहि मिटावउ ॥
        </pre>
      </div>
    </>
  );
};

export default App;

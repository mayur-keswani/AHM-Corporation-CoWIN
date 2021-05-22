import React from "react";
import axios from "axios";
import AvailabilityDetails from "./Pages/AvailabilityDetails";
import Footer from "./Components/Footer/Footer";
import pdf from './Assets/FAQ.docx'
import "bootstrap/dist/css/bootstrap.css";
import "./styles.css";


const App = () => {
  


  return (
    <>
      <header className="jumbotron ">
        <span className="m-0 p-0"> Vaccine Availability for 18+ in Ahmedabad Corporation </span>
      </header>
      <p className="marquee  text-secondary text-muted p-0">Don't refresh manually</p>
      <a className="faq  float-right faq  btn btn-secondary mr-0" href={pdf}>FAQ</a>
      
      <section className="main-section">
      {
        
        <AvailabilityDetails/>
      }
      </section>
      <Footer/>
    </>
  );
};

export default App;

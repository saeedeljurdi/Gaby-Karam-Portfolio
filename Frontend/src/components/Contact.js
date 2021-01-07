import React from "react";
import { useState, useEffect } from "react";
const Contact = () => {

  const [data, setData] = useState([]);

useEffect(() => {
  const fetchData = async () => {

    const response = await fetch('http://localhost:3002/contact');
    const result = await response.json();
    setData([...result]);
  }

  fetchData();
}, []);



  return (
    <div id="contact">
      <h3 className="title">CONTACT</h3>
      <p className="center">
                I HOPE YOU HAD A COOL USER EXPERIENCE
              </p>
              <div className="fixed-contacts">
                <p className="link">Email : <a href="mailto:info@gabykaram.com"> info@gabykaram.com</a> </p>
                <p className="link">Call Gaby: <a href="tel:+961 81 647 748">+961 81 647 748</a></p>
                </div>
                <div className="contacts">
                {data.map(eachData => (
<div key={eachData.id} className="each-contact">
                    <a href={`https://www.${eachData.name}`} target="--blank"> 
                      <img src={`http://localhost:3002/${eachData.logo}`}alt="" className="contact-logo" />
                      </a>
                  </div>
                ))}
              </div>
    </div>
  );
};

export default Contact;

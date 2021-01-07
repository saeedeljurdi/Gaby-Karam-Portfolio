import React, { useState } from "react";


const About = () => {
  const [data, setData] = useState([]);
  React.useEffect(()=>{
    const fetchData = async () => {
      const response = await fetch('http://localhost:3002/about');
      const result = await response.json();
      setData([...result]);
    }
    fetchData();
  })
  
  return (
    <> 
    <div id="about">
      <h3 className="title">ABOUT</h3>
      
        {data.map(eachData => (
          <div className="about-con" key={eachData.id}>
    <h4 className="con-title">{eachData.header}</h4>
            <p className="con-description">{eachData.description} </p>
            </div>
        ))}
         
    
      <div className="red-div"></div>
      </div>
      </>
  );
      
};

export default About;

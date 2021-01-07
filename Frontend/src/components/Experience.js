import React from "react";
import { useEffect , useState} from 'react';
const Experience = () => {
  
  const [data, setData] = useState([]);


useEffect(() => {
  const fetchData = async ()=> {
  const response = await fetch('http://localhost:3002/experience');
    const data = await response.json();
  setData([...data]);
}
fetchData();
}, []);

return (
    <div id="experience">
    <h3 className="title">EXPERIENCE</h3>
    <div className="exp-con">
    {data.map((eachData,index) => (
        <div className="each-exp" key={index}>

            <h3 className="link"><a  href={eachData.link} target="--blank">{eachData.name}</a></h3>
          <img src={`http://localhost:3002/${eachData.img}`} alt="" height="80px"/>

          <div className="exp-intro">
            <p className="pos">{ eachData.position }</p>
            <p className="date">{eachData.place} | {eachData.date}</p>
          </div><br/>
          <p className="exp-desc">
            {eachData.description}
        </p>
          <p className="acc"> Accomplishments : </p>
          {eachData.list.split(',').map((eachLi,index) => (
              <ul className="exp-list" key={index}>
              <li>{eachLi}</li>
              </ul>
            ))}
        </div>
      ) 
      )}

    </div>
    <div className="red-div"></div>
  </div>
    
  );
};

export default Experience;

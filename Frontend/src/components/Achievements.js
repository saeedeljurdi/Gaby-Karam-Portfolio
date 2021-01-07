import React from 'react';
import { useEffect, useState } from 'react';

const Achievements = () => {

    const [data, setData] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch('http://localhost:3002/achievements');
            const result = await response.json();
            setData([...result])
        }
        fetchData();
}, []);



    return ( 
        <div id="achievements">
            <h3 className="title">ACHIEVEMENTS</h3>

            <div className="ach-con">
      {data.map(eachData => (
        <div className="each-ach" key={eachData.id}>
          <h3 className="link">{eachData.name}</h3>
          {/* <p className="img"><img src='http://localhost:3002/Achievements/ga.png' alt="" height="50px"/></p> */}
          <p className="date">{ eachData.date }</p>
          <p className="description">{eachData.description}</p>
          <p className="cred">Credentials : {eachData.credential} </p>

        </div>
      ))}
        </div>
        <div className="red-div"></div>
        </div>
     );
}
 
export default Achievements;
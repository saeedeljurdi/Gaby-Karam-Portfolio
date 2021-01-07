import React from 'react';
import { useEffect, useState } from 'react';


const Education = () => {

    const [data, setData] = useState([]);
    useEffect(() => {
        const fetchData = async () => {

            const response = await fetch('http://localhost:3002/education');
            const result = await response.json();
            setData([...result]);
        }
        fetchData();
    }, []);

    return ( 
        <div id="education">
            <h3 className="title">EDUCATION</h3>
            <div className="ed-con">
            {data.map( (eachData,index) => (
                <div className="each-ed center" key={index} >
                    <h3 className="link">
                       <a href={eachData.link} target="--blank">{eachData.name}</a> 
                    </h3>
                    <p className="date block">{eachData.place} | {eachData.date}</p>
                    <br/>
                    <p className="description block">{ eachData.description }</p>
                </div>
            ))}
            </div>
            <div className="red-div"></div>
        </div>
     );
}
 
export default Education;
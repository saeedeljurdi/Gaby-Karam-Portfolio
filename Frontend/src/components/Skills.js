import React from 'react';
import { useEffect, useState } from 'react';

const Skills = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch('http://localhost:3002/skills');
            const result = await response.json();
            setData([...result]);
        }
        fetchData();
    }, []);
    return ( 
        <div id="skills">
            <h3 className="title">SKILLS</h3>
            <div className="skill">
            {data.map(eachData => (
                <div className="each-skill" key={eachData.id}>
                    <h3 className="skill-name">{eachData.name}</h3>
                    <img src={`http://localhost:3002/${eachData.logo}`} height="65px" alt=""/>
                </div>
            ))}
            </div>
            <div className="red-div"></div>
        </div>
     );
}
 
export default Skills;
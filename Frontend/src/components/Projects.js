import React from 'react';
import {useEffect,useState} from 'react';


const Projects = () => {

  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('http://localhost:3002/projects');
      const result = await response.json();
      setData([...result]);
    }
    fetchData();
  }, []);

  return ( 
    <div id="projects">
      <h3 className="title">PROJECTS</h3>

      <div className="proj-con">
      {data.map(eachData => (
        <div className="each-proj" key={eachData.id}>
          <div className="proj-header center">
            <h3 className="link"><a href={eachData.link} target="--blank">{eachData.name} </a></h3>
            <img src={`http://localhost:3002/${eachData.img}`} height="100px" alt=""/>
          </div>
          <p className="proj-desc">{eachData.description}</p>
          <p className="acc"> Accomplishments : </p>         
            {eachData.accomplishments.split(',').map((eachAcc,index) => (
              <ul className="exp-list" key={index}>
                <li>{eachAcc}</li>
             </ul>
           ))}

        </div>
      ))}
      </div>
      <div className="red-div"></div>
      
    </div>
   );
}
 
export default Projects;
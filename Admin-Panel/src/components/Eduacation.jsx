import React from 'react'
import { useEffect, useState } from 'react';
import Axios from 'axios';


const Education = () => {
    const [data, setData] = useState([]);
    const [render, setRender] = useState(true);
    const [place, setPlace] = useState('');
    const [time, setTime] = useState('');
    const [name, setName] = useState('');
    const [desc, setDesc] = useState('');
    const [link, setLink] = useState('');
        useEffect(() => {
        const fetchData = async () => {

            const response = await fetch('http://localhost:3002/education');
            const result = await response.json();
            setData([...result]);
        }
        fetchData();
    }, [render]);

    const handleDelete = (id) => {
        Axios.delete(`http://localhost:3002/deleteEducation/${id}`)
            .then(res => console.log(res))
            .catch(err => console.log(err));
        const newData = data.filter(eachData => eachData.id !== id);
        setData([...newData]);
        alert('Information was deleted successfully !');
    }

    const handleClick = () => {
        if (name && time && place && link && desc) {
            const incomingData = {
                name, time, place, link, desc
            };
            const newData = [...data, { ...incomingData }];
            setData(newData);
            setName('');
            setLink('');
            setDesc('');
            setTime('');
            setPlace('');
            setRender(!render);
            Axios.post('http://localhost:3002/addEducation', { name: name, link: link, desc: desc, time: time, place: place })
                .then(res => console.log(res))
                .catch(err => console.log(err));
            alert('Information was added successfully !');
        }
    }

    return ( 
        <div id="education">
            {render}
            <h3 className="title">EDUCATION</h3>
            <div className="line s"></div>
            <div className="ed-con">
            {data.map((eachData,index) => (
                <div className="each-ed center" key={index}>
                    <h3 className="link">
                       <a href={eachData.link} target="--blank">{eachData.name}</a> 
                    </h3>
                    <p className="date block">{eachData.place} | {eachData.date}</p>
                    <br/>
                        <p className="description block">{eachData.description}</p>
                    <button type="button" onClick={() => handleDelete(eachData.id)}
                    className="delete"
                    >Delete</button>
        </div>
            ))}
            </div>
            <div className="line l"></div>
            <form className="txt">

                <input type="text" placeholder="University(Company) Name" required
                    onChange={(e) => setName(e.target.value)}
                    value={name}
                /><br />
                  <input type="text" placeholder="University(Company) Link" required
                onChange={(e) => setLink(e.target.value)}
                value={link}
                /><br />
                <input type="text" placeholder="Place" required
                onChange={(e) => setPlace(e.target.value)}
                value={place}
                /><br />
                <input type="text" placeholder="Time(Duration)" required
                onChange={(e) => setTime(e.target.value)}
                value={time}
                /><br />
                 <input type="text" placeholder="Specialty" required
                onChange={(e) => setDesc(e.target.value)}
                value={desc}
                /><br />
                <button className="add" type="button"
                    onClick={()=>handleClick()}
                >
                    Add
                </button>
            </form>
        </div>
     );
}
 
export default Education;
import React from 'react'
import { useEffect, useState } from 'react';
import Axios from 'axios';


const Achievements = () => {
    
    const [data, setData] = useState([]);
    const [name, setName] = useState('');
    const [time, setTime] = useState('');
    const [desc, setDesc] = useState('');
    const [cred, setCred] = useState('');
    const [img, setImg] = useState('');
    const [render, setRender] = useState(true);
    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch('http://localhost:3002/achievements');
            const result = await response.json();
            setData([...result])
        }
        fetchData();
    }, [render]);

    const handleDelete = (id) => {
        Axios.delete(`http://localhost:3002/deleteAchievement/${id}`)
            .then(res => console.log(res))
            .catch(err => console.log(err));
        const newData = data.filter(eachData => eachData.id !== id);
        setData([...newData]);
        alert('Information was deleted successfully !');
    }

    const handleClick = () => {
        if (name && time && desc) {
            const incomingData = { name, time, desc, cred , img};
            setData([...data, { ...incomingData }]);
            setCred('');
            setName('');
            setImg('');
            setTime('');
            setDesc('');
            setRender(!render)
            Axios.post(`http://localhost:3002/addAchievement`,{name:name,time:time,desc:desc,cred:cred,img:img})
                .then(res => console.log(res))
                .catch(err => console.log(err));
            alert('Information was added successfully !');
        }
    }

    return ( 
        <div id="achievements">
            <h3 className="title">ACHIEVEMENTS</h3>
            <div className="line s"></div>
            <div className="ach-con">
      {data.map(eachData => (
          <div className="each-ach" key={eachData.id}>
          <h3 className="link">{eachData.name}</h3>
          {/* <p className="img"><img src='http://localhost:3002/Achievements/ga.png' alt="" height="50px"/></p> */}
          <p className="date">{ eachData.date }</p>
          <p className="description">{eachData.description}</p>
        <p className="cred">Credentials : {eachData.credential} </p>
                 <button type="button" onClick={() => handleDelete(eachData.id)}
                    className="delete"
                    >Delete</button>   
        </div>
      ))}
            </div>
            <div className="line l"></div>
            <form className="txt">

                <input type="text" placeholder="Award Name" required
                    onChange={e => setName(e.target.value)}
                    value={name}
                
                    /><br />
                    <input type="text" placeholder="About the award" required
                    onChange={e => setDesc(e.target.value)}
                    value={desc}
                    
                    /><br />
                    <input type="text" placeholder="Time(Duration)" required
                                     onChange={e => setTime(e.target.value)}
                                     value={time}                 
                    /><br />
                    <input type="text" placeholder="Credentials(optional)"
                                       onChange={e => setCred(e.target.value)}
                                       value={cred}                   
                /><br />
                    <button className="add" type="button"
                      onClick = {()=> handleClick()}  
                    >
                        Add
                    </button>
            </form>
        </div>
     );
}
 
export default Achievements;
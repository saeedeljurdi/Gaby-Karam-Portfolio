import React from 'react'
import { useEffect, useState } from 'react';
import Axios from 'axios';

const About = () => {

    const [data, setData] = useState([]);
    const [header, setHeader] = useState('');
    const [desc, setDesc] = useState('');
    const [newHeader, setNewHeader] = useState('');
    const [toggleRender, setToggleRender] = useState(true);
    const [newDesc, setNewDesc] = useState('');
    
    useEffect(() => {
        console.log('uef');
        const fetchData = async () => {
            const response = await fetch('http://localhost:3002/about');
            const result = await response.json();
            setData([...result]);
        }
        fetchData(); 
    }, [toggleRender]);

    const handleClick = () => {
        if (header && desc) {
            Axios.post('http://localhost:3002/addAbout', { header: header, desc: desc })
                .then(res => console.log(res));
            ;
            const incomingData = { desc, header };
            console.log(incomingData);
            const newData = [...data, { ...incomingData }];
            setData([...newData]);
            setHeader('');
            setDesc('');
            setToggleRender(!toggleRender);
            alert('Information was added successfuly !');
        }
    }
    
    const handleDelete = (id) => {
        Axios.delete(`http://localhost:3002/deleteAbout/${id}`)
            .then(res => console.log(res))
            .catch(err => console.log(err));
        const newData = data.filter(eachData => eachData.id !== id);
        setData([...newData]);
        alert('Information was deleted successfuly !');
    }

    const handleEdit = (id, index) => {
        
        if (!newHeader && !newDesc) {
            alert('No new information was edited');
        } else {
        
            const oldHeader = data[index].header;
            const oldDesc = data[index].description;

            const UpHeader = newHeader || oldHeader;
            const UpDesc = newDesc || oldDesc;
         
            
            Axios.put(`http://localhost:3002/editAbout/${id}`, { newHeader: UpHeader, newDesc: UpDesc })
                .then(res => console.log(res))
                .catch(err => console.log(err));
            alert('Information was edited successfuly !');
            setToggleRender(!toggleRender);
        }

    }




    return ( 
        <div id="about">
            <h3 className="title">ABOUT
            <div className="line s"></div> 
            </h3>
            {data.map((eachData,index)=> (
                <div key={index} className="txt">
                    {toggleRender}
                    <h2 className="about-header"> {eachData.header} </h2>
                    <p className="about-desc"> {eachData.description} </p>
                   
                    <button type="button" onClick={() => handleDelete(eachData.id)}
                    className="delete"
                    >Delete</button><br />
                    <textarea type="text" placeholder="New Header"
                        onChange={(e) => setNewHeader(e.target.value)}
                    /><br />
                    <textarea type="text" placeholder="New Description"
                        onChange={(e) => {
                            setNewDesc(prev => {
                                return e.target.value;
                            })
                            }
                        }
                    /><br />
                    <button className="edit" type="button" onClick={() => handleEdit(eachData.id,index)}
                                            
                    >Edit</button>
                     <div className="line l"></div>
                </div>
                
            ))}
            <form className="txt">
                <textarea type="text" name="header" placeholder="Header"
                    onChange={(e) => setHeader(e.target.value)}
                    value={header}
                    required
                />
                <br />

                <textarea type="text" name="header" placeholder="Description"
                    onChange={(e)=>setDesc(e.target.value)}
                    value={desc}
                    required
                />
                <br />

                <button className="add" type="button" onClick={() => handleClick()}>
                    Add
                </button>
            </form>
        </div>
     );
}
 
export default About;
import React from 'react'
import { useEffect, useState } from 'react';
import Axios from 'axios';




const Contact = () => {
    const [data, setData] = useState([]);
    const [email, setEmail] = useState('info@gabykaram.com');
    const [tel, setTel] = useState('+961 81 647 748');
    const [render, setRender] = useState(true);
        useEffect(() => {
        const fetchData = async () => {

            const response = await fetch('http://localhost:3002/contact');
            const result = await response.json();
            setData([...result]);
        }
        fetchData();
        }, []);
    
    const handleEdit = () => {
        alert('Contact information was edited successfully !');
    }
    
    
    return ( 
        <div id="contact">
            <h3 className="title">CONTACT</h3>
            <div className="line s"></div>
            <div className="fixed-contacts">
                <p className="link">Email : <a href={`mailto:${email}`}>{email}</a> </p>
                <input type="text" placeholder="New Email"
                    onChange={e => setEmail(e.target.value)}
                    value={email}
                /><br />
                <button type="button" className="edit"
                onClick={handleEdit}
                >Edit Email</button>
                <p className="link">Call Gaby: <a href={`tel:${tel}`}>{tel}</a></p>
                <input type="text" placeholder="New Tel-number"
                onChange={e => setTel(e.target.value)}
                value={tel}
                /><br />
                <button type="button" className="edit"
                onClick={handleEdit}
                >Edit Tel-Number</button>   
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
}
 
export default Contact;
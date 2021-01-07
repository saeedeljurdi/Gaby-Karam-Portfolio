import React from 'react';
import Nav from './Nav';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Eachblog = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch('http://localhost:3002/blog');
            const result = await response.json();
            setData([...result]);
        }
        fetchData();
    }, []);
    return ( 
        <>
            <Nav/>
            <div id="all-blogs">
                <h2 className="title blogs">BLOGS</h2>
                <div className="blog-con">
                {data.map((eachData,index) => (
                    <div className="each-blogs" key={index}>
                        <div className="blog-header">
                        <h3 className="common">{eachData.name}</h3>
                        <img src={`http://localhost:3002/${eachData.image}`} height="180px" alt="img" />
                        </div>
                        <p className="blog-desc link">{eachData.description.slice(0, eachData.description.length / 2)}...  <Link className="sm" to={`/blog/${index}`}>Read more </Link> </p>
                    </div>
                ))}
            </div>            
                <div className="red-div"></div>
            </div>
            </>
        
     );
}
 
export default Eachblog;
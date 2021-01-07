import React from 'react';
import Nav from './Nav';
import { useEffect, useState } from 'react';

const Eachblog = (props) => {
    const [data, setData] = useState({});
    const id = props.match.params.id;
    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch('http://localhost:3002/blog');
            const result = await response.json();
            console.log(result);
            setData({ ...result[id] });
        }
        fetchData();
    }, [id]);
    return ( 
        <>
            <Nav />
                <div id="each-blog">
           
           <div className="each-blog-con">
           <div className="each-blog-header">
               <img src={`http://localhost:3002/${data.image}`} alt={data.id} height="300px" />
               <h3 className="blog-name">{data.name}</h3>
           </div>
           <p className="each-blog-desc">
                {data.description}
            </p>
               </div>
           </div>
           <div className="red-div"></div> 
        </>
     );
}
 
export default Eachblog;
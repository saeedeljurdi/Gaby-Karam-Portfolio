import React from 'react';
import { useEffect, useState } from 'react';
import {  Link  } from "react-router-dom";



const Blogs = () => {

    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch('http://localhost:3002/blog');
            const result = await response.json();
            const threeBlogs = result.slice(0, 3);
            setData([...threeBlogs]);
        }
        fetchData();
    }, []);

    return (
            <div id="blogs">
                <h3 className="title">BLOGS</h3>
                <div className="blog-con">
                {data.map(eachData => (
                    <div className="each-blog" key={eachData.id}>
                        <div className="blog-header">
                        <img src={`http://localhost:3002/${eachData.image}`} height="80px" alt="img" />
                        <h3 className="common">{eachData.name}</h3>
                        </div>
                        <p className="blog-desc link">{eachData.description.slice(0, eachData.description.length / 2)}...  <Link className="sm" to={`/blog/${eachData.id}`}>Read more </Link> </p>
                    </div>
                ))}
            </div>
            <p className="title"><Link to="/blogs" className="bl">See all blogs</Link></p>
            
                <div className="red-div"></div>
            </div>
     );
}
 
export default Blogs;
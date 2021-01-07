import React from 'react'
import { useEffect, useState , useRef } from 'react';
import Axios from 'axios';



const Skills = () => {
    const [file, setFile] = useState(''); // storing the uploaded file
    // storing the recived file from backend
    const [dataa, getFile] = useState({ name: "", path: "" });
    const [filename, setFilename] = useState('');
    // const [progress, setProgess] = useState(0); // progess bar
    const el = useRef(); // accesing input element

    const handleChange = (e) => {
        // setProgess(0)
        const file = e.target.files[0]; // accessing file
        setFilename(file.name);
        setFile(file); // storing file
    }

    const uploadFile = () => {
        const formData = new FormData();
        formData.append('file', file); // appending file
        console.log(file)
        Axios.post('http://localhost:3002/upload', formData).then(res => {
            console.log(res);
            getFile({
                name: res.data.name,
                path: 'http://localhost:3002' + res.data.path
            })
        }).catch(err => console.log(err))
    }

// _________________________________________________________________________________

    const [data, setData] = useState([]);
    const [toggleRender, setToggleRender] = useState(true);
    const [skill, setSkill] = useState('');
    // const [file, setFile] = useState('');
    // const [fileName, setFileName] = useState('');
    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch('http://localhost:3002/skills');
            const result = await response.json();
            setData([...result]);
        }
        fetchData();
    }, [toggleRender]);

    const handleDelete = (id) => {
        setToggleRender(!toggleRender);
        Axios.delete(`http://localhost:3002/deleteSkill/${id}`)
            .then(res => console.log(res))
            .catch(err => console.log(err));
        const newData = data.filter(eachData => eachData.id !== id);
        setData([...newData]);
        alert('Skill was deleted successfully !');
    }
    const handleClick = () => {
            setFile('');
            // setFileName('');
            getFile('');
            // setName('');
            setToggleRender(!toggleRender);
            Axios.post('http://localhost:3002/addSkill', { name: skill, file: filename})
                .then(res => console.log(res))
                .catch(err => console.log(err));
            const newData = { skill, filename };
            setData([...data, { ...newData }]);
            // setName('');
            alert('Skill was added successfully !');
    }

    return ( 
        <div id="skills">
            <h3 className="title">SKILLS</h3>
            <div className="line s"></div>
            <div className="skill">
            {data.map((eachData,index) => (
                <div className="each-skill" key={index}>
                    <button className="delete skill-btn"
                    onClick={()=>handleDelete(eachData.id)}
                    >-</button>
                    <h3 className="skill-name">{eachData.name}</h3>
                    <img src={`http://localhost:3002/${eachData.logo}`} height="65px" alt=""/>
                </div>
            ))}
            </div>
            <div className="line l"></div>
            <div className="txt">
                <input type="text" name="header" placeholder="Skill Name"
                    onChange={(e) => setSkill(e.target.value)}
                    value={skill}
                    required
                />
                <br />
                {/* <label>
                    <input type="file" name="header" 
                        placeholder="Blog Image Name(make sure you uploaded this image in the first 'File' input )"
                        onChange={(e) => {
                            setFile(e.target.files[0].name);
                            setFileName(e.target.files[0].name);
                        }}
                        value={file}
                        required
                        />
                </label>
                <br /> */}
                            <div className="file-upload">
                <input type="file" ref={el} onChange={handleChange} />
                <button onClick={uploadFile} className="upbutton">
                   Upload
                </button>
            <hr />
            {/* displaying received image*/}
                {dataa.path && <img src={dataa.path} alt={data.name}
                className="img-up"
                />}
            </div>

                <button className="add" type="button"
                onClick={()=>handleClick()}
                >
                    Add
                </button>
            </div>
        </div>
     );
}
 
export default Skills;
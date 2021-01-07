import React from 'react';
import { useEffect, useState , useRef } from 'react';
import Axios from 'axios';


const Projects = () => {


    const [file, setFile] = useState(''); // storing the uploaded file
    // storing the recived file from backend
    const [dataa, getFile] = useState({ name: "", path: "" });
    const [filename, setFilename] = useState('');
    const [progress, setProgess] = useState(0); // progess bar
    const el = useRef(); // accesing input element

    const handleChange = (e) => {
        setProgess(0)
        const file = e.target.files[0]; // accessing file
        setFilename(file.name);
        setFile(file); // storing file
    }

    const uploadFile = () => {
        const formData = new FormData();
        formData.append('file', file); // appending file
        console.log(file)
        Axios.post('http://localhost:3002/upload', formData, {
            onUploadProgress: (ProgressEvent) => {
                let progress = Math.round(
                    ProgressEvent.loaded / ProgressEvent.total * 100) + '%';
                setProgess(progress);
            }
        }).then(res => {
            console.log(res);
            getFile({
                name: res.data.name,
                path: 'http://localhost:3002' + res.data.path
            })
        }).catch(err => console.log(err))
    }


    // _____________________________________________________________________________

    const [data, setData] = useState([]);
    const [toggleRender, setToggleRender] = useState(true);
    const [init, setInit] = useState([...data]);
    const [addedData, setAddedData] = useState({
        name: '',
        img: '',
        link: '',
        desc: '',
        acc: ''
    })
    useEffect(() => {
        console.log('I am project')
        const fetchData = async () => {
            const response = await fetch('http://localhost:3002/projects');
            const result = await response.json();
            setData([...result]);
        }
        fetchData();
    }, [toggleRender,init]);
    
    const handleDelete = (id) => {
        Axios.delete(`http://localhost:3002/deleteProject/${id}`)
            .then(res => console.log(res))
            .catch(err => console.log(err));
        const newData = data.filter(eachData => eachData.id !== id);
        setData([...newData]);
        alert('Information was deleted successfully !');
    }
    const handleClick = () => {
        if (addedData.acc && addedData.desc && addedData.name && addedData.link) {
            Axios.post('http://localhost:3002/addProject', { acc: addedData.acc, desc: addedData.desc, name: addedData.name, link: addedData.link, img: filename })
                .then(res => console.log(res))
                .catch(err => console.log(err));
            setData([...data, { ...addedData }]);
            setToggleRender(false);
            setInit('hello')
        }
    }


    return ( 
        <div id="projects">
            <h3 className="title">PROJECTS</h3>
            <div className="line s"></div>
            <div className="proj-con">
      {data.map((eachData,index) => (
        <div className="each-proj" key={index}>
          <div className="proj-header center">
            <h3 className="link"><a href={eachData.link} target="--blank">{eachData.name} </a></h3>
            <img src={`http://localhost:3002/${eachData.img}`} height="100px" alt=""/>
          </div>
              <p className="proj-desc">{eachData.description}</p>
              <div className="accss">
          <p className="acc"> Accomplishments : </p>         
            {eachData.accomplishments.split(',').map((eachAcc,index) => (
              <ul className="exp-list" key={index}>
                    <li>{eachAcc}</li>
                    {toggleRender}
             </ul>
              
           ))}
                    </div>
                    <button type="button" onClick={() => handleDelete(eachData.id)}
                    className="delete"
                    >Delete</button>
        </div>
      ))}
            </div>
            <div className="line l"></div>
            <form className="txt">

                <input type="text" placeholder="Project Name" required
                    onChange={(e) => setAddedData({ ...addedData, name: e.target.value })}
                    value={addedData.name}
                /><br />
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
                  <input type="text" placeholder="Project's Link" required
                    onChange={(e) => setAddedData({ ...addedData, link: e.target.value })}
                    value={addedData.link}
                /><br />
                <textarea type="text" placeholder="Description" required
                    onChange={(e) => setAddedData({ ...addedData, desc: e.target.value })}
                    value={addedData.desc}
                /><br />
                <textarea type="text" placeholder="Accomplishments (make sure to seperate each accomplishment with a comma)" required
                   onChange={(e) => setAddedData({ ...addedData, acc: e.target.value })}
                    value={addedData.acc}
                /><br />
                <button className="add" type="button"
                onClick={() => handleClick()}
                >
                    Add
                </button>
            </form>
        </div>
     );
}
 
export default Projects;
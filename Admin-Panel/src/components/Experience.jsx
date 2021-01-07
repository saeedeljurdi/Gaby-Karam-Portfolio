import React from 'react';
import { useEffect, useState , useRef} from 'react';
import Axios from 'axios';

const Experience = () => {
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
            getFile({ name: res.data.name,
                     path: 'http://localhost:3002' + res.data.path
                   })
        }).catch(err => console.log(err))
    }
    

    // _____________________________________________________________________________
        
    const [data, setData] = useState([]);
    const [toggleRender, setToggleRender] = useState(true);
    const [cName, setcName] = useState('');
    const [img, setImg] = useState('');
    const [position, setPosition] = useState('');
    const [place, setPlace] = useState('');
    const [time, setTime] = useState('');
    const [desc, setDesc] = useState('');
    const [acc, setAcc] = useState('');
    const [link, setLink] = useState('');
    
    useEffect(() => {
        console.log('I am Experience');
        const fetchData = async ()=> {
        const response = await fetch('http://localhost:3002/experience');
        const result = await response.json();
        setData([...result]);
      }
        fetchData();
      }, [toggleRender]);
    
    const handleDelete = (id) => {
        setToggleRender(!toggleRender);
        Axios.delete(`http://localhost:3002/deleteExperience/${id}`)
            .then(res => console.log(res))
            .catch(err => console.log(err));
        const newData = data.filter(eachData => eachData.id !== id);
        setData([...newData]);
        alert('Information was deleted successfully !');
    }
     
    const handleClick = () => {
       
        if (cName && position && link && time && place && desc && acc) {
            setToggleRender(!toggleRender);
            setcName('');
            setPosition('');
            setLink('');
            setTime('');
            setPlace('');
            setDesc('');
            setAcc('');
            setImg('');
            const addedData = { cName, filename, position, link, time, place, acc, desc };
            const newData = [...data, { ...addedData }];
            setData([...newData]);
            Axios.post(`http://localhost:3002/addExperience`, { cName: cName, img: filename, position: position, time: time, place: place, desc: desc, acc: acc, link: link })
                .then(res => console.log(res))
                .catch(err => console.log(err));
            alert('Information was added successfully !');
        }
    }

    return ( 
        
        <div id="experience">
            <h3 className="title">EXPERIENCE</h3>
            <div className="line s"></div>
            <div className="exp-con">
            {data.map((eachData,index) => {
                return (
                    
                    <div className="each-exp" key={index}>
                    <h3 className="link"><a  href={eachData.link} target="--blank">{eachData.name}</a></h3>
                  <img src={`http://localhost:3002//${eachData.img}`} alt="" height="80px"/>
        
                  <div className="exp-intro">
                    <p className="pos">{ eachData.position }</p>
                    <p className="date">{eachData.place} | {eachData.date}</p>
                  </div><br/>
                  <p className="exp-desc">
                    {eachData.description}
                        </p>
                        <div className="accs">
                            <p className="acc"> Accomplishments : </p>
                            <ul className="exp-list">
                  {eachData.list.split(',').map((eachLi,liIndex) => (
                        <li key={liIndex}>{eachLi}</li>
                  ))}
                            </ul>
                            </div>
                      <button type="button" onClick={() => handleDelete(eachData.id)}
                    className="delete"
                    >Delete</button>
                 </div>
                      
                )
            })}
            </div>
            <div className="line l"></div>
            <form className="txt">
                {toggleRender}
                <input type="text" placeholder="Company name" required
                    onChange={(e) => setcName(e.target.value)}
                    value={cName}
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
                <input type="text" placeholder="Position/Role" required
                    onChange={(e) => setPosition(e.target.value)}
                    value={position}
                /><br />
                <input type="text" placeholder="Place" required
                    onChange={(e) => setPlace(e.target.value)}
                    value={place}
                /><br />
                <input type="text" placeholder="Time" required
                    onChange={(e) => setTime(e.target.value)}
                    value={time}
                /><br />
                  <input type="text" placeholder="Company's Link" required
                    onChange={(e) => setLink(e.target.value)}
                    value={link}
                /><br />
                <textarea type="text" placeholder="Description" required
                    onChange={(e) => setDesc(e.target.value)}
                    value={desc}
                /><br />
                <textarea type="text" placeholder="Accomplishments (make sure to seperate each accomplishment with a comma)" required
                    onChange={(e) => setAcc(e.target.value)}
                    value={acc}
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
 
export default Experience;
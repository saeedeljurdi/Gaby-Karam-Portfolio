import React from 'react'
import { useEffect, useState , useRef} from 'react';
import Axios from 'axios';


const Allblogs = () => {

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
// _________________________________________________________________________________
    const [data, setData] = useState([]);
    const [toggleRender, setToggleRender] = useState('');
    const [title, setTitle] = useState('');
    const [img, setImg] = useState('');
    const [desc, setDesc] = useState('');
    const [newTitle, setNewTitle] = useState('');
    const [newImg, setNewImg] = useState('');
    const [newDesc, setNewDesc] = useState('');

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch('http://localhost:3002/blog');
            const result = await response.json();
            setData([...result]);
        }
        fetchData();
    }, [toggleRender]);
    
    const handleDelete = (id) => {
        setToggleRender(!toggleRender);
        Axios.delete(`http://localhost:3002/deleteBlog/${id}`)
            .then(res => console.log(res))
            .catch(err => console.log(err));
        const newData = data.filter(eachData => eachData.id !== id);
        setData([...newData]);
        alert('Information was deleted successfully !');
    }
    
    const handleClick = () => {
        if (title, desc) {
            getFile('');
            const imgg = file.name || 'image.png';
            setToggleRender(!toggleRender);
            Axios.post('http://localhost:3002/addBlog', { title: title, img: imgg, desc:desc })
                .then(res => console.log(res))
                .catch(err => console.log(err));
            const newData = { title, imgg , desc };
            setData([...data, { ...newData }]);
            setTitle('');
            setImg('');
            setDesc('');
            alert('Skill was added successfully !');
        }
    }

    const handleEdit = (id, index) => {
        
        const oldTitle = data[index].name;
        const oldDesc = data[index].description;

        const newTitlee = newTitle || oldTitle;
        const newDescc = newDesc || oldDesc;
        const newImgg = newImg || 'image.png';

         
            Axios.put(`http://localhost:3002/editBlog/${id}`, { newTitle: newTitlee, newDesc: newDescc, newImg: newImgg })
                .then(res => console.log(res))
                .catch(err => console.log(err));
            alert('Information was edited successfuly !');
        setToggleRender(!toggleRender);
            
    }

    return ( 
        <div id="blogs">
            <h3 className="title">BLOGS</h3>
            <div className="line s"></div>
            <div className="blog-con">
                {data.map((eachData,index) => (
                    <div className="each-blogs" key={eachData.id}>
                        <div className="blog-header">
                        <h3 className="common">{eachData.name}</h3>
                        <img src={`http://localhost:3002/${eachData.image}`} height="180px" alt="img" />
                        </div>
                        <p className="blog-desc link">{eachData.description}</p>
                        <button type="button" onClick={() => handleDelete(eachData.id)}
                    className="delete"
                        >Delete</button><br />
                        <textarea type="text" placeholder="New Title"
                            onChange={(e) => setNewTitle(e.target.value)}
                        />
                        <textarea type="text" placeholder="New Description"

                        onChange={(e) => {
                          setNewDesc(e.target.value)
                            }
                        }
                    /><br />
                    <button className="edit" type="button" onClick={() => handleEdit(eachData.id,index)}
                                            
                    >Edit</button>
                    </div>
                ))}
            </div> 
            <div className="line l"></div>
            <form className="txt">
                <input type="text" placeholder="Blog Title"
                    onChange={e => setTitle(e.target.value)}
                    value={title}
                    required
                />
                <br />

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

                <textarea type="text" placeholder="Blog Description"
                    onChange={e => setDesc(e.target.value)}
                    value={desc}
                    required
                />
                <br />

                <button className="add" type="button"
                onClick={()=>handleClick()}
                >
                    Add
                </button>
            </form>
        </div>
     );
}
 
export default Allblogs;
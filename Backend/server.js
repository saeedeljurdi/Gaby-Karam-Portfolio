const express = require('express');
const { connect } = require('http2');
const cors = require('cors');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const fileUpload = require('express-fileupload');
const Joi = require('joi');
const { send } = require('process');
const jwt = require('jsonwebtoken');
require("dotenv").config();
const bcrypt = require('bcrypt');
const auth = require('./auth')

const app = express();



// Middleware 
app.use(express.static('public'));
app.use(cors())
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(fileUpload());
// 








const PORT = process.env.PORT;

app.listen(PORT || 3002, () => {
    console.log('Listening...')
});

app.get('/home', (req, res) => {
    res.send('This is the home');
});


const db = mysql.createConnection({
    host: 'localhost',
    user: 'saeed',
    password: '8V(wczZU',
    database: 'gk',
    insecureAuth: true
});
db.connect((err) => {
    if (err) { console.log("db error", err.message); };
    console.log('Connected');
});

app.get("/about", (req, res) => {
    db.query('SELECT * FROM about', (err, rows) => {
        if (err) { console.log("here", err.message); }
        else {
            console.log('Data received from Db;');
            res.send(rows);
        }
    });
});
app.get("/experience", (req, res) => {

    db.query('SELECT * FROM experience', (err, rows) => {
        if (err) { console.log("here", err.message); }
        else {
            console.log('Data received from Db;');
            res.send(rows);
        }
    });
});
app.get("/projects", (req, res) => {

    db.query('SELECT * FROM projects', (err, rows) => {
        if (err) { console.log("here", err.message); }
        else {
            console.log('Data received from Db;');
            res.send(rows);
        }
    });
});
app.get("/skills", (req, res) => {

    db.query('SELECT * FROM skills', (err, rows) => {
        if (err) { console.log("here", err.message); }
        else {
            console.log('Data received from Db;');
            res.send(rows);
        }
    });
});
app.get("/education", (req, res) => {

    db.query('SELECT * FROM education', (err, rows) => {
        if (err) { console.log("here", err.message); }
        else {
            console.log('Data received from Db;');
            res.send(rows);
        }
    });
});
app.get("/achievements", (req, res) => {

    db.query('SELECT * FROM achievements', (err, rows) => {
        if (err) { console.log("here", err.message); }
        else {
            console.log('Data received from Db;');
            res.send(rows);
        }
    });
});


app.get("/blog", (req, res) => {

    db.query('SELECT * FROM blog', (err, rows) => {
        if (err) { console.log("here", err.message); }
        else {
            console.log('Data received from Db;');
            res.send(rows);
        }
    });
});



app.get("/contact", (req, res) => {

    db.query('SELECT * FROM contact ', (err, rows) => {
        if (err) { console.log("here", err.message); }
        else {
            console.log('Data received from Db;');
            res.send(rows);
        }
    });
});

//____________________________________________________________________________________



// Subscribers 

const emailSchema = Joi.object({
    email: Joi.string()
        .min(3)
        .max(60)
        .email()
        .required()
});


app.post('/insertSub', (req, res) => {

    const email = req.body.email;
    const validation = emailSchema.validate({ email });
    if (!validation.error) {
        res.json({ "status": 'success' });
        const insertStmnt = "INSERT INTO subscribers (email) VALUES (?)";
        db.query(insertStmnt, [email], (err, data) => {
            if (err) console.log(err);
        })

    } else {

        res.send(`${validation.error.details[0].message}`);

    }
  
})


app.get('/subs', (req, res) => {
    const selectStmnt = "SELECT * FROM subscribers";
    db.query(selectStmnt, (err, data) => {
        if (err) console.log(err); 
        res.send(data);
    })
})



// ___________________________________________________________________________________











// ADMIN PANEL About component

app.post('/addAbout', (req, res) => {
    const desc = req.body.desc;
    const header = req.body.header;
    const addQuery = "INSERT INTO about (description,header) VALUES (?,?)";
    db.query(addQuery, [desc, header], (err, result) => {
        if (err) console.log(err);
    })
})

app.delete('/deleteAbout/:id', (req, res) => {
    const id = req.params.id;
    const deleteQuery = "DELETE FROM about where id = ?";
    db.query(deleteQuery, id, (err, resp) => {
        if (err) console.log(err);
    })
})

app.put('/editAbout/:id', (req, res) => {
    const id = req.params.id;
    const newHeader = req.body.newHeader;
    const newDesc = req.body.newDesc;
    const editQuery = "UPDATE about SET header = ? , description = ? WHERE id = ?";
    db.query(editQuery,[newHeader,newDesc , id] ,(err, resp) => {
        if (err) console.log(err);
    })
})

// ________________________________________________________________________________


// Experience Component 


app.delete('/deleteExperience/:id', (req, res) => {
    const id = req.params.id;
    const deleteQuery = "DELETE FROM experience where id = ?";
    db.query(deleteQuery, id, (err, resp) => {
        if (err) console.log(err);
    })
})

app.post('/addExperience', (req, res) => {
    console.log(req.body);
    const cName = req.body.cName;
    const place = req.body.place;
    const time = req.body.time;
    const acc = req.body.acc;
    const img = req.body.img;
    const desc = req.body.desc;
    const position = req.body.position;
    const link = req.body.link;
    const addQuery = "INSERT INTO experience (name,position,description,date,place,list,link,img) VALUES (?,?,?,?,?,?,?,?)";
    db.query(addQuery, [cName, position,desc,time,place,acc,link,img], (err, result) => {
        if (err) console.log(err);
    })
})



// ________________________________________________________________________________


// Project api 

app.delete('/deleteProject/:id', (req, res) => {
    const id = req.params.id;
    const deleteQuery = "DELETE FROM projects where id = ?";
    db.query(deleteQuery, id, (err, resp) => {
        if (err) console.log(err);
    })
})

app.post('/addProject', (req, res) => {
    const { acc, desc, name, link, img } = req.body;
    console.log(req.body);
    const addQuery = "INSERT INTO projects (name,description,accomplishments,link,img) VALUES (?,?,?,?,?)";
    db.query(addQuery, [name, desc, acc, link, img], (err, result) => {
        if (err) console.log(err);
    })
})




// _________________________________________________________________________________


// SKILLS API 

app.delete('/deleteSkill/:id', (req, res) => {
    const id = req.params.id;
    const deleteQuery = "DELETE FROM skills where id = ?";
    db.query(deleteQuery, id, (err, resp) => {
        if (err) console.log(err);
    })
})

app.post('/addSkill', (req, res) => {

    const { name, file } = req.body;
    const addQuery = "INSERT INTO skills (name,logo) VALUES (?,?)";
    db.query(addQuery, [name,file], (err, result) => {
        if (err) console.log(err);
    })
})

app.post('/upload', (req, res) => {

    if (!req.files) {
        return res.status(500).send({ msg: "file is not found" })
    }
        // accessing the file
    const myFile = req.files.file;

    //  mv() method places the file inside public directory
    myFile.mv(`${__dirname}/public/${myFile.name}`, function (err) {
        if (err) {
            console.log(err)
            return res.status(500).send({ msg: "Error occured" });
        }
        // returing the response with file path and name
        return res.send({name: myFile.name, path: `/${myFile.name}`});
    });
})

// _________________________________________________________________________________


// Education APIS 

app.delete('/deleteEducation/:id', (req, res) => {
    const id = req.params.id;
    const deleteQuery = "DELETE FROM education where id = ?";
    db.query(deleteQuery, id, (err, resp) => {
        if (err) console.log(err);
    })
})

app.post('/addEducation', (req, res) => {
    const { name, link, time, place, desc } = req.body;
    const addQuery = "INSERT INTO education (name,date,place,description,link) VALUES(?,?,?,?,?)";
    db.query(addQuery, [name,time,place,desc,link], (err, resp) => {
        if (err) console.log(err);
    })
})


// __________________________________________________________________________________


// Achievemnets api 


app.delete('/deleteAchievement/:id', (req, res) => {
    const id = req.params.id;
    const deleteQuery = "DELETE FROM achievements where id = ?";
    db.query(deleteQuery, id, (err, resp) => {
        if (err) console.log(err);
    })
})

app.post('/addAchievement', (req, res) => {
    const { name, time, desc, cred ,img} = req.body;
    const addQuery = "INSERT INTO achievements(name,description,logo,date,credential) VALUES(?,?,?,?,?)";
    db.query(addQuery,[name,desc,img,time,cred], (err, resp) => {
        if (err) console.log(err);
    })
})




// _________________________________________________________________________________




// Blogs APIs  

app.delete('/deleteBlog/:id', (req, res) => {
    const id = req.params.id;
    const deleteQuery = "DELETE FROM blog where id = ?";
    db.query(deleteQuery, id, (err, resp) => {
        if (err) console.log(err);
    })
})

app.post('/addBlog', (req, res) => {
    const { title, img, desc } = req.body;
    const addQuery = "INSERT INTO blog(name,description,image) VALUES(?,?,?)";
    db.query(addQuery, [title,desc,img] , (err, resp) => {
        if (err) console.log(err);
    })
})

app.put('/editBlog/:id', (req, res) => {
    const id = req.params.id;
    const { newTitle, newImg, newDesc } = req.body;
    const editQuery = "UPDATE blog SET name = ? , description = ? , image= ? WHERE id = ?";
    db.query(editQuery, [newTitle,newDesc,newImg,id] , (err, resp) => {
        if (err) console.log(err);
    })
})



// ___________________________________________________________________________________


// Upload.js comp 


app.post('/upload', (req, res) => {

    if (!req.files) {
        return res.status(500).send({ msg: "file is not found" })
    }
        // accessing the file
    const myFile = req.files.file;

    //  mv() method places the file inside public directory
    myFile.mv(`${__dirname}/public/${myFile.name}`, function (err) {
        if (err) {
            console.log(err)
            return res.status(500).send({ msg: "Error occured" });
        }
        // returing the response with file path and name
        // return res.send({name: myFile.name, path: `/${myFile.name}`});
    });
})




//




// Auth 

app.get('/login', auth, async (req, res) => {
    console.log(req)
    db.query(`SELECT id FROM admin WHERE id=${req.admin}`, async (err, data) => {
        if (err) console.log(err);
        console.log(data)
        res.json({success: true, data});
    })
});

app.post('/login',(req, res) => {


    const passSchema = Joi.object({
        password: Joi.string()
            .min(3)
            .max(60)
            .required()
    });

    const email = req.body.email;
    const password = req.body.password;
    const eValidation = emailSchema.validate({ email });
    const pValidation = passSchema.validate({ password });
    const neededData = "SELECT * FROM admin WHERE id=1";

    

//     const tokenValidation = (token) => {

    
//         if (!token) {
//                      return res.status(401).json({ msg: 'No token, authorization denied' });
//                    }
             
//                    // Verify token
//                    try {
//                      jwt.verify(token, process.env.SECRET, (error, decoded) => {
//                        if (error) {
//                          return res.status(401).json({ msg: 'Token is not valid' });
//                        } else {
//                          req.user = decoded.user;
//                          next();
//                        }
//                      });
//                    } catch (err) {
//                      console.error('something wrong with auth middleware');
//                      res.status(500).json({ msg: 'Server Error' });
//                    }

// }..
    
    if (!eValidation.error && !pValidation.error) {
        db.query(neededData,async (err, data) => {
            if (err) console.log(err);
            // const salt = bcrypt.genSaltSync(10);
            // const encrPass = await bcrypt.hash(data[0].password,salt);
            // const encrPassedPass = await bcrypt.hash(password, salt);
            // const isMatch = await bcrypt.compare(encrPass, encrPassedPass);
            
            if (data[0].email === email && data[0].password === password) {

                const payload = {
                    user: {
                        id: data[0].id
                    }
                }
                
                jwt.sign(payload, process.env.ACCESS_TOKEN_SECRET, (err, token) => {
                    if (err) throw err;
                    res.json({ token });
                })
                
                


            } else {
                res.status(202).send("Wrong email or password !");
            }

        })
    } else {

        if (eValidation.error && pValidation.error) {
            res.status(202).send(`${eValidation.error.details[0].message}&${pValidation.error.details[0].message}`);
        } else if (eValidation.error) {
            res.status(202).send(`${eValidation.error.details[0].message}`)
        } else if(pValidation.error) {
            res.status(202).send(`${pValidation.error.details[0].message}`)
        }

    }


  
   
  
})








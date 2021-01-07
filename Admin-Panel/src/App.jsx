import './App.css';
import React, { useEffect, useState } from 'react';
import About from './components/About';
import Subs from './components/Subs';
import Sidebar from './components/Sidebar';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
// import Skill from './components/Skills2';
import Education from './components/Eduacation';
import Achievements from './components/Achievements';
import Allblogs from './components/Allblogs';
import Contact from './components/Contact';
import { BrowserRouter as Router,Route, Redirect } from 'react-router-dom'; 
import Form from './components/Form';


function App() {
  const [redirect, setRedirect] = useState(null)

  useEffect(() => {
    let isMounted = true
    const run = async () => {
      try {
        const response = await fetch(`http://localhost:3002/login`, {
          headers: {
            'Authentication': localStorage.getItem('token')
          }
        })
        const data = await response.json()
        if (data.msg) {
          setRedirect('/')
        }
        else {
          setRedirect('/admin')
        }
      } catch (error) {
        console.log(error);
      }
      
    }
    if (isMounted) {
      run()  
    }
    return () => { isMounted = false }
  }, [])

  const redirectFunction = () => {
    if (redirect) {
      return <Redirect to={redirect} />
    }
  }

  return (
    <Router>
      {redirectFunction()}
      <div className="app">
        <Route exact path='/'>
          <Form />
        </Route>
        <Route exact path="/admin">
      <Sidebar />
      <main>
        <About />
        <div className="line xl"></div>
        <Experience />
        <div className="line xl"></div>
        <Projects />
        <div className="line xl"></div>
        <Skills />
        <div className="line xl"></div>
        <Education />
        <div className="line xl"></div>
        <Achievements />
        <div className="line xl"></div>
        <Allblogs/>
        <div className="line xl"></div>
        <Contact/>
        <div className="line xl"></div>
        <Subs />
          </main>
          </Route>
      </div>
        
      </Router>
  );
}

export default App;

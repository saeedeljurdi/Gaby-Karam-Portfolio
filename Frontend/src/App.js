import React from "react";
import "./App.css";
import Nav from "./components/Nav";
import Banner from "./components/Banner";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Education from "./components/Education";
import Achievements from "./components/Achievements";
import Blogs from "./components/Blogs";
import Contact from "./components/Contact";
import Form from './components/Form';
import Allblogs from "./components/Allblogs";
import Eachblog from "./components/Eachblog";
import { BrowserRouter as Router } from "react-router-dom";
import { Route , Switch } from "react-router-dom";




function App(props) {
  return (
    <div>
       <Router>
      <Switch> 
      <Route path="/" exact > 
      <Nav />
      <Banner />
      <Form />
      <About />
      <Experience />
      <Projects />
      <Skills />
      <Education />
      <Achievements />
      <Blogs />      
      <Contact />
        </Route>
      </Switch>
       <Switch>
       <Route path="/blogs" exact>
         <Allblogs />
         </Route>
       </Switch>
       <Switch>
       <Route
         path="/blog/:id"
         render={({ match }) => {
           return match ? <Eachblog match={match} /> : <Allblogs />
         }}/>
        </Switch>
      </Router>
      </div>
  );
}

export default App;

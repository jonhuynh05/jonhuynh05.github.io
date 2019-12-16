import React, { Component } from 'react'
import './App.css';
import Nav from "./Nav"
import About from "./About"
import Portfolio from "./Portfolio"
import Contact from "./Contact"
import Skills from "./Skills"

class App extends Component{
  handleScroll(e){
    e.preventDefault()

  }

  render(){
    return (
      <React.Fragment>
        <Nav />
        <About />
        <Skills />
        <Portfolio />
        <Contact />
      </React.Fragment>
    )
  }
}

export default App;

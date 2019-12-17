import React, { Component } from 'react'
import "./nav.css"
import { Link } from 'react-scroll'

class Nav extends Component{
    state = {
        open: false
    }

    handleOpen = () => {
        this.setState({
            open: true
        })
    }

    handleClose = () => {
        this.setState({
            open: false
        })
    }

    render(){
        return(
            <nav>
                <div className="nav-main">
                    <div className="nav-div" id="name">
                        <Link smooth={true} offset={-70} className="nav-a" id="nav-a-name" to="jonathan-huynh">Jonathan Huynh</Link>
                    </div>
                    <div id="hamburger-stack">
                        <div className="hamburger-bars"></div>
                        <div className="hamburger-bars"></div>
                        <div className="hamburger-bars"></div>
                    </div>
                    {/* <div id="hamburger-container"> */}
                    <div className="nav-row">
                        <div className="nav-div" id="nav-skills">
                            <Link smooth={true} offset={-70} className="nav-a" to="skills">Skills</Link>
                        </div>
                    </div>
                    <div className="nav-row">
                        <div className="nav-div" id="nav-portolio">
                            <Link smooth={true} offset={-70} className="nav-a" to="portfolio">Portfolio</Link>
                        </div>
                    </div>
                    <div className="nav-row">
                        <div className="nav-div" id="nav-contact">
                            <Link smooth={true} offset={-70} className="nav-a" to="contact">Contact</Link>
                        </div>
                    </div>
                </div>
                {/* </div> */}
            </nav>
        )
    }
}

export default Nav
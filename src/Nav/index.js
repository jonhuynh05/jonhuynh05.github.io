import React from 'react'
import "./nav.css"
import { Link } from 'react-scroll'

function Nav (){
    return(
        <nav>
            <div className="nav-div" id="name">
                <Link smooth={true} offset={-70} className="nav-a" to="jonathan-huynh">Jonathan Huynh</Link>
            </div>
            <div className="nav-div" id="nav-skills">
                <Link smooth={true} offset={-70} className="nav-a" to="skills">Skills</Link>
            </div>
            <div className="nav-div" id="nav-portolio">
                <Link smooth={true} offset={-70} className="nav-a" to="portfolio">Portfolio</Link>
            </div>
            <div className="nav-div" id="nav-contact">
                <Link smooth={true} offset={-70} className="nav-a" to="contact">Contact</Link>
            </div>
        </nav>
    )
}

export default Nav
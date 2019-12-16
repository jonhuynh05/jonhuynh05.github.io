import React from 'react'
import "./contact.css"
import { Element } from 'react-scroll'

function Contact () {
    return (
        <Element name="contact" id="contact">
            <img id="photo" src={require("../images/contact-photo.jpg")} alt="Jonathan Huynh"/>
            <div className="info-container">
                <div className="section-header">
                    Contact Me
                </div>
                <div className="resume-row">
                    Check out my resume <a id="resume-link" href={require("../Resume/Jonathan Huynh Resume.pdf")} download>here</a>.
                </div>
                <div className="email-row">
                    <div className="email-col">
                        <div id="email-icon">
                        </div>
                        <a id="email-address" href="mailto:jonhuynh05@gmail.com" target="_blank" rel="noopener noreferrer">jonhuynh05@gmail.com</a>
                    </div>
                </div>
                <div className="icons-container">
                    <div className="icons-col">
                        <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/jon-huynh/">
                            <div className="contact-col" id="linkedin">
                            </div>
                        </a>
                        <a target="_blank" rel="noopener noreferrer" href="https://github.com/jonhuynh05">
                            <div className="contact-col" id="github">
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </Element>
    )
}

export default Contact
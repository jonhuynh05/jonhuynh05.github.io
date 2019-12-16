import React from 'react'
import "../Portfolio/portfolio.css"
import { Element } from 'react-scroll'

const BlueSpotlight = () => {
    return(
        <Element name="blue-spotlight" className="project-container" id="blue-spotlight">
            <div className="project-title">
                Blue-Spotlight
            </div>
            <div className="project-description">
                Blue Spotlight is a rating site geared towards helping contractors and people connect. Take a look <a target="_blank" rel="noopener noreferrer" href="https://blue-spotlight.herokuapp.com/">here</a>.
            </div>
            <div className="project-image">
                <img src={require("../images/bluespotlight.png")} alt="blue-spotlight"/>
            </div>
            <div className="technology-description">
                <div className="technology-header">
                    Technologies Used
                </div>
                <div className="technology-row">
                    <div className="technology-col">
                        <div className="technology-icon">
                            <img src={require("../images/express.png")} alt="express" id="express"/>
                        </div>
                        <div className="technology-name">
                            Express
                        </div>
                    </div>
                    <div className="technology-col">
                        <div className="technology-icon">
                            <img src={require("../images/nodejs.png")} alt="nodejs" id="nodejs"/>
                        </div>
                        <div className="technology-name">
                            Node.js
                        </div>
                    </div>
                    <div className="technology-col">
                        <div className="technology-icon">
                            <img src={require("../images/javascript.png")} alt="javascript" id="javascript"/>
                        </div>
                        <div className="technology-name">
                            JavaScript
                        </div>
                    </div>
                    <div className="technology-col">
                        <div className="technology-icon">
                            <img src={require("../images/mongodb.svg")} alt="mongodb" id="mongodb"/>
                        </div>
                        <div className="technology-name">
                            MongoDB
                        </div>
                    </div>
                    <div className="technology-col">
                        <div className="technology-icon">
                            <img src={require("../images/bootstrap.png")} alt="bootstrap" id="bootstrap"/>
                        </div>
                        <div className="technology-name">
                            Bootstrap
                        </div>
                    </div>
                    <div className="technology-col">
                        <div className="technology-icon">
                            <img src={require("../images/ejs.png")} alt="ejs" id="ejs"/>
                        </div>
                        <div className="technology-name">
                            EJS
                        </div>
                    </div>
                </div>
            </div>
        </Element>
    )
}

export default BlueSpotlight
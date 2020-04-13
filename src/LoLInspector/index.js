import React from 'react'
import "../Portfolio/portfolio.css"
import { Element } from 'react-scroll'

const LoLInspector = () => {
    return(
        <Element name="lolinspector" className="project-container" id="lolinspector">
            <div className="project-title">
                LoL Inspector
            </div>
            <div className="project-description">
                LoL Inspector is a learning tool for every League of Legends player. It highlights where a player succeeded and can improve for a given match. Take a look at the site <a href="https://lolinspector.herokuapp.com/" target="_blank" rel="noopener noreferrer">here</a>.
            </div>
            <div className="project-image">
                <img src={require("../images/lolinspector.png")} alt="lolinspector"/>
            </div>
            <div className="technology-description">
                <div className="technology-header">
                    Technologies Used
                </div>
                <div className="technology-row">
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
                            <img src={require("../images/express.png")} alt="express" id="express"/>
                        </div>
                        <div className="technology-name">
                            Express
                        </div>
                    </div>
                    <div className="technology-col">
                        <div className="technology-icon">
                            <img src={require("../images/react.png")} alt="react" id="react"/>
                        </div>
                        <div className="technology-name">
                            React.js
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
                            <img src={require("../images/riotgameslogo.png")} alt="riot" id="riot"/>
                        </div>
                        <div className="technology-name">
                            Riot Games API
                        </div>
                    </div>
                </div>
            </div>
        </Element>
    )
}

export default LoLInspector
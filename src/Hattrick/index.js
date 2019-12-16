import React from 'react'
import "../Portfolio/portfolio.css"
import { Element } from 'react-scroll'

const Hattrick = () => {
    return(
        <Element name="hattrick" className="project-container" id="hattrick">
            <div className="project-title">
                Hattrick
            </div>
            <div className="project-description">
                Hattrick is a recipe creation app that allows users to create and share their favorite 3 ingredient recipes. You can check it out <a href="https://hattrickfoods.herokuapp.com/" target="_blank" rel="noopener noreferrer">here</a>.
            </div>
            <div className="project-image">
                <img src={require("../images/hattrick.png")} alt="hattrick"/>
            </div>
            <div className="technology-description">
                <div className="technology-header">
                    Technologies Used
                </div>
                <div className="technology-row">
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
                            <img src={require("../images/css.svg")} alt="css" id="css"/>
                        </div>
                        <div className="technology-name">
                            CSS3
                        </div>
                    </div>
                    <div className="technology-col">
                        <div className="technology-icon">
                            <img src={require("../images/python.png")} alt="python" id="python"/>
                        </div>
                        <div className="technology-name">
                            Python
                        </div>
                    </div>
                    <div className="technology-col">
                        <div className="technology-icon">
                            <img src={require("../images/flask.png")} alt="flask" id="flask"/>
                        </div>
                        <div className="technology-name">
                            Flask
                        </div>
                    </div>
                    <div className="technology-col">
                        <div className="technology-icon">
                            <img src={require("../images/sqlite.png")} alt="sqlite" id="sqlite"/>
                        </div>
                        <div className="technology-name">
                            Sqlite
                        </div>
                    </div>
                    <div className="technology-col">
                        <div className="technology-icon">
                            <img src={require("../images/peewee.png")} alt="peewee" id="peewee"/>
                        </div>
                        <div className="technology-name">
                            Peewee
                        </div>
                    </div>
                    <div className="technology-col">
                        <div className="technology-icon">
                            <img src={require("../images/edamam.svg")} alt="edamam" id="edamam"/>
                        </div>
                        <div className="technology-name">
                            Edamam API
                        </div>
                    </div>
                </div>
            </div>
        </Element>
    )
}

export default Hattrick
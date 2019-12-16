import React from 'react'
import "./skills.css"
import { Element } from 'react-scroll'

function Skills () {
    return (
        <Element name="skills" id="skills-section">
            <div className="section-header">
                Skills
            </div>
            <div className="project-container" id="hattrick">
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
                            <img src={require("../images/github.png")} alt="github" id="github-skill"/>
                        </div>
                        <div className="technology-name">
                            GitHub
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
                            <img src={require("../images/css.svg")} alt="css" id="css"/>
                        </div>
                        <div className="technology-name">
                            CSS3
                        </div>
                    </div>
                    <div className="technology-col">
                        <div className="technology-icon">
                            <img src={require("../images/html.png")} alt="html" id="html"/>
                        </div>
                        <div className="technology-name">
                            HTML5
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
                            <img src={require("../images/ejs.png")} alt="ejs" id="ejs"/>
                        </div>
                        <div className="technology-name">
                            EJS
                        </div>
                    </div>
                    <div className="technology-col">
                        <div className="technology-icon">
                            <img src={require("../images/jquery.png")} alt="jquery" id="jquery"/>
                        </div>
                        <div className="technology-name">
                            jQuery
                        </div>
                    </div>
                </div>
            </div>
        </Element>
    )
}

export default Skills
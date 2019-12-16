import React from 'react'
import "../Portfolio/portfolio.css"
import { Element } from 'react-scroll'

const PokemonBlackjack = () => {
    return(
        <Element name="pokemon-blackjack" className="project-container" id="pokemon-blackjack">
            <div className="project-title">
                Pokemon-Blackjack
            </div>
            <div className="project-description">
                Pokemon Blackjack is blackjack stylized within the Pokemon universe. Play it <a rel="noopener noreferrer" target="_blank" href="https://jonhuynh05.github.io/project1-blackjack/">here</a>.
            </div>
            <div className="project-image">
                <img src={require("../images/pokemon-blackjack.png")} alt="pokemon-blackjack"/>
            </div>
            <div className="technology-description">
                <div className="technology-header">
                    Technologies Used
                </div>
                <div className="technology-row">
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
                            <img src={require("../images/html.png")} alt="html" id="html"/>
                        </div>
                        <div className="technology-name">
                            HTML5
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
                            <img src={require("../images/jquery.png")} alt="jquery" id="jquery"/>
                        </div>
                        <div className="technology-name">
                            jQuery
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
                </div>
            </div>
        </Element>
    )
}

export default PokemonBlackjack
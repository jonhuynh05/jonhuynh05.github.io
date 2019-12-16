import React from 'react'
import "./portfolio.css"
import { Element } from 'react-scroll'
import BlueSpotlight from "../BlueSpotlight"
import PokemonBlackjack from "../PokemonBlackjack"
import Hattrick from "../Hattrick"
import LoLInspector from "../LoLInspector"

function Portfolio () {
    return (
        <Element name="portfolio" id="portfolio-section">
            <div className="section-header">
                Portfolio
            </div>
            <LoLInspector/>
            <div className="bar-divider"></div>
            <Hattrick/>
            <div className="bar-divider"></div>
            <BlueSpotlight/>
            <div className="bar-divider"></div>
            <PokemonBlackjack/>
            <div className="bar-divider"></div>
        </Element>
    )
}

export default Portfolio
import React, { useState } from "react";
import './welcomeSection.scss';
import loop from "../../../img/icons/loop.svg";
import Grid from "@material-ui/core/Grid";

const WelcomeSection = (props) => {
    const { setForm, form, setPage } = props;
    const [btnTextLost, setBtnText] = useState('I lost my pet');
    const [btnTextFound, setBtnTextFound] = useState('I found a pet');
    const [hoveredLost, setHoverLost] = useState(false);
    const [hoveredFound, setHoverFound] = useState(false);
    const [hoveredLostBack, setHoverLostBack] = useState(false);
    const [hoveredFoundBack, setHoverFoundBack] = useState(false);

    return (
        <Grid container direction="row" className={form ? "welcome-section under-form" : "welcome-section"}>
            <Grid container item direction="column" sm={6} xs={3} className="welcome-text">
                <p>Welcome to your<br/>
                    <span>pawfessional</span><br/>
                community</p>
                <div className="i-lost-pet" onClick={() => {
                    setPage('lost');
                    setForm(true);
                }} onMouseEnter={() => {
                    setHoverLost(true);
                    setHoverLostBack(false);
                    setBtnText('Click to find!');
                }}
                     onMouseLeave={() => {
                         setHoverLostBack(true);
                         setHoverLost(false);
                         setBtnText('I lost my pet');
                     }}>
                    <span className={hoveredLost ? "i-lost-pet-text animated" :
                        hoveredLostBack ? "i-lost-pet-text animated-back" : "i-lost-pet-text"}>{btnTextLost}</span>
                    <img src={loop} alt="loop"/>
                </div>
                <div className="i-found-pet" onClick={() => {
                    setForm(true);
                }} onMouseEnter={() => {
                    setHoverFound(true);
                    setHoverFoundBack(false);
                    setBtnTextFound('What to do?');
                }}
                onMouseLeave={() => {
                    setHoverFound(false);
                    setHoverFoundBack(true);
                    setBtnTextFound('I found a pet');
                }}>
                    <span className={hoveredFound ? "animated" : hoveredFoundBack ? "animated-back" : ""}>{btnTextFound}</span>
                </div>
                <p className="join">I'm okay, just want to <span>JOIN</span> the pawsome community!</p>
            </Grid>
            <Grid container item sm={6} xs={9} className="dog"/>
        </Grid>
    )
};

export default WelcomeSection;
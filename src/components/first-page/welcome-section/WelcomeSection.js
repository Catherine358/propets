import React from "react";
import './welcomeSection.scss';
import loop from "../../../img/icons/loop.svg";
import Grid from "@material-ui/core/Grid";

const WelcomeSection = (props) => {
    return (
        <Grid container direction="row" className="welcome-section">
            <Grid container item direction="column" sm={6} className="welcome-text">
                <p>Welcome to your<br/>
                    <span>pawfessional</span><br/>
                community</p>
                <div className="i-lost-pet">
                    <span className="i-lost-pet-text">I lost my pet</span>
                    <img src={loop} alt="loop"/>
                </div>
                <div className="i-found-pet">
                    <span>I found a pet</span>
                </div>
                <p className="join">I'm okay, just want to <span>JOIN</span> the pawsome community!</p>
            </Grid>
            <Grid container item sm={6} className="dog"/>
        </Grid>
    )
};

export default WelcomeSection;
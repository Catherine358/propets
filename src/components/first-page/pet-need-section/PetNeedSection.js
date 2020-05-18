import React from "react";
import './petNeedSection.scss';
import Grid from "@material-ui/core/Grid";

const PetNeedSection = (props) => {
    return (
        <Grid container direction="row" className="pet-need-section">
            <Grid container item sm={6} className="pets"/>
            <Grid container item direction="column" sm={6} className="needs">
                <p>Here is collected everything that your pet needs:</p>
                <ul>
                    <li><span>professional veterinarian tips;</span></li>
                    <li><span>useful information about education and care;</span></li>
                    <li><span>fostering home search;</span></li>
                    <li><span>information about pet-sitting and walking service;</span></li>
                    <li><span>and of course, great communication with new friends in your social network!</span></li>
                </ul>
            </Grid>
        </Grid>
    )
};

export default PetNeedSection;
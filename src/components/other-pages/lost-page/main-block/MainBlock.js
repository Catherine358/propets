import React from "react";
import './mainBlock.scss';
import Grid from "@material-ui/core/Grid";
import PetInfo from "./pet-info";

const MainBlock = (props) => {
    return (
        <Grid container direction="row" className="main-block-lost">
            <div className="tags-for-search">
                <input type="text" placeholder="Type"/>
                <input type="text" placeholder="Breed"/>
                <input type="text" placeholder="Additional features"/>
                <input type="text" placeholder="Location"/>
            </div>
            <Grid container item sm={9}>
                <PetInfo/>
                <PetInfo/>
            </Grid>
            <Grid container item sm={3}>

            </Grid>
        </Grid>
    )
};

export default MainBlock;
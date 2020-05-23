import React from "react";
import './mainBlock.scss';
import Grid from "@material-ui/core/Grid";
import PetInfo from "./pet-info";
import GoogleMap from "./google-map";

const MainBlock = (props) => {
    return (
        <Grid container direction="row" className="main-block-lost">
            <div className="tags-for-search">
                <input type="text" placeholder="Type"/>
                <input type="text" placeholder="Breed"/>
                <input type="text" placeholder="Additional features"/>
                <input type="text" placeholder="Location"/>
            </div>
            <Grid container item sm={8}>
                <PetInfo/>
                <PetInfo/>
            </Grid>
            <Grid container item sm={4} className="map-container">
                <span><i className="fas fa-chevron-left"/>Expand map</span>
                <GoogleMap/>
            </Grid>
        </Grid>
    )
};

export default MainBlock;
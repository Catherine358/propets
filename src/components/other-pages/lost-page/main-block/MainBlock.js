import React, { useState } from "react";
import './mainBlock.scss';
import Grid from "@material-ui/core/Grid";
import PetInfo from "./pet-info";
import GoogleMap from "./google-map";
import Button from "@material-ui/core/Button";

const MainBlock = (props) => {
    const [map, setMap] = useState(false);

    return (
        <Grid container direction="row" className="main-block-lost">
            <Grid container item md={9} lg={12}>
                <Grid container direction="column">
                    <div className="tags-for-search">
                        <input type="text" placeholder="Type"/>
                        <input type="text" placeholder="Breed"/>
                        <input type="text" placeholder="Additional features"/>
                        <input type="text" placeholder="Location"/>
                        {!map ? <Button className="map-view-btn" variant="contained" onClick={() => {
                            setMap(true);
                        }}><i className="fa fa-map-marked"/>Map view</Button> :
                        <Button className="list-view-btn" variant="contained" onClick={() => {
                            setMap(false);
                        }}><i className="fas fa-list"/>List view</Button>}
                    </div>
                    {map ?
                        <Grid container item lg={8}>
                            <GoogleMap/>
                        </Grid>
                        : <Grid container direction="row">
                        <Grid container item lg={8}>
                            <PetInfo/>
                            <PetInfo/>
                        </Grid>
                        <Grid container item lg={4} className="map-container">
                            <span><i className="fas fa-chevron-left"/>Expand map</span>
                            <GoogleMap/>
                        </Grid>
                    </Grid>}
                </Grid>
            </Grid>
            <Grid container item sm={3} className="lost-right-side"/>
        </Grid>
    )
};

export default MainBlock;
import React from "react";
import './comingSoon.scss';
import Grid from "@material-ui/core/Grid";
import love from "../../../img/icons/love.svg";

const ComingSoon = (props) => {
    return (
        <Grid container direction="row" className="coming-soon-section">
            <Grid container item sm={5} className="coming-soon">
                <p>Coming soon</p>
            </Grid>
            <Grid container item sm={4} className="coming-soon-text">
                <p>We are planing to open a new service,<br/> where your cats and dogs can find their love!</p>
            </Grid>
            <Grid container item sm={3} className="love">
                <i className="far fa-heart"/>
                <p>Love</p>
            </Grid>
        </Grid>
    )
};

export default ComingSoon;
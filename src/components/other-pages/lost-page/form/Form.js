import React from "react";
import './form.scss';
import Grid from "@material-ui/core/Grid";

const FormMainBlock = (props) => {
    return (
        <Grid container direction="row" className="main-block-lost-form">
            <Grid container item sm={8}>
            </Grid>
            <Grid container item sm={4} className="form-right-side"/>
        </Grid>
    )
};

export default FormMainBlock;
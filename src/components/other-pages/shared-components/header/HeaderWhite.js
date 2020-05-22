import React from "react";
import './headerWhite.scss';
import Grid from "@material-ui/core/Grid";
import logo from "../../../../img/icons/logo_green.svg";
import Button from "@material-ui/core/Button";

const HeaderWhite = (props) => {
    return (
        <Grid container direction="row" className="header-white">
            <Grid container item sm={6} xs={10}>
                <img src={logo} alt="logo" className="header-white-logo"/>
            </Grid>
            <Grid container item sm={6} justify="center">
                <Button className="header-white-lost-btn" variant="contained"><i className="fas fa-search"/>I lost my pet</Button>
                <Button className="header-white-found-btn" variant="contained"><i className="fas fa-paw"/>I found a pet</Button>
            </Grid>
        </Grid>
    )
};

export default HeaderWhite;
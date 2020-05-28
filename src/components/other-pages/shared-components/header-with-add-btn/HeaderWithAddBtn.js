import React from "react";
import './headerWithAddBtn.scss';
import Grid from "@material-ui/core/Grid";
import logo from "../../../../img/icons/logo_green.svg";
import Button from "@material-ui/core/Button";

const HeaderWithAddBtn = (props) => {

    return (
        <Grid container direction="row" className="header-add">
            <Grid sm={1} container item justify="center" className="header-add-menu-burger-btn">
                <span className="burger">&#9776;</span>
            </Grid>
            <Grid container item lg={6} md={3} sm={3}>
                <img src={logo} alt="logo" className="header-add-logo"/>
            </Grid>
            <Grid container item lg={6} md={9} sm={8} justify="center">
                <Button className="header-add-btn" variant="contained"><i className="fas fa-plus"/>Add new</Button>
            </Grid>
        </Grid>
    )
};

export default HeaderWithAddBtn;
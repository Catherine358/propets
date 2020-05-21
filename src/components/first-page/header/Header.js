import React from "react";
import './header.scss';
import logo from "../../../img/icons/logo.svg";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";

const Header = (props) => {
    const { setForm } = props;

    return (
        <Grid container direction="row" className="header">
            <Grid xs={2} container item justify="center" className="menu-burger-btn">
                        <span className="burger">&#9776;</span>
            </Grid>
            <Grid container item sm={6} xs={10}>
                <img src={logo} alt="logo" className="header-logo"/>
            </Grid>
            <Grid container item sm={6} justify="flex-end">
                <Button className="header-signin-btn" variant="contained" onClick={() => {
                    setForm(true);
                }}>Sign in</Button>
            </Grid>
        </Grid>
    )
};

export default Header;
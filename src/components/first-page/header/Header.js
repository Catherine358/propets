import React from "react";
import './header.scss';
import logo from "../../../img/icons/logo.svg";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";

const Header = (props) => {
    const { setForm, setMenu, menu } = props;

    return (
        <Grid container direction="row" className="header">
            <Grid xs={2} container item justify="center" className="menu-burger-btn">
                {!menu ? <span className="burger" onClick={() => {
                    setMenu(true);
                    }}>&#9776;</span> :
                <span className="cross" onClick={() => {
                    setMenu(false);
                }}>x</span>}
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
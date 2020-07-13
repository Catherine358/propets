import React, {useContext} from "react";
import './headerWhite.scss';
import Grid from "@material-ui/core/Grid";
import logo from "../../../../img/icons/logo_green.svg";
import Button from "@material-ui/core/Button";
import { withRouter } from "react-router";
import {Context} from "../../../../context";

const HeaderWhite = (props) => {
    const { history, setMenu, menu } = props;
    const context = useContext(Context);

    return (
        <Grid container direction="row" className="header-white">
            <Grid sm={1} container item justify="center" className="header-white-menu-burger-btn">
                {!menu ? <span className="burger" onClick={() => {
                        setMenu(true);
                    }}>&#9776;</span> :
                    <span className="cross" onClick={() => {
                        setMenu(false);
                    }}>x</span>}
            </Grid>
            <Grid container item lg={6} md={3} sm={3}>
                <img src={logo} alt="logo" className="header-white-logo"/>
            </Grid>
            <Grid container item lg={6} md={9} sm={8} justify="center">
                <Button className="header-white-lost-btn" variant="contained" onClick={() => {
                    context.setPage('lost');
                    history.push("/lost/form");
                }}><i className="fas fa-search"/>I lost my pet</Button>
                <Button className="header-white-found-btn" variant="contained" onClick={() => {
                    context.setPage('found');
                    history.push("/found/form");
                }}><i className="fas fa-paw"/>I found a pet</Button>
            </Grid>
        </Grid>
    )
};

export default withRouter(HeaderWhite);
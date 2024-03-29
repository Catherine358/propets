import React from "react";
import './headerWithAddBtn.scss';
import Grid from "@material-ui/core/Grid";
import logo from "../../../../img/icons/logo_green.svg";
import Button from "@material-ui/core/Button";
import {Link} from "react-router-dom";

const HeaderWithAddBtn = (props) => {
    const { setMenu, menu } = props;

    return (
        <Grid container direction="row" className="header-add">
            <Grid sm={1} md={1} container item justify="center" className="header-add-menu-burger-btn">
                {!menu ? <span className="burger" onClick={() => {
                        setMenu(true);
                    }}>&#9776;</span> :
                    <span className="cross" onClick={() => {
                        setMenu(false);
                    }}>x</span>}
            </Grid>
            <Grid container item lg={6} md={3} sm={3}>
                <img src={logo} alt="logo" className="header-add-logo"/>
            </Grid>
            <Grid container item lg={6} md={8} sm={8} justify="center">
                <Link to={"/propets/home/new_post"}>
                    <Button className="header-add-btn" variant="contained"><i className="fas fa-plus"/>Add new</Button>
                </Link>
            </Grid>
        </Grid>
    )
};

export default HeaderWithAddBtn;
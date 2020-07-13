import React, { useState } from "react";
import './headerForMobile.scss';
import logo from "../../../../../img/icons/logo.svg";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import { withRouter } from "react-router";
import {Link} from "react-router-dom";

const HeaderForMobile = (props) => {
    const { history, type, setMenu, menu } = props;
    const [buttons, setButtons] = useState(false);

    return (
        <Grid container direction="column">
            <Grid container direction="row" className="header-for-mobile">
                <Grid xs={2} container item justify="center" className="menu-burger-btn">
                    {!menu ? <span className="burger" onClick={() => {
                        setMenu(true);
                    }}>&#9776;</span> :
                    <span className="cross" onClick={() => {
                        setMenu(false);
                    }}>x</span>}
                </Grid>
                <Grid container item xs={9}>
                    <img src={logo} alt="logo" className="header-logo"/>
                </Grid>
                {type !== "form" && type !== "add-post" && <Grid container item xs={1}>
                    {!buttons ? <i className="fas fa-arrow-down" onClick={() => {
                        setButtons(true);
                    }}/> :
                    <i className="fas fa-arrow-up" onClick={() => {
                        setButtons(false);
                    }}/>}
                </Grid>}
                {type === "add-post" &&
                    <Link to={"/propets/home/new_post"}>
                        <i className="fas fa-plus"/>
                    </Link>}
            </Grid>
            {buttons && <div className="header-for-mobile-buttons">
                <Button className="header-for-mobile-lost-btn" variant="contained" onClick={() => {
                    history.push("/propets/lost/form");
                }}><i className="fas fa-search"/>I lost my pet</Button>
                <Button className="header-for-mobile-found-btn" variant="contained" onClick={() => {
                    history.push("/propets/found/form");
                }}><i className="fas fa-paw"/>I found a pet</Button>
            </div>}
        </Grid>
    )
};

export default withRouter(HeaderForMobile);
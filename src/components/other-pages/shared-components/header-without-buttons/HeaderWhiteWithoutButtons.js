import React from "react";
import '../header/headerWhite.scss';
import Grid from "@material-ui/core/Grid";
import logo from "../../../../img/icons/logo_green.svg";

const HeaderWhiteWithoutButtons = (props) => {
    const { setMenu, menu } = props;

    return (
        <Grid container direction="row" className="header-white">
            <Grid sm={1} md={1} container item justify="center" className="header-white-menu-burger-btn">
                {!menu ? <span className="burger" onClick={() => {
                        setMenu(true);
                    }}>&#9776;</span> :
                    <span className="cross" onClick={() => {
                        setMenu(false);
                    }}>x</span>}
            </Grid>
            <Grid container item lg={12} md={11} sm={11}>
                <img src={logo} alt="logo" className="header-white-logo"/>
            </Grid>
        </Grid>
    )
};

export default HeaderWhiteWithoutButtons;
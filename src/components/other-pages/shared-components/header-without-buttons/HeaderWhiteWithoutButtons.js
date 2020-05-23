import React from "react";
import '../header/headerWhite.scss';
import Grid from "@material-ui/core/Grid";
import logo from "../../../../img/icons/logo_green.svg";

const HeaderWhiteWithoutButtons = (props) => {
    return (
        <Grid container direction="row" className="header-white">
            <Grid container item>
                <img src={logo} alt="logo" className="header-white-logo"/>
            </Grid>
        </Grid>
    )
};

export default HeaderWhiteWithoutButtons;
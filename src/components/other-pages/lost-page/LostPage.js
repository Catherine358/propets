import React from "react";
import HeaderWhite from "../shared-components/header";
import Grid from "@material-ui/core/Grid";
import AsideBlock from "../shared-components/aside-block";
import MainBlock from "./main-block";
import HeaderForMobile from "../shared-components/header/header-for-mobile";

const LostPage = (props) => {
    return (
        <div>
            <HeaderWhite props={props}/>
            <div className="header-for-mobile">
                <HeaderForMobile/>
            </div>
            <Grid container direction="row">
                <Grid container item md={3}>
                    <AsideBlock selected={true}/>
                </Grid>
                <Grid container item md={9}>
                    <MainBlock/>
                </Grid>
            </Grid>
        </div>
    )
};

export default LostPage;
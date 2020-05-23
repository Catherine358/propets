import React from "react";
import HeaderWhite from "../shared-components/header";
import Grid from "@material-ui/core/Grid";
import AsideBlock from "../shared-components/aside-block";
import MainBlock from "./main-block";

const LostPage = (props) => {
    return (
        <div>
            <HeaderWhite props={props}/>
            <Grid container direction="row">
                <Grid container item sm={3}>
                    <AsideBlock selected={true}/>
                </Grid>
                <Grid container item sm={9}>
                    <MainBlock/>
                </Grid>
            </Grid>
        </div>
    )
};

export default LostPage;
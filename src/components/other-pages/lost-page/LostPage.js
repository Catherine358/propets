import React from "react";
import HeaderWhite from "../shared-components/header";
import Grid from "@material-ui/core/Grid";
import AsideBlock from "../shared-components/aside-block";

const LostPage = (props) => {
    return (
        <div>
            <HeaderWhite/>
            <Grid container direction="row">
                <Grid container item sm={3}>
                    <AsideBlock/>
                </Grid>
                <Grid container item sm={9}>

                </Grid>
            </Grid>
        </div>
    )
};

export default LostPage;
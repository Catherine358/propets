import React from "react";
import Grid from "@material-ui/core/Grid";
import AsideBlock from "../../shared-components/aside-block";
import HeaderWhiteWithoutButtons from "../../shared-components/header-without-buttons";
import FormMainBlock from "./Form";

const LostPageForm = (props) => {
    return (
        <div>
            <HeaderWhiteWithoutButtons/>
            <Grid container direction="row">
                <Grid container item sm={3}>
                    <AsideBlock selected={false}/>
                </Grid>
                <Grid container item sm={9}>
                    <FormMainBlock/>
                </Grid>
            </Grid>
        </div>
    )
};

export default LostPageForm;
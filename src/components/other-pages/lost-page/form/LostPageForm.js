import React from "react";
import Grid from "@material-ui/core/Grid";
import AsideBlock from "../../shared-components/aside-block";
import HeaderWhiteWithoutButtons from "../../shared-components/header-without-buttons";
import FormMainBlock from "./Form";
import HeaderForMobile from "../../shared-components/header/header-for-mobile";

const LostPageForm = (props) => {
    return (
        <div>
            <HeaderWhiteWithoutButtons/>
            <div className="header-for-mobile">
                <HeaderForMobile type={"form"}/>
            </div>
            <Grid container direction="row">
                <Grid container item md={3}>
                    <AsideBlock selected={false}/>
                </Grid>
                <Grid container item md={9}>
                    <FormMainBlock/>
                </Grid>
            </Grid>
        </div>
    )
};

export default LostPageForm;
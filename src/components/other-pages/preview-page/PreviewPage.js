import React from "react";
import HeaderWhite from "../shared-components/header";
import HeaderForMobile from "../shared-components/header/header-for-mobile";
import Menu from "../shared-components/menu";
import Grid from "@material-ui/core/Grid";
import AsideBlock from "../shared-components/aside-block";
import Preview from "./preview/Preview";
import HeaderWhiteWithoutButtons from "../shared-components/header-without-buttons";

const PreviewPage = (props) => {
    return (
        <div>
            <HeaderWhiteWithoutButtons/>
            {/*<div className="header-for-mobile">*/}
            {/*    <HeaderForMobile type={""} setMenu={setMenu} menu={menu}/>*/}
            {/*</div>*/}
            {/*{menu && <Menu/>}*/}
            <Grid container direction="row">
                <Grid container item md={3}>
                    <AsideBlock selected={false}/>
                </Grid>
                <Grid container item md={9}>
                    <Preview/>
                </Grid>
            </Grid>
        </div>
    )
};

export default PreviewPage;
import React from "react";
import HeaderWhiteWithoutButtons from "../shared-components/header-without-buttons";
import Grid from "@material-ui/core/Grid";
import AsideBlock from "../shared-components/aside-block";
import Profile from "./profile";

const ProfilePage = (props) => {
    const { page } = props;

    return (
        <div className="wrapper-main">
            <HeaderWhiteWithoutButtons/>
            {/*<div className="header-for-mobile">*/}
            {/*    <HeaderForMobile type={""} setMenu={setMenu} menu={menu}/>*/}
            {/*</div>*/}
            {/*{menu && <Menu/>}*/}
            <Grid container direction="row">
                <Grid container item md={3}>
                    <AsideBlock selected={false} page={page}/>
                </Grid>
                <Grid container item md={9}>
                    <Profile/>
                </Grid>
            </Grid>
        </div>
    )
};

export default ProfilePage;
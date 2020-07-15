import React, { useState } from "react";
import HeaderWhiteWithoutButtons from "../shared-components/header-without-buttons";
import Grid from "@material-ui/core/Grid";
import AsideBlock from "../shared-components/aside-block";
import Profile from "./profile";
import HeaderForMobile from "../shared-components/header/header-for-mobile";
import Menu from "../shared-components/menu";

const ProfilePage = (props) => {
    const { page, user } = props;
    const [menu, setMenu] = useState(false);

    return (
        <div className="wrapper-main">
            <HeaderWhiteWithoutButtons setMenu={setMenu} menu={menu}/>
            <div className="header-for-mobile">
                <HeaderForMobile type={"form"} setMenu={setMenu} menu={menu}/>
            </div>
            {menu && <Menu user={user}/>}
            <Grid container direction="row">
                <Grid container item md={3} className="aside-block-container2">
                    <AsideBlock selected={false} page={page} user={user}/>
                </Grid>
                <Grid container item md={9}>
                    <Profile user={user}/>
                </Grid>
            </Grid>
        </div>
    )
};

export default ProfilePage;
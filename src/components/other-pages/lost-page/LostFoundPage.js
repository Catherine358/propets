import React, {useState} from "react";
import HeaderWhite from "../shared-components/header";
import Grid from "@material-ui/core/Grid";
import AsideBlock from "../shared-components/aside-block";
import MainBlock from "./main-block";
import HeaderForMobile from "../shared-components/header/header-for-mobile";
import Menu from "../shared-components/menu";
import MenuMini from "../shared-components/aside-block/MenuMini";

const LostFoundPage = (props) => {
    const [menu, setMenu] = useState(false);
    const [bigMap, setBigMap] = useState(false);
    const { page } = props;

    return (
        <div className="wrapper-main">
            <HeaderWhite props={props}/>
            <div className="header-for-mobile">
                <HeaderForMobile type={""} setMenu={setMenu} menu={menu}/>
            </div>
            {menu && <Menu/>}
            <Grid container direction="row">
                {!bigMap && <Grid container item md={3}>
                    <AsideBlock page={page} selected={true}/>
                </Grid>}
                {bigMap && <Grid container item md={2}>
                    <MenuMini page={page}/>
                </Grid>}
                <Grid container item md={bigMap ? 10 : 9}>
                    <MainBlock setBigMap={setBigMap} bigMap={bigMap}/>
                </Grid>
            </Grid>
        </div>
    )
};

export default LostFoundPage;
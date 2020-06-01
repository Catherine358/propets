import React, {useState} from "react";
import HeaderWithAddBtn from "../shared-components/header-with-add-btn";
import Grid from "@material-ui/core/Grid";
import AsideBlock from "../shared-components/aside-block";
import Favourites from "./favourites";
import HeaderForMobile from "../shared-components/header/header-for-mobile";
import Menu from "../shared-components/menu";

const FavouritesPage = (props) => {
    const { page } = props;
    const [menu, setMenu] = useState(false);

    return (
        <div className="wrapper-main">
            <HeaderWithAddBtn setMenu={setMenu} menu={menu}/>
            <div className="header-for-mobile">
                <HeaderForMobile type={"add-post"} setMenu={setMenu} menu={menu}/>
            </div>
            {menu && <Menu/>}
            <Grid container direction="row">
                <Grid container item md={3} className="aside-block-container2">
                    <AsideBlock selected={true} page={page}/>
                </Grid>
                <Grid container item md={9}>
                    <Favourites/>
                </Grid>
            </Grid>
        </div>
    )
};

export default FavouritesPage;
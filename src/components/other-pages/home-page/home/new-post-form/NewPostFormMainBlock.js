import React, {useState} from "react";
import HeaderWhiteWithoutButtons from "../../../shared-components/header-without-buttons";
import HeaderForMobile from "../../../shared-components/header/header-for-mobile";
import Menu from "../../../shared-components/menu";
import Grid from "@material-ui/core/Grid";
import AsideBlock from "../../../shared-components/aside-block";
import NewPost from "./NewPost";

const NewPostForm = (props) => {
    const [menu, setMenu] = useState(false);

    return (
        <div className="wrapper-main">
            <HeaderWhiteWithoutButtons/>
            <div className="header-for-mobile">
                <HeaderForMobile type={"form"} setMenu={setMenu} menu={menu}/>
            </div>
            {menu && <Menu/>}
            <Grid container direction="row">
                <Grid container item md={3}>
                    <AsideBlock selected={false}/>
                </Grid>
                <Grid container item md={9}>
                    <NewPost/>
                </Grid>
            </Grid>
        </div>
    )
};

export default NewPostForm;
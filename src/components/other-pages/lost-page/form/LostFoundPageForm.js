import React, {useState} from "react";
import Grid from "@material-ui/core/Grid";
import AsideBlock from "../../shared-components/aside-block";
import HeaderWhiteWithoutButtons from "../../shared-components/header-without-buttons";
import FormMainBlock from "./Form";
import HeaderForMobile from "../../shared-components/header/header-for-mobile";
import Menu from "../../shared-components/menu";

const LostFoundPageForm = (props) => {
    const [menu, setMenu] = useState(false);
    const { page } = props;

    return (
        <div className="wrapper-main">
            <HeaderWhiteWithoutButtons/>
            <div className="header-for-mobile">
                <HeaderForMobile type={"form"} setMenu={setMenu} menu={menu}/>
            </div>
            {menu && <Menu/>}
            <Grid container direction="row">
                <Grid container item sm={3} className="aside-block-container">
                    <AsideBlock selected={false}/>
                </Grid>
                <Grid container item sm={9}>
                    <FormMainBlock page={page}/>
                </Grid>
            </Grid>
        </div>
    )
};

export default LostFoundPageForm;
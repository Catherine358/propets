import React, {useState} from "react";
import HeaderWhiteWithoutButtons from "../../../shared-components/header-without-buttons";
import HeaderForMobile from "../../../shared-components/header/header-for-mobile";
import Menu from "../../../shared-components/menu";
import Grid from "@material-ui/core/Grid";
import AsideBlock from "../../../shared-components/aside-block";
import NewPost from "./NewPost";

const NewPostForm = (props) => {
    const { user } = props;
    const [menu, setMenu] = useState(false);

    return (
        <div className="wrapper-main">
            <HeaderWhiteWithoutButtons/>
            <div className="header-for-mobile">
                <HeaderForMobile type={"form"} setMenu={setMenu} menu={menu}/>
            </div>
            {menu && <Menu user={user}/>}
            <Grid container direction="row">
                <Grid container item sm={3} className="aside-block-container">
                    <AsideBlock selected={false} page="" user={user}/>
                </Grid>
                <Grid container item sm={9}>
                    <NewPost user={user}/>
                </Grid>
            </Grid>
        </div>
    )
};

export default NewPostForm;
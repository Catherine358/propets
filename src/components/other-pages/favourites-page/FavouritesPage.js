import React from "react";
import HeaderWithAddBtn from "../shared-components/header-with-add-btn";
import Grid from "@material-ui/core/Grid";
import AsideBlock from "../shared-components/aside-block";
import Favourites from "./favourites";

const FavouritesPage = (props) => {
    const { page } = props;

    return (
        <div>
            <HeaderWithAddBtn/>
            <Grid container direction="row">
                <Grid container item md={3}>
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
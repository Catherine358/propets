import React from "react";
import '../../home-page/home/post.scss';
import Grid from "@material-ui/core/Grid";
import Post from "../../home-page/home/post";

const Favourites = (props) => {
    return (
        <Grid container direction="row" className="post-container">
            <Grid container item lg={8}>
                <p className="favourite-header">Your favorites. Find them here anytime.</p>
                <Post favourite={true}/>
                <Post favourite={true}/>
            </Grid>
            <Grid container item lg={4} className="post-right-side"/>
        </Grid>
    )
};

export default Favourites;
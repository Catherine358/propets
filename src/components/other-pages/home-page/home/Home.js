import React from "react";
import './post.scss';
import Grid from "@material-ui/core/Grid";
import Post from "./post";

const Home = (props) => {
    return (
        <Grid container direction="row">
            <Grid container item lg={8}>
                <Post/>
                <Post/>
            </Grid>
            <Grid container item lg={4} className="post-right-side"/>
        </Grid>
    )
};

export default Home;
import React from "react";
import './post.scss';
import Grid from "@material-ui/core/Grid";
import Post from "./post";

const Home = (props) => {
    return (
        <Grid container direction="row" className="post-container">
            <Grid container item lg={8} md={11} direction="column">
                <Post favourite={false}/>
                <Post favourite={false}/>
            </Grid>
            <Grid container item lg={4} md={1} className="post-right-side"/>
        </Grid>
    )
};

export default Home;
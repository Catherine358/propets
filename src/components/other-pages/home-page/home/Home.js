import React, {useEffect, useState} from "react";
import './post.scss';
import Grid from "@material-ui/core/Grid";
import Post from "./post";
import {getAllPosts} from "../../../../services";
import Spinner from "../../../../spinner/Spinner";

const Home = (props) => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
       async function fetchAllPosts() {
           await getAllPosts()
               .then(data => {
                   console.log(data)
                   setPosts(data.posts);
               })
               .catch(error => console.log(error));
       }
       fetchAllPosts();
    }, []);

    const arrTmp = [];

    posts.forEach(post => {
        arrTmp.push(<Post favourite={false} post={post}/>);
    });

    return (
        <Grid container direction="row" className="post-container">
            <Grid container item lg={8} md={11} direction="column">
                {posts.length > 0 ? arrTmp : <Spinner/>}
            </Grid>
            <Grid container item lg={4} md={1} className="post-right-side"/>
        </Grid>
    )
};

export default Home;
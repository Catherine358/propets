import React, {useEffect, useState} from "react";
import '../../home-page/home/post.scss';
import Grid from "@material-ui/core/Grid";
import Post from "../../home-page/home/post";
import {getFavouritePosts} from "../../../../services";
import Spinner from "../../../../spinner/Spinner";

const Favourites = (props) => {
    const [postsFav, setFavorites] = useState([]);

    useEffect(() => {
        const email = localStorage.getItem('email');
        async function fetchPostsFavourites(email) {
            await getFavouritePosts(email)
                .then(data => {
                    console.log(data)
                    setFavorites(data);
                })
                .catch(error => console.log(error));
        }
        //fetchPostsFavourites(email);
    }, []);

    const arrTmp = [];

    postsFav.forEach(post => {
        arrTmp.push(<Post favourite={true} post={post.otherPosts}/>);
    });

    return (
        <Grid container direction="row" className="post-container">
            <Grid container item lg={8} md={11} direction="column">
                <p className="favourite-header">Your favorites. Find them here anytime.</p>
                {postsFav.length > 0 ? arrTmp : <Spinner/>}
            </Grid>
            <Grid container item lg={4} md={1} className="post-right-side"/>
        </Grid>
    )
};

export default Favourites;
import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
import {countWhenPosted} from "../../../../../utils";

const Post = (props) => {
    const { favourite, post } = props;
    const [miniMenu, setMenu] = useState(false);
    const [fav, setFavourite] = useState(false);

    let timeAgoPosted;

    if(Object.entries(post).length !== 0) {
        timeAgoPosted = countWhenPosted(post.datePost);
        console.log(timeAgoPosted)
    }

    return (
        <div className="post-left-side">
            <div className="post-header">
                <img src={post.avatar} alt="dog-photo-small"/>
                <div className="post-header-text">
                    <p>{post.username}</p>
                    <p className="time">{
                        timeAgoPosted !== undefined ?
                            timeAgoPosted.hours === 0 ?
                                timeAgoPosted.min + ' m' :
                                timeAgoPosted.days === 0 ?
                                    timeAgoPosted.hours + ' h' :
                                    timeAgoPosted.years === 0 ?
                                        timeAgoPosted.days + ' d' :
                                        timeAgoPosted.years + ' y' : ''
                    }</p>
                </div>
                {!favourite && <div className="post-icon">
                    <i className="fas fa-ellipsis-h" onClick={() => {
                        setMenu(!miniMenu);
                    }}/>
                </div>}
                {miniMenu && <div className="mini-menu">
                    <span><i className="fas fa-eye-slash"/>Hide from feed</span>
                    <span><i className="fas fa-times"/>Unfollow</span>
                </div>}
            </div>
            <Grid container direction="row" className="post-text">
                <Grid container item sm={2}/>
                <Grid container item sm={8} justify="center">
                    <img src={post.images[0]} alt="pet"/>
                    <p>{post.text}
                        <span>…more</span>
                    </p>
                </Grid>
                {!favourite ? <Grid container item sm={2} justify="flex-end">
                        {!fav ? <i className="far fa-star" onClick={() => {
                                setFavourite(true);
                            }}/> :
                            <i className="fas fa-star favourite" onClick={() => {
                                setFavourite(false);
                            }}/>}
                    </Grid> :
                    <Grid container item sm={2} justify="flex-end">
                        <i className="fas fa-star favourite" style={{cursor: "auto"}}/>
                    </Grid>
                }
            </Grid>
        </div>
    )
};

export default Post;
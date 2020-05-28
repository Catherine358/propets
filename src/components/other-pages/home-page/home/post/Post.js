import React, {useState} from "react";
import pic from "../../../../../img/dog-photo-small.png";
import photo from "../../../../../img/pet_photo.png";
import Grid from "@material-ui/core/Grid";

const Post = (props) => {
    const { favourite } = props;
    const [miniMenu, setMenu] = useState(false);
    const [fav, setFavourite] = useState(false);

    return (
        <div className="post-container">
            <div className="post-header">
                <img src={pic} alt="dog-photo-small"/>
                <div className="post-header-text">
                    <p>John Goodboi</p>
                    <p className="time">2 h</p>
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
                    <img src={photo} alt="pet"/>
                    <p>The quick, brown fox jumps over a lazy dog. DJs flock by when MTV ax quiz prog. Junk MTV quiz graced by fox whelps. Bawds jog, flick quartz, vex nymphs. Waltz, bad nymph, for jigs vex! Fox nymphs grab quick-jived waltz. Brick whangs jumpy veldt fox. Bright vixens jump; dozy fowl quack
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
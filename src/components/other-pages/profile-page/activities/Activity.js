import React from "react";
import './activity.scss';
import Grid from "@material-ui/core/Grid";
import photo from "../../../../img/pet_photo.png";
import pic from "../../../../img/dog-photo-small.png";

const Activity = (props) => {
    const { inactive } = props;

    return (
        <Grid container direction="row" className={inactive ? "activity-container inactive" : "activity-container"}>
            <Grid container item xs={5} className="pet-photo" style={{backgroundImage: `url(${photo})`}}/>
            <Grid container item xs={7} className="pet-info">
                <div>
                    <p className="breed">Dog, Golden Retriever</p>
                    <i className="fas fa-pencil-alt"/>
                    <i className="fas fa-trash-alt"/>
                </div>
                <Grid container direction="row" className="details">
                    <Grid container item sm={6}>
                        <p><span>Color:</span> golden</p>
                        <p><span>Sex:</span> male</p>
                        <p><span>Height:</span> 45 cm</p>
                    </Grid>
                    <Grid container item sm={6}>
                        <p><span>Distinctive features:</span> blue coller with stars, no left ear, damaged tail</p>
                    </Grid>
                </Grid>
                <p className="description"><span>Description:</span> brown fox jumps over a lazy dog. DJs flock by when MTV ax quiz prog. Junk MTV quiz graced by fox whelps. Bawds jog, flick quartz, vex nymphs.</p>
                <div className="info-footer">
                    <p><i className="fas fa-map-marker"/>Florentin, 27, Tel Aviv</p>
                    <Grid container direction="row">
                        <Grid container item xs={8} className="footer-picture-name-container">
                            <img src={pic} alt="dog-photo-small"/>
                            <div>
                                <p>John Goodboi</p>
                                <p className="date">Dec 12 2019</p>
                            </div>
                        </Grid>
                        <Grid container item xs={4} className="icons" justify="flex-end"alignItems="flex-end">
                            <i className="fas fa-phone-square-alt"/>
                            <i className="fab fa-facebook-square"/>
                            <i className="fas fa-envelope-square"/>
                        </Grid>
                    </Grid>
                </div>
            </Grid>
        </Grid>
    )
};

export default Activity;
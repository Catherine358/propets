import React from "react";
import './petInfo.scss';
import Grid from "@material-ui/core/Grid";
import photo from "../../../../../img/pet_photo.png";
import pic from "../../../../../img/dog-photo-small.png";
import Moment from 'moment';

const PetInfo = (props) => {
    const { username, avatar, type, breed, sex, photos, address, location, tags, datePost } = props.post;

    let features = "";
    tags.forEach(tag => {
        if(tag === tags[tags.length - 1]){
            features += tag;
        } else {
            features += tag + ", ";
        }
    });

    return (
        <Grid container direction="row" className="pet-info-container">
            <Grid container item sm={5} className="pet-photo" style={{backgroundImage: `url(${photo})`}}/>
            <Grid container item sm={7} className="pet-info">
                <div className="pet-photo-mini" style={{backgroundImage: `url(${photo})`}}/>
                <Grid container direction="row" className="details">
                    <p className="breed">{type}, {breed}</p>
                    <Grid container item sm={6}>
                        <p><span>Color:</span> no clolor chosen</p>
                        <p><span>Sex:</span> {sex}</p>
                        <p><span>Height:</span> no height chosen</p>
                    </Grid>
                    <Grid container item sm={6}>
                        <p><span>Distinctive features:</span> {features}</p>
                    </Grid>
                </Grid>
                <p className="description"><span>Description:</span> no description</p>
                <div className="info-footer">
                    <p><i className="fas fa-map-marker"/>{address.street}, {address.building}, {address.city}</p>
                    <Grid container direction="row">
                        <Grid container item xs={8} className="footer-picture-name-container">
                            <img src={avatar} alt="dog-photo-small"/>
                            <div>
                                <p>{username}</p>
                                <p className="date">{Moment(datePost).format("MMM DD YYYY")}</p>
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

export default PetInfo;
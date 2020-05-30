import React from "react";
import './preview.scss';
import Grid from "@material-ui/core/Grid";
import PetInfo from "../../lost-page/main-block/pet-info";
import Button from "@material-ui/core/Button";
import { FacebookShareButton, FacebookIcon } from "react-share";

const url = "http://localhost:3000/lost/preview";

const Preview = (props) => {
    return (
        <Grid container direction="row" className="preview-main-block">
            <Grid container item lg={8} className="preview-left-side" direction="column">
                <p className="header-preview">Preview and Publish. Please share the post to your FB to be more effective.</p>
                <PetInfo/>
                <p className="header-preview">Fingers crossed. We wish your fluffy to be found as soon as possible. Your post will expire in two weeks. To make it active again follow the instructions you’ll get in email.</p>
                <Grid container direction="row">
                    <Grid container item sm={6} className="fb-share" justify="center">
                        <FacebookShareButton url={url}>
                            <FacebookIcon size={16} bgStyle={{fill: "#8DBFAC"}}/>
                            <span>Share to Facebook</span>
                        </FacebookShareButton>
                    </Grid>
                    <Grid container item sm={6} justify="space-around">
                        <Button variant="contained" className="preview-btn-edit"><i className="fas fa-edit"/>Edit</Button>
                        <Button className="preview-submit-btn" variant="contained">
                            <i className="fas fa-paw"/>Publish</Button>
                    </Grid>
                </Grid>
                <div className="preview-agree">
                    <p>By clicking “Publish”, you agree to us processing your information in accordance with these terms.</p>
                </div>
            </Grid>
            <Grid container item lg={4} className="preview-right-side"/>
        </Grid>
    )
};

export default Preview;
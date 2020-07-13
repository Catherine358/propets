import React, {useContext} from "react";
import './preview.scss';
import Grid from "@material-ui/core/Grid";
import PetInfo from "../../lost-page/main-block/pet-info";
import Button from "@material-ui/core/Button";
import { FacebookShareButton, FacebookIcon } from "react-share";
import { Context } from "../../../../context";
import { postFoundPet, postLostPet} from "../../../../services";
import { withRouter } from "react-router";

const onHandleSubmit = (post, history, page) => {
    const email = localStorage.getItem('email');
    console.log(post)
    console.log(page)
    if(page === 'lost') {
        postLostPet(email, post)
            .then(data => {
                console.log(data)
                history.push("/lost");
            })
            .catch(error => console.log(error));
    } else if(page === 'found') {
        postFoundPet(email, post)
            .then(data => {
                console.log(data)
                history.push("/found");
            })
            .catch(error => console.log(error));
    }
};

const Preview = (props) => {
    const { history, page } = props;
    const url = `http://localhost:3000/${page}/preview`;
    const context = useContext(Context);

    console.log(context.page)

    return (
        <Grid container direction="row" className="preview-main-block">
            <Grid container item lg={8} md={11} className="preview-left-side" direction="column">
                <p className="header-preview">Preview and Publish. Please share the post to your FB to be more effective.</p>
                <PetInfo post={context.newPost}/>
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
                        <Button className="preview-submit-btn" variant="contained" onClick={() =>
                            onHandleSubmit(context.newPost, history, context.page)}>
                            <i className="fas fa-paw"/>Publish</Button>
                    </Grid>
                </Grid>
                <div className="preview-agree">
                    <p>By clicking “Publish”, you agree to us processing your information in accordance with these terms.</p>
                </div>
            </Grid>
            <Grid container item lg={4} md={1} className="preview-right-side"/>
        </Grid>
    )
};

export default withRouter(Preview);
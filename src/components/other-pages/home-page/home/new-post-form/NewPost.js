import React from "react";
import './newPost.scss';
import { withRouter } from "react-router";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import { createNewPost } from "../../../../../services";

const onHandleSubmit = (event, history, user) => {
    event.preventDefault();
    const email = localStorage.getItem('email');
    const text = event.target.text.value;
    const photos = ["https://sun6-13.userapi.com/2xuIYHfKJjDhgUT_asXVUaXgJ8e_i2oGomXofQ/eqa5u0PWJi0.jpg"];
    const newPost = {
        username: user.name,
        avatar: user.avatar,
        text: text,
        images: photos
    };
    createNewPost(email, newPost)
        .then(response => {
            console.log(response)
            history.push("/propets/home");
        })
        .catch(error => console.log(error));
};

const NewPost = (props) => {
    const { history, user } = props;

    return (
        <Grid container direction="row" className="new-post-container">
            <Grid container item md={11} lg={8} className="new-post-left-side" direction="column">
                <p className="new-post-header">Your new post! Simply text, add photos and publish.</p>
                <div className="new-post">
                    <form onSubmit={(event) => onHandleSubmit(event, history, user)}>
                        <fieldset>
                            <div className="new-post-labels">
                                <label htmlFor="text">Text:</label>
                                <label htmlFor="file" className="file">Photos:</label>
                            </div>
                            <div className="new-post-inputs">
                                <textarea name="text" rows={15}/>
                                <Grid container direction="row" className="new-post-drag-and-drop">
                                    <Grid container item sm={6} justify="center" direction="column" alignItems="center">
                                        <i className="fa fa-sign-out"/>
                                        <p>Drag and drop photos or</p>
                                        <label htmlFor="file">Browse</label>
                                    </Grid>
                                    <Grid container item sm={6}>
                                        <input type="file" id="file" name="file" multiple className="file-browser" disabled={true}/>
                                    </Grid>
                                </Grid>
                            </div>
                        </fieldset>
                        <div className="new-post-footer">
                            <img src={user.avatar} alt="dog-photo-small"/>
                            <p>{user.name}</p>
                            <Button className="new-post-submit-btn" variant="contained" type="submit">
                            <i className="fas fa-paw"/>Publish</Button>
                        </div>
                    </form>
                </div>
            </Grid>
            <Grid container item md={1} lg={4} className="new-post-right-side"/>
        </Grid>
    )
};

export default withRouter(NewPost);
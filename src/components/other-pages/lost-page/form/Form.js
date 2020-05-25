import React from "react";
import './form.scss';
import Grid from "@material-ui/core/Grid";
import pic from "../../../../img/dog-photo-small.png";
import Button from "@material-ui/core/Button";

const FormMainBlock = (props) => {
    return (
        <Grid container direction="row" className="main-block-lost-form">
            <Grid container item md={11} lg={8}>
                <p className="header-form-lost">Lost your buddy? Keep calm and complete the form.</p>
                <form>
                    <Grid container direction="column" className="lost-form-container">
                        <Grid container direction="row">
                            <Grid container item sm={6} className="basic-pet-info">
                                <fieldset>
                                    <div className="labels">
                                        <label htmlFor="type">Type:</label>
                                        <label htmlFor="sex">Sex:</label>
                                        <label htmlFor="breed">Breed:</label>
                                        <label htmlFor="color">Color:</label>
                                        <label htmlFor="height">Height:</label>
                                        <label htmlFor="features" className="features">Distinctive features:</label>
                                        <label htmlFor="description" className="description">Description:</label>
                                        <label htmlFor="location" className="location">Location:</label>
                                        <label htmlFor="file" className="file">Photos:</label>
                                        <label htmlFor="file" className="file-for-mobile">Browse</label>
                                    </div>
                                    <div className="inputs">
                                        <select name="type">
                                            <option>Dog</option>
                                            <option>Cat</option>
                                            <option>Parrot</option>
                                        </select>
                                        <select name="sex">
                                            <option>Male</option>
                                            <option>Female</option>
                                        </select>
                                        <input type="text" name="breed"/>
                                        <input type="text" name="color"/>
                                        <select name="height">
                                            <option>0-44 cm</option>
                                            <option>45-70 cm</option>
                                            <option>more than 70 cm</option>
                                        </select>
                                        <textarea name="features" className="features-input" rows={2}/>
                                        <textarea name="description" className="description-input" rows={5}/>
                                        <textarea name="location" className="location-input"/>
                                    </div>
                                </fieldset>
                            </Grid>
                            <Grid container item sm={6} className="images">
                                <Grid container direction="column">
                                    <Grid container item className="scale"/>
                                    <Grid container direction="row" className="drag-and-drop">
                                        <Grid container item sm={6} justify="center">
                                            <i className="fa fa-sign-out"/>
                                            <p>Drag and drop photos or</p>
                                            <label htmlFor="file">Browse</label>
                                        </Grid>
                                        <Grid container item sm={6}>
                                            <input type="file" id="file" name="file" multiple className="file-browser"/>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid container direction="column" className="contacts-container">
                            <div className="contacts">
                                <label>
                                    Contacts:
                                    <input type="phone" placeholder="Phone"/>
                                    <input type="email" placeholder="Email"/>
                                    <input type="link" placeholder="Facebook profile"/>
                                </label>
                            </div>
                            <Grid container direction="row">
                                <Grid container item sm={6} className="footer-form">
                                    <img src={pic} alt="dog-photo-small"/>
                                    <p>John Goodboi</p>
                                </Grid>
                                <Grid container item sm={6} justify="flex-end">
                                    <Button className="footer-form-submit-btn" variant="contained" type="submit">
                                        <i className="fas fa-paw"/>Publish</Button>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                    <button className="mobile-form-btn" type="submit">+</button>
                </form>
            </Grid>
            <Grid container item md={1} lg={4} className="form-right-side"/>
        </Grid>
    )
};

export default FormMainBlock;
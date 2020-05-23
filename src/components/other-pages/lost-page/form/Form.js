import React from "react";
import './form.scss';
import Grid from "@material-ui/core/Grid";

const FormMainBlock = (props) => {
    return (
        <Grid container direction="row" className="main-block-lost-form">
            <Grid container item sm={8}>
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
                                    <Grid container direction="row">
                                        <Grid container item sm={6}>
                                            <i className="fas fa-sign-out"/>
                                            <p className="drag-and-drop">Drag and drop photos or</p>
                                        </Grid>
                                        <Grid container item sm={6}>

                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid container direction="column">

                        </Grid>
                    </Grid>
                </form>
            </Grid>
            <Grid container item sm={4} className="form-right-side"/>
        </Grid>
    )
};

export default FormMainBlock;
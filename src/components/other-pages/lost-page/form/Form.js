import React, { useContext } from "react";
import './form.scss';
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import { withRouter } from "react-router";
import { getCoordinates } from "../../../../utils";
import { useSelector } from "react-redux";
import { Context } from "../../../../context";

const onHandleSubmit = (event, history, user, setPost, setPage, page) => {
    event.preventDefault();
    const { name, avatar } = user;
    console.log(event.target.type.value);
    const type = event.target.type.value;
    const sex = event.target.sex.value;
    const breed = event.target.breed.value;
    const address = event.target.location.value;
    const addressArr = address.split(',');
    const photos = ["https://sun6-13.userapi.com/2xuIYHfKJjDhgUT_asXVUaXgJ8e_i2oGomXofQ/eqa5u0PWJi0.jpg"];
    const tags = event.target.features.value.split(',');
    console.log(event.target.file.files[0]);
    getCoordinates(address)
        .then(location => {
            console.log(location)
            const post = {
                type: type,
                sex: sex,
                breed: breed,
                username: name,
                avatar: avatar,
                address: {
                    country: addressArr[0].trim(),
                    city: addressArr[1].trim(),
                    street: addressArr[2].trim(),
                    building: addressArr[3].trim()
                },
                location:{
                    lat: location.lat,
                    lon: location.lng
                },
                photos: photos,
                tags: tags
            };
            console.log(post)
            setPost(post);
            setPage(page);
            history.push(`/propets/${page}/preview`);
        })
        .catch(error => console.log(error));
};

const FormMainBlock = (props) => {
    const { history, page } = props;
    const user = useSelector(state => state.profileInfo.user);
    const context = useContext(Context);
   // const { files, pending, next, uploading, uploaded, status, onSubmit, onChange } = useFileHandlers();

    console.log(user)

    // const previewFile = (event) => {
    //     const file = event.target.files[0];
    //     const reader = new FileReader();
    //
    //     reader.onloadend = function () {
    //         console.log(reader.result)
    //     }
    //
    //     if(file) {
    //         reader.readAsDataURL(file);
    //     }
    // }

    return (
        <Grid container direction="row" className="main-block-lost-form">
            <Grid container item md={11} lg={8} direction="column" className="form-left-side">
                {page === "lost" && <p className="header-form-lost">Lost your buddy? Keep calm and complete the form.</p>}
                {page === "found" && <p className="header-form-lost">Found a pet? Please complete the form to help.</p>}
                <form onSubmit={(event) =>
                    onHandleSubmit(event, history, user, context.setPost, context.setPage, page)}>
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
                                        <textarea name="features" className="features-input" rows={2}
                                                  placeholder="feature1, feature2..."/>
                                        <textarea name="description" className="description-input" rows={5}/>
                                        <textarea name="location" className="location-input"
                                                  placeholder="Country, City, Street, Building"/>
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
                                            <input type="file" id="file" name="file" multiple disabled={true}
                                                   className="file-browser" accept="image/*"/>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid container direction="column" className="contacts-container">
                            <div className="contacts">
                                <label>
                                    Contacts:
                                    <input type="phone" placeholder="Phone" defaultValue={user.phone}/>
                                    <input type="email" placeholder="Email" defaultValue={user.email}/>
                                    <input type="link" placeholder="Facebook profile"/>
                                </label>
                            </div>
                            <Grid container direction="row">
                                <Grid container item sm={6} className="footer-form">
                                    <img src={user.avatar} alt="dog-photo-small"/>
                                    <p>{user.name}</p>
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

export default withRouter(FormMainBlock);
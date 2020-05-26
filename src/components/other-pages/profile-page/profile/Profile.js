import React, {useState} from "react";
import './profile.scss';
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";

const pic = "https://sun6-16.userapi.com/E-J3H_cTJO9xr3DE2g_g_6vazm5YPD-gGqeqIQ/7Z1WCb9JJiw.jpg";

const Profile = (props) => {
    const [info, setInfo] = useState(false);

    return (
        <Grid container direction="row" className="profile-main-block">
            <Grid container item lg={8}>
                <p className="header-profile">Your profile. Change, edit and manage your data.</p>
                <form>
                    <Grid container direction="column" className="profile-info-container">
                        <div className="header-profile-buttons">
                            <span className={info && "selected"} onClick={() => {
                                setInfo(false);
                            }}>My Profile</span>
                            <span className={!info && "selected"} onClick={() => {
                                setInfo(true);
                            }}>Activities</span>
                        </div>
                        <div className="profile-info">
                            <div className="profile-info-picture">
                                <img src={pic} alt="profile-picture"/>
                                <p>Anna Smith</p>
                                <i className="fas fa-pencil-alt"/>
                            </div>
                            <fieldset>
                                <div className="profile-labels">
                                    <label htmlFor="email">Email:</label>
                                    <label htmlFor="phone">Phone:</label>
                                    <label htmlFor="fb-link">FB link:</label>
                                </div>
                                <div className="profile-inputs">
                                    <input type="email" name="email"/>
                                    <input type="phone" name="phone"/>
                                    <input type="link" name="fb-link"/>
                                </div>
                            </fieldset>
                        </div>
                    </Grid>
                    <div className="profile-buttons">
                        <Button variant="contained" className="profile-btn-cancel">Cancel</Button>
                        <Button className="profile-submit-btn" variant="contained" type="submit">
                            <i className="fas fa-save"/>Save changes</Button>
                    </div>
                </form>
            </Grid>
            <Grid container item lg={4} className="profile-right-side"/>
        </Grid>
    )
};

export default Profile;
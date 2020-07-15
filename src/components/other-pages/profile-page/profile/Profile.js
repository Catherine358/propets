import React, {useState} from "react";
import './profile.scss';
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Activity from "../activities";
import {editUserInfo} from "../../../../services";
import { withRouter } from "react-router";

const pic = "https://sun6-16.userapi.com/E-J3H_cTJO9xr3DE2g_g_6vazm5YPD-gGqeqIQ/7Z1WCb9JJiw.jpg";

const onHandleSubmit = (event, history) => {
    event.preventDefault();
    const name = event.target.name.value;
    const email = event.target.email.value;
    const phone = event.target.phone.value;
    const user = {
        name: name,
        email: email,
        phone: phone
    };
    console.log(user)
    const currentEmail = localStorage.getItem('email');
    editUserInfo(currentEmail, user)
        .then(data => {
            console.log(data)
            history.push("/propets/home");
        })
        .catch(error => console.log(error));
};

const Profile = (props) => {
    const { user, history } = props;
    const [info, setInfo] = useState(false);
    const [inputName, setInput] = useState(false);

    return (
        <Grid container direction="row" className="profile-main-block">
            <Grid container item lg={8} md={11} direction="column" className="profile-left-side">
                <p className="header-profile">Your profile. Change, edit and manage your data.</p>
                <form onSubmit={(event) => onHandleSubmit(event, history)}>
                    <Grid container direction="column" className="profile-info-container">
                        <div className="header-profile-buttons">
                            <span className={info && "selected"} onClick={() => {
                                setInfo(false);
                            }}>My Profile</span>
                            <span className={!info && "selected"} onClick={() => {
                                setInfo(true);
                            }}>Activities</span>
                        </div>
                        {info && <Activity inactive={false}/>}
                        {info && <div className="deactivated-text">
                            <p>The post was deactivated on 12 Dec, 2019. Click here to re-activate it.</p>
                        </div>}
                        {info && <Activity inactive={true}/>}
                        {!info && <div className="profile-info">
                            <div className="profile-info-picture">
                                <img src={user.avatar} alt="profile-picture"/>
                                {!inputName && <p>{user.name}</p>}
                                {inputName && <input type="text" name="name" defaultValue={user.name}/>}
                                <i className="fas fa-pencil-alt" onClick={() => {
                                    setInput(true);
                                }}/>
                            </div>
                            <fieldset>
                                <div className="profile-labels">
                                    <label htmlFor="email">Email:</label>
                                    <label htmlFor="phone">Phone:</label>
                                    <label htmlFor="fb-link">FB link:</label>
                                </div>
                                <div className="profile-inputs">
                                    <input type="email" name="email" defaultValue={user.email}/>
                                    <input type="phone" name="phone" defaultValue={user.phone}/>
                                    <input type="link" name="fb-link"/>
                                </div>
                            </fieldset>
                        </div>}
                    </Grid>
                    {!info && <div className="profile-buttons">
                        <Button variant="contained" className="profile-btn-cancel">Cancel</Button>
                        <Button className="profile-submit-btn" variant="contained" type="submit">
                            <i className="fas fa-save"/>Save changes</Button>
                    </div>}
                </form>
            </Grid>
            <Grid container item lg={4} md={1} className="profile-right-side"/>
        </Grid>
    )
};

export default withRouter(Profile);
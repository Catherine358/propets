import React from "react";
import {Link} from "react-router-dom";

const pic = "https://sun6-16.userapi.com/E-J3H_cTJO9xr3DE2g_g_6vazm5YPD-gGqeqIQ/7Z1WCb9JJiw.jpg";

const ProfilePicture = (props) => {
    return (
        <div className="profile">
            <Link to={"/profile"}>
                <div className="profile-picture">
                    <img src={pic} alt="profile-picture"/>
                    <p>Anna<br/> Smith</p>
                </div>
            </Link>
            <span><i className="fas fa-sign-out-alt"/>Logout</span>
        </div>
    )
};

export default ProfilePicture;
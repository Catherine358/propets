import React from "react";
import {Link} from "react-router-dom";

const pic = "https://sun6-16.userapi.com/E-J3H_cTJO9xr3DE2g_g_6vazm5YPD-gGqeqIQ/7Z1WCb9JJiw.jpg";

const ProfilePicture = (props) => {
    const { page } = props;

    return (
        <div className="profile">
            {page === "profile" && <svg className="selected-profile" width="296" height="40">
                <rect x="-20" y="0" rx="20" ry="20" width="296" height="40"/>
            </svg>}
            <Link to={"/profile"}>
                <div className={page === "profile" ? "profile-picture selected-profile-picture" : "profile-picture"}>
                    <img src={pic} alt="profile-picture"/>
                    <p>Anna<br/> Smith</p>
                </div>
            </Link>
            <Link to={"/"}>
                <span><i className="fas fa-sign-out-alt"/>Logout</span>
            </Link>
        </div>
    )
};

export default ProfilePicture;
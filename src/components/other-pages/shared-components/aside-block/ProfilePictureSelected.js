import React from "react";

const pic = "https://sun6-16.userapi.com/E-J3H_cTJO9xr3DE2g_g_6vazm5YPD-gGqeqIQ/7Z1WCb9JJiw.jpg";

const ProfilePictureSelected = (props) => {
    return (
        <div className="profile">
            <svg className="selected-profile" width="296" height="40">
                <rect x="-20" y="0" rx="20" ry="20" width="296" height="40"/>
            </svg>
            <div className="profile-picture selected-profile-picture">
                <img src={pic} alt="profile-picture"/>
                <p>Anna<br/> Smith</p>
            </div>
            <span><i className="fas fa-sign-out-alt"/>Logout</span>
        </div>
    )
};

export default ProfilePictureSelected;
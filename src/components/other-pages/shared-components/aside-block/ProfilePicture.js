import React, {useContext} from "react";
import { Link } from "react-router-dom";
import {Context} from "../../../../context";

const pic = "https://sun6-16.userapi.com/E-J3H_cTJO9xr3DE2g_g_6vazm5YPD-gGqeqIQ/7Z1WCb9JJiw.jpg";

const ProfilePicture = (props) => {
    const { page, user } = props;
    const context = useContext(Context);
    const name = user.name !== undefined ? user.name.split(" ") : [];

    return (
        <div className="profile">
            {page === "profile" && <svg className="selected-profile" width="296" height="40">
                <rect x="-20" y="0" rx="20" ry="20" width="296" height="40"/>
            </svg>}
            <Link to={"/propets/profile"}>
                <div className={page === "profile" ? "profile-picture selected-profile-picture" : "profile-picture"}>
                    <img src={user.avatar} alt="profile-picture"/>
                    <p>{name[0] || ""}<br/> {name[1] || ""}</p>
                </div>
            </Link>
            <Link to={"/propets"}>
                <span onClick={() => {
                    localStorage.removeItem('token');
                    localStorage.removeItem('email');
                    context.setToken('');
                }}><i className="fas fa-sign-out-alt"/>Logout</span>
            </Link>
        </div>
    )
};

export default ProfilePicture;
import React from "react";
import './menu.scss';
import {Link} from "react-router-dom";

const pic = "https://sun6-16.userapi.com/E-J3H_cTJO9xr3DE2g_g_6vazm5YPD-gGqeqIQ/7Z1WCb9JJiw.jpg";

const Menu = (props) => {
    return (
        <div className="menu-container">
        <div className="menu">
            {/*{selected && <svg width="296" height="40">*/}
            {/*    <rect x="-20" y="0" rx="20" ry="20" width="296" height="40"/>*/}
            {/*</svg>}*/}
            <ul>
                <Link to={"/home"}>
                    <li><i className="fas fa-home"/>Home</li>
                </Link>
                <Link to={"/lost"}>
                    <li><i className="fas fa-search"/>Lost</li>
                </Link>
                <Link to={"/found"}>
                    <li><i className="fas fa-paw"/>Found</li>
                </Link>
                <li><i className="fas fa-bullhorn"/>Services</li>
                <Link to={"/favourites"}>
                    <li><i className="fas fa-star"/>Favourites</li>
                </Link>
            </ul>
        </div>
        <div className="profile">
            <Link to={"/profile"}>
                <div className="profile-picture">
                    <img src={pic} alt="profile-picture"/>
                    <p>Anna<br/> Smith</p>
                </div>
            </Link>
            <Link to={"/"}>
                <span><i className="fas fa-sign-out-alt"/>Logout</span>
            </Link>
        </div>
    </div>
    );
};

export default Menu;
import React from "react";
import './asideBlock.scss';
import {Link} from "react-router-dom";

const pic = "https://sun6-16.userapi.com/E-J3H_cTJO9xr3DE2g_g_6vazm5YPD-gGqeqIQ/7Z1WCb9JJiw.jpg";

const MenuMini = (props) => {
    const { page } = props;

    return (
        <div className="aside-block">
            <div className="menu-mini">
                <svg className={`selected-${page}`} width="100" height="100">
                    <circle cx="50" cy="50" r="20" width="100" height="100"/>
                </svg>
                <ul>
                    <Link to={"/home"}>
                        <li className={page === "home" && "selected"}><i className="fas fa-home"/></li>
                    </Link>
                    <Link to={"/lost"}>
                        <li className={page === "lost" && "selected"}><i className="fas fa-search"/></li>
                    </Link>
                    <Link to={"/found"}>
                        <li className={page === "found" && "selected"}><i className="fas fa-paw"/></li>
                    </Link>
                    <li><i className="fas fa-bullhorn"/></li>
                    <Link to={"/favourites"}>
                        <li><i className="fas fa-star"/></li>
                    </Link>
                </ul>
            </div>
            <div className="profile-mini">
                    <div className="profile-picture">
                        <Link to={"/profile"}>
                            <img src={pic} alt="profile-picture"/>
                        </Link>
                    </div>
                <Link to={"/"}>
                    <span><i className="fas fa-sign-out-alt"/></span>
                </Link>
            </div>
        </div>
    );
};

export default MenuMini;
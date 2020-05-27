import React from "react";
import './asideBlock.scss';
import {Link} from "react-router-dom";

const pic = "https://sun6-16.userapi.com/E-J3H_cTJO9xr3DE2g_g_6vazm5YPD-gGqeqIQ/7Z1WCb9JJiw.jpg";

const MenuMini = (props) => {
    return (
        <div className="aside-block">
            <div className="menu-mini">
                {/*{selected && <svg width="296" height="40">*/}
                {/*    <rect x="-20" y="0" rx="20" ry="20" width="296" height="40"/>*/}
                {/*</svg>}*/}
                <ul>
                    <li><i className="fas fa-home"/></li>
                    <Link to={"/lost"}>
                        <li><i className="fas fa-search"/></li>
                    </Link>
                    <Link to={"/found"}>
                        <li><i className="fas fa-paw"/></li>
                    </Link>
                    <li><i className="fas fa-bullhorn"/></li>
                    <li><i className="fas fa-star"/></li>
                </ul>
            </div>
            <div className="profile-mini">
                    <div className="profile-picture">
                        <Link to={"/profile"}>
                            <img src={pic} alt="profile-picture"/>
                        </Link>
                    </div>
                <span><i className="fas fa-sign-out-alt"/></span>
            </div>
        </div>
    );
};

export default MenuMini;
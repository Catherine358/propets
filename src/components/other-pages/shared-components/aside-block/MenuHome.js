import React from "react";
import {Link} from "react-router-dom";

const MenuHome = (props) => {
    return (
        <div className="aside-menu">
            <svg className="selected-home" width="296" height="40">
                <rect x="-20" y="0" rx="20" ry="20" width="296" height="40"/>
            </svg>
            <ul>
                <Link to={"/home"}>
                    <li className="selected"><i className="fas fa-home"/>Home</li>
                </Link>
                <Link to={"/lost"}>
                    <li><i className="fas fa-search"/>Lost</li>
                </Link>
                <Link to={"/found"}>
                    <li><i className="fas fa-paw"/>Found</li>
                </Link>
                <li><i className="fas fa-bullhorn"/>Services</li>
                <li><i className="fas fa-star"/>Favourites</li>
            </ul>
        </div>
    )
};

export default MenuHome;
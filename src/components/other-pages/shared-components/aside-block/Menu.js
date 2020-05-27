import React from "react";
import {Link} from "react-router-dom";

const Menu = (props) => {
    return (
        <div className="aside-menu">
            <ul>
                <li><i className="fas fa-home"/>Home</li>
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

export default Menu;
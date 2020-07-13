import React from "react";
import {Link} from "react-router-dom";

const Menu = (props) => {
    const { page, selected } = props;

    return (
        <div className="aside-menu">
            {selected && <svg className={`selected-${page}`} width="320" height="40">
                <rect x="-20" y="0" rx="20" ry="20" width="320" height="40"/>
            </svg>}
            <ul>
                <Link to={"/propets/home"}>
                    <li className={page === "home" && "selected"}><i className="fas fa-home"/>Home</li>
                </Link>
                <Link to={"/propets/lost"}>
                    <li className={page === "lost" && "selected"}><i className="fas fa-search"/>Lost</li>
                </Link>
                <Link to={"/propets/found"}>
                    <li className={page === "found" && "selected"}><i className="fas fa-paw"/>Found</li>
                </Link>
                <li><i className="fas fa-bullhorn"/>Services</li>
                <Link to={"/propets/favourites"}>
                    <li className={page === "favourites" && "selected"}><i className="fas fa-star"/>Favourites</li>
                </Link>
            </ul>
        </div>
    )
};

export default Menu;
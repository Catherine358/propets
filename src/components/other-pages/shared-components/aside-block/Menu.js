import React from "react";

const Menu = (props) => {
    return (
        <div className="aside-menu">
            <ul>
                <li><i className="fas fa-home"/>Home</li>
                <li><i className="fas fa-search"/>Lost</li>
                <li><i className="fas fa-paw"/>Found</li>
                <li><i className="fas fa-bullhorn"/>Services</li>
                <li><i className="fas fa-star"/>Favourites</li>
            </ul>
        </div>
    )
};

export default Menu;
import React from "react";
import './asideBlock.scss';

const pic = "https://sun6-16.userapi.com/E-J3H_cTJO9xr3DE2g_g_6vazm5YPD-gGqeqIQ/7Z1WCb9JJiw.jpg";

const AsideBlock = (props) => {
    const { selected } = props;

    return (
        <div className="aside-block">
            <div className="aside-menu">
                {selected && <svg width="296" height="40">
                    <rect x="-20" y="0" rx="20" ry="20" width="296" height="40"/>
                </svg>}
                <ul>
                    <li><i className="fas fa-home"/>Home</li>
                    <li className={selected && "selected"}><i className="fas fa-search"/>Lost</li>
                    <li><i className="fas fa-paw"/>Found</li>
                    <li><i className="fas fa-bullhorn"/>Services</li>
                    <li><i className="fas fa-star"/>Favourites</li>
                </ul>
            </div>
            <div className="profile">
                <div className="profile-picture">
                    <img src={pic} alt="profile-picture"/>
                    <p>Anna<br/> Smith</p>
                </div>
                <span><i className="fas fa-sign-out-alt"/>Logout</span>
            </div>
        </div>
    )
};

export default AsideBlock;
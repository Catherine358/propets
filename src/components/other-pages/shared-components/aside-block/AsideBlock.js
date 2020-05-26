import React from "react";
import './asideBlock.scss';
import MenuLost from "./MenuLost";
import MenuFound from "./MenuFound";
import Menu from "./Menu";

const pic = "https://sun6-16.userapi.com/E-J3H_cTJO9xr3DE2g_g_6vazm5YPD-gGqeqIQ/7Z1WCb9JJiw.jpg";

const AsideBlock = (props) => {
    const { page, selected } = props;

    return (
        <div className="aside-block">
            {selected && page === "lost" && <MenuLost/>}
            {selected && page === "found" && <MenuFound/>}
            {!selected && <Menu/>}
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
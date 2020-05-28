import React from "react";
import './asideBlock.scss';
import MenuLost from "./MenuLost";
import MenuFound from "./MenuFound";
import Menu from "./Menu";
import ProfilePicture from "./ProfilePicture";
import ProfilePictureSelected from "./ProfilePictureSelected";
import MenuHome from "./MenuHome";



const AsideBlock = (props) => {
    const { page, selected } = props;

    return (
        <div className="aside-block">
            {selected && page === "lost" && <MenuLost/>}
            {selected && page === "found" && <MenuFound/>}
            {selected && page === "home" && <MenuHome/>}
            {!selected && <Menu/>}
            {page === "profile" ? <ProfilePictureSelected/> : <ProfilePicture/>}
        </div>
    )
};

export default AsideBlock;
import React from "react";
import './asideBlock.scss';
import MenuLost from "./MenuLost";
import MenuFound from "./MenuFound";
import Menu from "./Menu";
import ProfilePicture from "./ProfilePicture";
import ProfilePictureSelected from "./ProfilePictureSelected";



const AsideBlock = (props) => {
    const { page, selected } = props;

    return (
        <div className="aside-block">
            {selected && page === "lost" && <MenuLost/>}
            {selected && page === "found" && <MenuFound/>}
            {!selected && <Menu/>}
            {page === "profile" ? <ProfilePictureSelected/> : <ProfilePicture/>}
        </div>
    )
};

export default AsideBlock;
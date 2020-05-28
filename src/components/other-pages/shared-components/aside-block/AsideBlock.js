import React from "react";
import './asideBlock.scss';
import Menu from "./Menu";
import ProfilePicture from "./ProfilePicture";



const AsideBlock = (props) => {
    const { page, selected } = props;

    return (
        <div className="aside-block">
            <Menu page={page} selected={selected}/>
            <ProfilePicture page={page}/>
        </div>
    )
};

export default AsideBlock;
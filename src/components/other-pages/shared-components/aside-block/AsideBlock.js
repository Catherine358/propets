import React  from "react";
import './asideBlock.scss';
import Menu from "./Menu";
import ProfilePicture from "./ProfilePicture";


const AsideBlock = (props) => {
    const { page, selected, user } = props;

    console.log(user)

    return (
        <div className="aside-block">
            <Menu page={page} selected={selected}/>
            <ProfilePicture page={page} user={user}/>
        </div>
    )
};

export default AsideBlock;
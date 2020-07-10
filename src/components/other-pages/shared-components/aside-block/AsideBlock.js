import React, { useEffect } from "react";
import './asideBlock.scss';
import Menu from "./Menu";
import ProfilePicture from "./ProfilePicture";
import { useDispatch, useSelector } from "react-redux";
import { fetchProfileInfo } from "../../../../actions/actions";


const AsideBlock = (props) => {
    const { page, selected } = props;
    const user = useSelector(state => state.profileInfo.user);
    const dispatch = useDispatch();

    useEffect(() => {
        const email = localStorage.getItem('email');
        fetchProfileInfo(dispatch, email);
    }, []);

    console.log(user)

    return (
        <div className="aside-block">
            <Menu page={page} selected={selected}/>
            <ProfilePicture page={page} user={user}/>
        </div>
    )
};

export default AsideBlock;
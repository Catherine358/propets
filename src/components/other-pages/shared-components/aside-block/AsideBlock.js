import React, {useContext, useEffect} from "react";
import './asideBlock.scss';
import Menu from "./Menu";
import ProfilePicture from "./ProfilePicture";
import { useDispatch, useSelector } from "react-redux";
import { fetchProfileInfo } from "../../../../actions/actions";
import { Context } from "../../../../context";


const AsideBlock = (props) => {
    const { page, selected } = props;
    const user = useSelector(state => state.profileInfo.user);
    const dispatch = useDispatch();
    const context = useContext(Context);

    useEffect(() => {
        console.log(context.email)
        fetchProfileInfo(dispatch, context.email);
    }, []);

    return (
        <div className="aside-block">
            <Menu page={page} selected={selected}/>
            <ProfilePicture page={page} user={user}/>
        </div>
    )
};

export default AsideBlock;
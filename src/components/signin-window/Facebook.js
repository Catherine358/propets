import React, { useState } from "react";
import FacebookLogin from "react-facebook-login";

const componentClicked = () => {
    console.log("clicked");
};

const responseFacebook = (response, setLog) => {
    setLog(true);
    // setUserId(response.userID);
    // setName(response.name);
    // setEmail(response.email);
    // setPicture(response.picture.data.url);
};

const Facebook = (props) => {
    const [isLoggedIn, setLog] = useState(false);
    const [userId, setUserId] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [picture, setPicture] = useState('');

    let fbContent;



    if(isLoggedIn){
        fbContent = `Welcome, ${name}`;
    }else{
        fbContent = (
            <FacebookLogin
                appId="532685647612115"
                autoLoad={false}
                fields="name,email,picture"
                callback={(response) => {
                    responseFacebook(response, setLog)
                }}
                onClick={componentClicked}
                cssClass="btn-fb"
                icon="fa-facebook"
            />
        )
    }

    return (
        <div>{fbContent}</div>
    )

};

export default Facebook;
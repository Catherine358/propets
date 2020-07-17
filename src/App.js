import React, {useEffect, useState} from "react";
import {Switch, Route, Redirect} from "react-router";
import './App.css';
import Home from "./components/first-page/Home";
import LostFoundPage from "./components/other-pages/lost-page";
import LostFoundPageForm from "./components/other-pages/lost-page/form";
import PreviewPage from "./components/other-pages/preview-page";
import {Context} from "./context";
import ProfilePage from "./components/other-pages/profile-page";
import HomePage from "./components/other-pages/home-page";
import FavouritesPage from "./components/other-pages/favourites-page";
import NewPostForm from "./components/other-pages/home-page/home/new-post-form";
import {useDispatch, useSelector} from "react-redux";
import {fetchProfileInfo} from "./actions/actions";

const App = (props) => {
    const tokenTmp = localStorage.getItem('token') || '';
    const [page, setPage] = useState('');
    const [newPost, setPost] = useState({});
    const [token, setToken] = useState(tokenTmp);
    const user = useSelector(state => state.profileInfo.user);
    const dispatch = useDispatch();

    useEffect(() => {
        const email = localStorage.getItem('email');
        fetchProfileInfo(dispatch, email);
    }, []);

    useEffect(() => {
        console.log(token)
        checkLoginStatus();
    }, []);

    const checkLoginStatus = () => {
        if(localStorage.getItem('token') === null) {
            setToken('');
        } else if(localStorage.getItem('token') !== null) {
            setToken(tokenTmp);
        }
    };

    return (
        <Switch>
            <Context.Provider value={{
                page: page,
                setPage: setPage,
                newPost: newPost,
                setPost: setPost,
                setToken: setToken
            }}>
                <Route exact path="/propets/home" render={props => (
                    <HomePage {...props} page="home" user={user}/>
                )}/>
                {!token && <Redirect to={"/propets"}/>}
                <Route exact path="/propets" render={props => (
                    token ? <Redirect to={"/propets/home"}/> :
                        <div className="wrapper">
                            <Home {...props}/>
                        </div>
                )}/>
                <Route exact path="/propets/home/new_post" render={props => (
                    <NewPostForm {...props} user={user}/>
                )}/>
                <Route exact path="/propets/lost/form" render={props => (
                    <LostFoundPageForm {...props} page="lost" user={user}/>
                )}/>
                <Route exact path="/propets/found/form" render={props => (
                    <LostFoundPageForm {...props} page="found" user={user}/>
                )}/>
                <Route exact path="/propets/lost/preview" render={props => (
                    <PreviewPage {...props} page="lost" user={user}/>
                )}/>
                <Route exact path="/propets/found/preview" render={props => (
                    <PreviewPage {...props} page="found" user={user}/>
                )}/>
                <Route exact path="/propets/lost" render={props => (
                    <LostFoundPage {...props} page="lost" user={user}/>
                )}/>
                <Route exact path="/propets/found" render={props => (
                    <LostFoundPage {...props} page="found" user={user}/>
                )}/>
                <Route exact path="/propets/profile" render={props => (
                    <ProfilePage {...props} page="profile" user={user}/>
                )}/>
                <Route exact path="/propets/favourites" render={props => (
                    <FavouritesPage {...props} page="favourites" user={user}/>
                )}/>
            </Context.Provider>
        </Switch>
    )
};

export default App;
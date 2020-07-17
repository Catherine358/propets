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
    const [page, setPage] = useState('');
    const [newPost, setPost] = useState({});
    const [loginStatus, setStatus] = useState('NOT_LOGGED_IN');
    const [token, setToken] = useState('');
    const user = useSelector(state => state.profileInfo.user);
    const dispatch = useDispatch();

    useEffect(() => {
        const email = localStorage.getItem('email');
        fetchProfileInfo(dispatch, email);
    }, []);

    useEffect(() => {
        checkLoginStatus();
    }, []);

    const checkLoginStatus = () => {
        if(localStorage.getItem('token') === null && loginStatus === 'LOGGED_IN') {
            setStatus('NOT_LOGGED_IN');
            setToken('');
        } else if(localStorage.getItem('token') !== null && loginStatus === 'NOT_LOGGED_IN') {
            const tokenTmp = localStorage.getItem('token');
            setToken(tokenTmp);
            setStatus('LOGGED_IN');
        }
    };

    return (
        <Switch>
            <Context.Provider value={{
                page: page,
                setPage: setPage,
                newPost: newPost,
                setPost: setPost
            }}>
                <Route exact path="/propets" render={props => (
                    token ? <Redirect to={"/propets/home"}/> :
                    <div className="wrapper">
                        <Home/>
                    </div>
                )}/>
                {!token && <Redirect to={"/propets"}/>}
                <Route exact path="/propets/lost/form" render={props => (
                    <LostFoundPageForm page="lost" user={user}/>
                )}/>
                <Route exact path="/propets/found/form" render={props => (
                    <LostFoundPageForm page="found" user={user}/>
                )}/>
                <Route exact path="/propets/lost/preview" render={props => (
                    <PreviewPage page="lost" user={user}/>
                )}/>
                <Route exact path="/propets/found/preview" render={props => (
                    <PreviewPage page="found" user={user}/>
                )}/>
                <Route exact path="/propets/lost" render={props => (
                    <LostFoundPage page="lost" user={user}/>
                )}/>
                <Route exact path="/propets/found" render={props => (
                    <LostFoundPage page="found" user={user}/>
                )}/>
                <Route exact path="/propets/profile" render={props => (
                    <ProfilePage page="profile" user={user}/>
                )}/>
                <Route exact path="/propets/home/new_post" render={props => (
                    <NewPostForm user={user}/>
                )}/>
                <Route exact path="/propets/home" render={props => (
                    <HomePage page="home" user={user}/>
                )}/>
                <Route exact path="/propets/favourites" render={props => (
                    <FavouritesPage page="favourites" user={user}/>
                )}/>
            </Context.Provider>
        </Switch>
    )
};

export default App;
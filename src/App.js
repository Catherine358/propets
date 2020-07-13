import React, {useEffect, useState} from "react";
import { Switch, Route } from "react-router";
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
    const [page, setPage] = useState("");
    const [newPost, setPost] = useState({});
    const user = useSelector(state => state.profileInfo.user);
    const dispatch = useDispatch();

    useEffect(() => {
        const email = localStorage.getItem('email');
        fetchProfileInfo(dispatch, email);
    }, []);

    return (
        <Switch>
            <Context.Provider value={{
                page: page,
                setPage: setPage,
                newPost: newPost,
                setPost: setPost
            }}>
                <Route exact path="/" render={props => (
                    <div className="wrapper">
                        <Home/>
                    </div>
                )}/>
                <Route exact path="/lost/form" render={props => (
                    <LostFoundPageForm page="lost"/>
                )}/>
                <Route exact path="/found/form" render={props => (
                    <LostFoundPageForm page="found"/>
                )}/>
                <Route exact path="/lost/preview" render={props => (
                    <PreviewPage page="lost"/>
                )}/>
                <Route exact path="/found/preview" render={props => (
                    <PreviewPage page="found"/>
                )}/>
                <Route exact path="/lost" render={props => (
                    <LostFoundPage page="lost" user={user}/>
                )}/>
                <Route exact path="/found" render={props => (
                    <LostFoundPage page="found" user={user}/>
                )}/>
                <Route exact path="/profile" render={props => (
                    <ProfilePage page="profile" user={user}/>
                )}/>
                <Route exact path="/home/new_post" render={props => (
                    <NewPostForm/>
                )}/>
                <Route exact path="/home" render={props => (
                    <HomePage page="home" user={user}/>
                )}/>
                <Route exact path="/favourites" render={props => (
                    <FavouritesPage page="favourites"/>
                )}/>
            </Context.Provider>
        </Switch>
    )
};

export default App;
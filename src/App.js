import React, {useState} from "react";
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

const App = (props) => {
    const [page, setPage] = useState("");

    return (
        <Switch>
            <Context.Provider value={{
                page: page,
                setPage: setPage
            }}>
                <Route exact path="/" render={props => (
                    <div className="wrapper">
                        <Home/>
                    </div>
                )}/>
                <Route exact path="/lost/form" render={props => (
                    <div className="wrapper-main">
                        <LostFoundPageForm page="lost"/>
                    </div>
                )}/>
                <Route exact path="/found/form" render={props => (
                    <div className="wrapper-main">
                        <LostFoundPageForm page="found"/>
                    </div>
                )}/>
                <Route exact path="/lost/preview" render={props => (
                    <div className="wrapper-main">
                        <PreviewPage/>
                    </div>
                )}/>
                <Route exact path="/lost" render={props => (
                    <div className="wrapper-main">
                        <LostFoundPage page="lost"/>
                    </div>
                )}/>
                <Route exact path="/found" render={props => (
                    <div className="wrapper-main">
                        <LostFoundPage page="found"/>
                    </div>
                )}/>
                <Route exact path="/profile" render={props => (
                    <div className="wrapper-main">
                        <ProfilePage page="profile"/>
                    </div>
                )}/>
                <Route exact path="/home/new_post" render={props => (
                    <div className="wrapper-main">
                        <NewPostForm/>
                    </div>
                )}/>
                <Route exact path="/home" render={props => (
                    <div className="wrapper-main">
                        <HomePage page="home"/>
                    </div>
                )}/>
                <Route exact path="/favourites" render={props => (
                    <div className="wrapper-main">
                        <FavouritesPage page="favourites"/>
                    </div>
                )}/>
            </Context.Provider>
        </Switch>
    )
};

export default App;
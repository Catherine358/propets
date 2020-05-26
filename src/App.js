import React, {useState} from "react";
import { Switch, Route } from "react-router";
import './App.css';
import Home from "./components/first-page/Home";
import LostFoundPage from "./components/other-pages/lost-page";
import LostFoundPageForm from "./components/other-pages/lost-page/form";
import PreviewPage from "./components/other-pages/preview-page";
import {Context} from "./context";

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
            </Context.Provider>
        </Switch>
    )
};

export default App;
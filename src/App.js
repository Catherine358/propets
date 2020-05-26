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
                <Route exact path="/lost_found/form" render={props => (
                    <div className="wrapper-main">
                        <LostFoundPageForm/>
                    </div>
                )}/>
                <Route exact path="/lost/preview" render={props => (
                    <div className="wrapper-main">
                        <PreviewPage/>
                    </div>
                )}/>
                <Route exact path="/lost_found" render={props => (
                    <div className="wrapper-main">
                        <LostFoundPage/>
                    </div>
                )}/>
            </Context.Provider>
        </Switch>
    )
};

export default App;
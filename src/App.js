import React from "react";
import { Switch, Route } from "react-router";
import './App.css';
import Home from "./components/first-page/Home";
import LostPage from "./components/other-pages/lost-page";

const App = (props) => {
    return (
        <Switch>
            <Route exact path="/" render={props => (
                <div className="wrapper">
                    <Home/>
                </div>
            )}/>
            <Route exact path="/lost" render={props => (
                <div className="wrapper">
                    <LostPage/>
                </div>
            )}/>
        </Switch>
    )
};

export default App;
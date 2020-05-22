import React from "react";
import { Switch, Route } from "react-router";
import './App.css';
import Home from "./components/first-page/Home";

const App = (props) => {
    return (
        <Switch>
            <Route exact path="/" render={props => (
                <div className="wrapper">
                    <Home/>
                </div>
            )}/>
        </Switch>
    )
};

export default App;
import React from "react";
import { Switch, Route } from "react-router";
import Header from "./components/first-page/header";
import './App.css';
import WelcomeSection from "./components/first-page/welcome-section";

const App = (props) => {
    return (
        <Switch>
            <Route exact path="/" render={props => (
                <div className="wrapper">
                    <Header/>
                    <WelcomeSection/>
                </div>
            )}/>
        </Switch>
    )
};

export default App;
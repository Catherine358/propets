import React from "react";
import { Switch, Route } from "react-router";
import Header from "./components/first-page/header";
import './App.css';
import WelcomeSection from "./components/first-page/welcome-section";
import MiddleLine from "./components/first-page/middle-line";
import PetNeedSection from "./components/first-page/pet-need-section";
import ComingSoon from "./components/first-page/coming-soon-section";
import Footer from "./components/first-page/footer";

const App = (props) => {
    return (
        <Switch>
            <Route exact path="/" render={props => (
                <div className="wrapper">
                    <Header/>
                    <WelcomeSection/>
                    <MiddleLine/>
                    <PetNeedSection/>
                    <ComingSoon/>
                    <Footer/>
                </div>
            )}/>
        </Switch>
    )
};

export default App;
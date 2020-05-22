import React, { useState } from "react";
import Header from "./header";
import WelcomeSection from "./welcome-section";
import MiddleLine from "./middle-line";
import PetNeedSection from "./pet-need-section";
import ComingSoon from "./coming-soon-section";
import Footer from "./footer";
import './home.css';
import SignIn from "../signin-window";

const Home = (props) => {
    const [form, setForm] = useState(false);

    return (
        <>
            {form && <SignIn setForm={setForm}/>}
        <div className={form && "blur"}>
            <Header setForm={setForm}/>
            <WelcomeSection setForm={setForm} form={form}/>
            <MiddleLine/>
            <PetNeedSection/>
            <ComingSoon/>
            <Footer/>
        </div>
            </>
    )
};

export default Home;
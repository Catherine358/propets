import React, {useContext, useState} from "react";
import './signIn.scss';
import logo from "../../img/icons/logo_green.svg";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Facebook from "./Facebook";
import { withRouter } from "react-router";
import { Context } from "../../context";
import { Login } from "../../services";

const onSubmitForm = (event, history, page) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    Login(email, password)
        .then(response => console.log(response))
        .catch(error => console.log(error));
    if(page === "lost") {
        history.push("/lost");
    }else if(page === "found"){
        history.push("/found");
    }
};

const SignIn = (props) => {
    const { setForm, history } = props;
    const [signType, setSignType] = useState("signup");
    const context = useContext(Context);

    return (
        <Grid container direction="column" className="signin-window">
            <Grid container direction="row" className="logo-container">
                <Grid container item sm={6} justify="flex-start">
                    <img src={logo} alt="logo" className="logo-green"/>
                </Grid>
                <Grid container item sm={6} justify="flex-end">
                    <span className="btn-reset" onClick={() => {
                        setForm(false);
                    }}>x</span>
                </Grid>
            </Grid>
            <Grid container className="signin-text">
                <p>Welcome! Please sign in / sign up to continue or</p>
                <Facebook/>
            </Grid>
            <Grid container direction="row" className="btn-container">
                <Grid container item xs={6} justify="flex-end">
                    <Button variant="contained" className="btn-signup" onClick={() => {
                        setSignType("signup");
                    }} style={{backgroundColor: `${signType === "signup" ? "#8DBFAC" : "#BABABA"}`}}>Sign up</Button>
                </Grid>
                <Grid container item xs={6}>
                    <Button variant="contained" className="btn-signin" onClick={() => {
                        setSignType("signin");
                    }} style={{backgroundColor: `${signType === "signin" ? "#8DBFAC" : "#BABABA"}`}}>Sign in</Button>
                </Grid>
            </Grid>
            <form onSubmit={(event) => onSubmitForm(event, history, context.page)}>
                {signType === "signup" ? <Grid container direction="row">
                     <Grid container item sm={6} direction="column" className="signup-form">
                            <label>
                                Name:
                                <input type="text" name="name"/>
                            </label>
                            <label>
                                Email:
                                <input type="email"/>
                            </label>
                            <label>
                                Password:
                                <input type="password"/>
                            </label>
                            <label>
                                Password:
                                <input type="password"/>
                            </label>
                    </Grid>
                    <Grid container item sm={6} direction="column" className="signup-text">
                        <p>Password must have at least 8 characters with at least one Capital letter,signin-form at least one lower case letter and at least one number or special character.</p>
                        <p>Please re-enter your password</p>
                    </Grid>
                 </Grid> :
                    <Grid container direction="row">
                        <Grid container item sm={6} direction="column" className="signin-form">
                            <label>
                                Email:
                                <input type="email" name="email"/>
                            </label>
                            <label>
                                Password:
                                <input type="password" name="password"/>
                            </label>
                            <span>Forgot password?</span>
                        </Grid>
                        <Grid container item sm={6} direction="column"/>
                    </Grid>}
            <Grid container direction="row" className="signin-footer">
                <Grid container item sm={6} className="signin-footer-text">
                    <p>By clicking “Submit”, you agree to us processing your information in accordance with these terms.</p>
                </Grid>
                <Grid container item sm={6} justify="center" className="btn-submit-container">
                    <Button variant="contained" className="btn-cancel" onClick={() => {
                        setForm(false);
                    }}>Cancel</Button>
                    <Button variant="contained" className="btn-submit" type="submit"><i className="fas fa-paw"/>Submit</Button>
                </Grid>
            </Grid>
            </form>
        </Grid>

    )
};

export default withRouter(SignIn);
import React, {useContext, useState} from "react";
import './signIn.scss';
import logo from "../../img/icons/logo_green.svg";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Facebook from "./Facebook";
import { withRouter } from "react-router";
import { Context } from "../../context";
import { login, register } from "../../services";

const passwordvalidation = (password) => {
  if(password.length < 8){
      return "Password must be at least 8 characters long";
  }  else {
      // array of flags flags[0] - if at least one capital letter;
      // flags[1] - if at least one low letter;
      // flags[2] = if at least one number or special character
      let flags = [false, false, false];
      const str = "/*!@#$%^&*()\"{}_[]|\\?/<>,.";
      for(let i = 0; i < password.length; i++){
          if (parseInt(password[i]) >= 0 || parseInt(password[i]) <= 9 || str.includes(password[i])){
              flags[2] = true;
          } else if(password[i] === password[i].toUpperCase()){
              flags[0] = true;
          } else if (password[i] === password[i].toLowerCase()) {
              flags[1] = true;
          }
      }
      if(flags.includes(false)) {
          return "Password must contain at least one capital letter, one lower case letter and one number or special character"
      } else {
          return "OK";
      }
  }
};

const onSubmitFormSignUp = (event) => {
    event.preventDefault();
    const name = event.target.name.value.trim();
    const email = event.target.emailReg.value.trim();
    const password = event.target.passwordReg.value.trim();
    const password2 = event.target.passwordReg2.value.trim();
    if(!name){
        alert("Please fill in the name field");
        event.target.name.value = "";
    } else {
        const valid = passwordvalidation(password);
        if (valid !== "OK") {
            alert(valid);
        } else {
            if (password !== password2) {
                alert("Passwords do not match! Please re-enter");
            } else {
                event.target.name.value = "";
                event.target.emailReg.value = "";
                event.target.passwordReg.value = "";
                event.target.passwordReg2.value = "";
                register(name, email, password)
                    .then(response => {
                        console.log(response);
                        alert("You are successfully registered! Please. sign in");
                    })
                    .catch(error => console.log(error));
            }
        }
    }
};

const onSubmitFormSignIn = (event, history, page) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    event.target.email.value = "";
    event.target.password.value = "";
    login(email, password)
        .then(response => {
            console.log(response);
            localStorage.setItem('email', email);
            if(page === "lost") {
                history.push("/propets/lost");
            }else if(page === "found") {
                history.push("/propets/found");
            }else if(page === "home") {
                history.push("/propets/home");
            }
        })
        .catch(error => console.log(error));
};

const SignIn = (props) => {
    const { setForm, history } = props;
    const [signType, setSignType] = useState("signup");
    const [name, setName] = useState("");
    const [emailReg, setEmailReg] = useState("");
    const [passwordReg, setPassReg] = useState("");
    const [passwordReg2, setPassReg2] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPass] = useState("");
    const context = useContext(Context);

    function handleChangeName(event) {
        setName(event.target.value);
    }

    function handleChangeEmailReg(event) {
        setEmailReg(event.target.value);
    }

    function handleChangePasswordReg(event) {
        setPassReg(event.target.value);
    }

    function handleChangePasswordReg2(event) {
        setPassReg2(event.target.value);
    }

    function handleChangeEmail(event) {
        setEmail(event.target.value);
    }

    function handleChangePassword(event) {
        setPass(event.target.value);
    }

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
            <form onSubmit={(event) => {
                if(signType === "signin") {
                    onSubmitFormSignIn(event, history, context.page);
                }else if(signType === "signup"){
                    onSubmitFormSignUp(event);
                }
            }}>
                {signType === "signup" ? <Grid container direction="row">
                     <Grid container item sm={6} direction="column" className="signup-form">
                            <label>
                                Name:
                                <input value={name} type="text" name="name" required onChange={handleChangeName}/>
                            </label>
                            <label>
                                Email:
                                <input value={emailReg} type="email" name="emailReg" required
                                       onChange={handleChangeEmailReg}/>
                            </label>
                            <label>
                                Password:
                                <input value={passwordReg} type="password" name="passwordReg" required
                                       onChange={handleChangePasswordReg}/>
                            </label>
                            <label>
                                Password:
                                <input value={passwordReg2} type="password" name="passwordReg2" required
                                       onChange={handleChangePasswordReg2}/>
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
                                <input value={email} type="email" name="email" required onChange={handleChangeEmail}/>
                            </label>
                            <label>
                                Password:
                                <input value={password} type="password" name="password" required onChange={handleChangePassword}/>
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
import React from "react";
import './footer.scss';
import Grid from "@material-ui/core/Grid";
import logo from "../../../img/icons/logo.svg";
import fb from "../../../img/icons/icon-fb.png";
import inst from "../../../img/icons/icon-inst.png";

const Footer = (props) => {
    return (
        <Grid container direction="row" className="footer">
            <Grid container item sm={5}>
                <img src={logo} alt="logo" className="footer-logo"/>
            </Grid>
            <Grid container item sm={2} direction="column">
                <div>
                    <img src={fb} alt="fb" className="icon-fb"/>
                    <img src={inst} alt="instagram" className="icon-insta"/>
                </div>
                <p>1600 Amphitheatre Pkwy <br/>Mountain View, CA 94043, USA</p>
            </Grid>
            <Grid container item sm={5} direction="row" justify="center">
                <table className="footer-menu-left">
                    <tr>
                        <td><i className="fas fa-search"/></td>
                        <td><span>Lost</span></td>
                    </tr>
                    <tr>
                        <td><i className="fas fa-paw"/></td>
                        <td><span>Found</span></td>
                    </tr>
                    <tr>
                        <td><i className="fas fa-stethoscope"/></td>
                        <td><span>VetHelp</span></td>
                    </tr>
                </table>
                <table className="footer-menu-right">
                    <tr>
                        <td><i className="fas fa-hotel"/></td>
                        <td><span>Hotels</span></td>
                    </tr>
                    <tr>
                        <td><i className="fas fa-walking"/></td>
                        <td><span>Walking</span></td>
                    </tr>
                    <tr>
                        <td><i className="fas fa-dog"/></td>
                        <td><span>Fostering</span></td>
                    </tr>
                </table>
            </Grid>
        </Grid>
    )
};

export default Footer;
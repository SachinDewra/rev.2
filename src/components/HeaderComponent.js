import React, {Component} from "react";
import { Navbar, NavbarBrand, NavbarToggler,Collapse, NavItem, Nav } from 'reactstrap';
import { NavLink } from "react-router-dom";

class Header extends Component {

    constructor(props) {
        super(props);
        this.toggleNav = this.toggleNav.bind(this);
        this.state = {
            isNavOpen: false
        }
        
    }

    toggleNav() {
        this.setState({
            isNavOpen: !this.state.isNavOpen
        });
    }

    render() {
        return(
            <>
            <Navbar dark expand="md">
                <div className="container">
                    <NavbarToggler onClick={this.toggleNav}>
                    <NavbarBrand className="mr-auto" href="/">
                        <img src="https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://coursera-profile-photos.s3.amazonaws.com/8d/5ec520122f11e6ae4dad4a28c6ddb5/IMG_20160417_131926.jpg?auto=format%2Ccompress&dpr=2&w=40&h=40" height={30} width='40' alt="SD REST"></img>
                    </NavbarBrand>
                    </NavbarToggler>
                    <Collapse isOpen={this.state.isNavOpen} navbar>
                    <Nav navbar>
                        <NavItem>
                            <NavLink className="nav-link" to="/home">
                                <span className="fa fa-home ga-lg"></span>Home
                            </NavLink>
                            <NavLink className="nav-link" to="/aboutus">
                                <span className="fa fa-info ga-lg"></span>AboutUS
                            </NavLink>
                            <NavLink className="nav-link" to="/menu">
                                <span className="fa fa-list ga-lg"></span>Menu
                            </NavLink>
                            <NavLink className="nav-link" to="/contactus">
                                <span className="fa fa-list ga-lg"></span>ContactUS
                            </NavLink>
                        </NavItem>
                    </Nav>
                    </Collapse>
                </div>
            </Navbar>
            <div className="jumbotron">
                <div className="container">
                    <div className="row row-header">
                        <div className="col-12 col-sm-5">
                            <h1>SD Restaurant</h1>
                            <p>We take inspiration from the World's and create a 
                                uniuq funtion.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            </>
        );
    }
}

export default Header;
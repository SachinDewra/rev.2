import React, {Component} from "react";
import { Navbar, NavbarBrand, Jumbotron } from 'reactstrap';

class Header extends Component {
    render() {
        return(
            <>
            <Navbar dark>
                <div className="container">
                    <NavbarBrand href="/">Ristorante Con Fusion</NavbarBrand>
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
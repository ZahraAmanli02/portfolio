import React, { Component } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { MenuItems } from './MenuItems';
import './Navbar.css';

class Navbar extends Component {
    state = { clicked: false }

    clickedHandler = () => {
        this.setState({ clicked: !this.state.clicked});
    }

    render() {
        return (
            <nav className="NavbarItems">
                <Link to="/" className="navbar-logo">PORTFOLIO</Link>
                <div className="menu-icon" onClick={this.clickedHandler}>
                    <i className={ this.state.clicked ? 'fas fa-times' : 'fas fa-bars' }></i>
                </div>
                <ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
                    {
                        MenuItems.map((item, index) => {
                            return (
                                <div>
                                    <li key={index}>
                                        <NavLink to={item.path}  className={item.cName}>{item.title}</NavLink>
                                    </li>
                                </div>
                            );
                        })
                    }
                </ul>
            </nav>
    );
    }
    
}

export default Navbar;

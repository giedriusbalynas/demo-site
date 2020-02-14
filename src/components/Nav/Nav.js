import React, {useEffect, useState} from 'react';
import {Link, withRouter} from "react-router-dom";
import {connect} from "react-redux";
import {addPath} from "../../redux/actions";

import DrawerToggleButton from '../SideDrawer/DrawerToggleButton';
import './Nav.scss';

const Nav = withRouter(function Nav({location, addPath, drawerToggle}) {
    const [lastPath, setCurrentPath] = useState(location.pathname);

    useEffect(() => {
        const {pathname} = location;
        addPath(pathname);
        setCurrentPath(pathname);
    }, [location.pathname]);

    return (
        <header className="header">
            <div className="toolbar">
                <ul>
                    <li><a href="/">HOME |</a></li> {/* Should be '#' instead of '/', but then we get warnings in console */}
                    <li><a href="/"> &nbsp;SOME TEXT |</a></li>
                    <li><a href="/"> &nbsp;ANOTHER TEXT |</a></li>
                    <li><a href="/"> &nbsp;ONE MORE |</a></li>
                    <li><a href="/"> &nbsp;AND LAST ONE</a></li>
                </ul>
            </div>
            <nav className="nav">
                <div className="nav-logo"><Link to="/"><strong>DEMO</strong>SITE</Link></div>
                <div className="spacer"/>
                <div className="nav-items">
                    <ul>
                        <li><Link to="/">HOME</Link></li>
                        <li><Link to="/service">SERVICE</Link></li>
                        <li>
                            <div className="dropdown">
                                <button className="dropbtn">WORKS</button>
                                <div className="dropdown-content">
                                    <Link to="/works/all">ALL</Link>
                                    <Link to="/works/graphic">GRAPHIC</Link>
                                    <Link to="/works/design">DESIGN</Link>
                                    <Link to="/works/logo">LOGO</Link>
                                    <Link to="/works/website">WEBSITE</Link>
                                </div>
                            </div>
                        </li>
                        <li><Link to="/about-me">ABOUT ME</Link></li>
                        <li><Link to="/contact">CONTACT</Link></li>
                    </ul>
                </div>
                <div className="nav-toggle-button">
                    <DrawerToggleButton click={drawerToggle}/>
                </div>
            </nav>
        </header>
    );
});

export default connect(
    null,
    {addPath}
)(Nav);


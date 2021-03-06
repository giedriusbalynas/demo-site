import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import Nav from './components/Nav/Nav';
import {SideDrawer} from './components/SideDrawer/SideDrawer';
import {Backdrop} from './components/Backdrop/Backdrop';
import Footer from './components/Footer/Footer';
import Main from './components/Main/Main';
import Service from './components/Service/Service';
import AboutMe from './components/AboutMe/AboutMe';
import ContactNav from './components/ContactNav/ContactNav';
import All from './components/Works/All';
import Graphic from './components/Works/Graphic';
import Design from './components/Works/Design';
import Logo from './components/Works/Logo';
import Website from './components/Works/Website';
import {useSelector} from 'react-redux';

const App = () => {
    let backdrop;
    let drawerOpen = useSelector(state => state.drawerReducer);

    if (drawerOpen) {
        backdrop = <Backdrop/>
    }

    return (
        <div style={{height: '100%'}}>
            <Router>
                <Nav/>
                <SideDrawer/>
                {backdrop}
                <Switch>
                    <Route exact path="/">
                        <Main/>
                    </Route>
                    <Route path="/service" component={Service}>
                    </Route>
                    <Route path="/about-me" component={AboutMe}>
                    </Route>
                    <Route path="/contact" component={ContactNav}>
                    </Route>
                    <Route path="/works/all" component={All}>
                    </Route>
                    <Route path="/works/graphic" component={Graphic}>
                    </Route>
                    <Route path="/works/design" component={Design}>
                    </Route>
                    <Route path="/works/logo" component={Logo}>
                    </Route>
                    <Route path="/works/website" component={Website}>
                    </Route>
                </Switch>
                <Footer/>
            </Router>
        </div>
    );
};

export default App;

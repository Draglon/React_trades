import React, { Component } from 'react';
import { connect } from 'react-redux';
import {Router, Route, Switch} from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';
import { Scrollbars } from 'react-custom-scrollbars';

const history = createBrowserHistory();

// Components
import Header from '../Header/index.jsx';
import Footer from '../Footer/index.jsx';
// Pages
import Home from '../Home/index.jsx';
import Exchange from '../Exchange/index.jsx';
import News from '../News/index.jsx';
import Trade from '../Trade/index.jsx';
import Wallet from '../Wallet/index.jsx';
import Notifications from '../Notifications/index.jsx';
// var Settings = require('./pages/Settings.js');

import Login from '../Login/index.jsx';
import Signup from '../Signup/index.jsx';
import ForgotPassword from '../ForgotPassword/index.jsx';
import TermsConditions from '../TermsConditions/index.jsx';
import NotFound from '../NotFound/index.jsx';

class AppComponent extends Component {
    render() {
        return(
            <Scrollbars className='scrollbar' style={{ width: '100%', height: '100vh' }}>
                <Router history={history}>
                    {window.location.pathname === '/admin' ? 
                        <main className='main'>
                            <Switch>
                                <Route path='/admin' component={AdminPanel} />
                            </Switch>
                        </main>
                    :
                        <div>
                            <Header />
                            <main className='main page'>
                                <Switch>
                                    <Route path='/' exact component={Home} />
                                    <Route path='/news' component={News} />
                                    <Route path='/trade' component={Trade} />
                                    <Route path='/exchange' component={Exchange} />
                                    <Route path='/wallet' component={Wallet} />
                                    <Route path='/notifications' component={Notifications} />
                                    {/* <Route path='/settings' component={Settings} /> */}
                                    <Route path='/login' component={Login} />
                                    <Route path='/signup' component={Signup} />
                                    <Route path='/forgot' component={ForgotPassword} />
                                    <Route path='/terms' component={TermsConditions} />
                                    <Route component={NotFound} />
                                </Switch>
                                <Footer />
                            </main>
                        </div>
                    }
                </Router>
            </Scrollbars>
        );
    }
}
// module.exports = AppComponent;

export default connect(
    state => ({

    }),
    dispatch => ({
        
    })
)(AppComponent);
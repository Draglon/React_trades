import React, { Component } from 'react';
import { connect } from 'react-redux';
import {Router, Route, Switch} from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';

const history = createBrowserHistory();

// Components
var Header = require('./Header.js');
var Footer = require('./Footer.js');
// Pages
var Home = require('./pages/Home.js');
var News = require('./pages/News.js');
var Trade = require('./pages/Trade.js');
var Exchange = require('./pages/Exchange.js');
var Wallet = require('./pages/Wallet.js');
var Settings = require('./pages/Settings.js');
var Notifications = require('./pages/Notifications.js');
var Login = require('./pages/Login.js');
var Signup = require('./pages/Signup.js');
var ForgotPassword = require('./pages/ForgotPassword.js');
var TermsConditions = require('./pages/TermsConditions.js');
var NotFound = require('./pages/NotFound.js');

class App extends Component {
    render() {
        return(
            <Router history={history}>
                {window.location.pathname === '/admin' ? 
                    <div>
                        {/* <Switch>
                            <Route path='/admin' component={AdminPanel} />
                        </Switch> */}
                    </div>
                :
                    <div>
                        <Header />
                        <div className='page'>
                            <Switch>
                                <Route path='/' exact component={Home} />
                                <Route path='/news' component={News} />
                                <Route path='/trade' component={Trade} />
                                <Route path='/exchange' component={Exchange} />
                                <Route path='/wallet' component={Wallet} />
                                <Route path='/notifications' component={Notifications} />
                                <Route path='/settings' component={Settings} />
                                <Route path='/login' component={Login} />
                                <Route path='/signup' component={Signup} />
                                <Route path='/forgot' component={ForgotPassword} />
                                <Route path='/terms' component={TermsConditions} />
                                <Route component={NotFound} />
                            </Switch>
                            <Footer />
                        </div>
                    </div>
                }
            </Router>
        );
    }
}

export default connect(
    state => ({

    }),
    dispatch => ({
        
    })
)(App);
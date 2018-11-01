import React, { Component } from 'react';
import { connect } from 'react-redux';
import {NavLink, BrowserRouter}  from 'react-router-dom';

class ProfileBalance extends Component {
    render() {
        return (
            <div className='profile__balance'>
                <div className='profile__balance-btn'><i className='icon-credit-card'></i>0.11215466 BTC</div>
                <div className='profile__wallet'>
                    <ul className='profile__wallet-list'>
                        <li className='profile__wallet-item'>
                            <div>&nbsp;</div>
                            <div>Баланс</div>
                            <div>В ордерах</div>
                        </li>
                        <li className='profile__wallet-item'>
                            <div>BTC</div>
                            <div>0</div>
                            <div>0</div>
                        </li>
                        <li className='profile__wallet-item'>
                            <div>DOGE</div>
                            <div>3206.75</div>
                            <div>0</div>
                        </li>
                        <li className='profile__wallet-item'>
                            <div>DASH</div>
                            <div>0</div>
                            <div>0</div>
                        </li>
                        <li className='profile__wallet-item'>
                            <div>ETH</div>
                            <div>0.20636616</div>
                            <div>0</div>
                        </li>
                        <li className='profile__wallet-item'>
                            <div>XRP</div>
                            <div>1000</div>
                            <div>0</div>
                        </li>
                    </ul>
                    <NavLink className='profile__wallet-link' to='/wallet'>Перейти в кошелек<i className='icon-circle-right'></i></NavLink>
                </div>
            </div>
        );
    }
}

export default connect(
    state => ({

    }),
    dispatch => ({
        
    })
)(ProfileBalance);
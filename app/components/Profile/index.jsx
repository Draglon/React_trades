import React, { Component } from 'react';
import { connect } from 'react-redux';
import {NavLink, BrowserRouter}  from 'react-router-dom';

class Profile extends Component {
    render() {
        return (
            <div className='profile'>
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
                
                <nav className='profile__nav'>
                    <div className='profile__name'>test321</div>
                    <ul className='profile__list'>
                        <li className='profile__item'><NavLink className='profile__link' to='/'>Верификация аккаунта</NavLink></li>
                        <li className='profile__item'><NavLink className='profile__link' to='/'>Личные сообщения</NavLink></li>
                        <li className='profile__item'><NavLink className='profile__link' to='/'>Реферальная программа</NavLink></li>
                        <li className='profile__item'><NavLink className='profile__link' to='/'>История торгов</NavLink></li>
                        <li className='profile__item'><NavLink className='profile__link' to='/news'>Новости</NavLink></li>
                        <li className='profile__item'><NavLink className='profile__link' to='/settings'>Настройки</NavLink></li>
                        <li className='profile__item'><NavLink className='profile__link' to='/'>Выйти</NavLink></li>
                    </ul>
                </nav>
            </div>
        );
    }
}

export default connect(
    state => ({

    }),
    dispatch => ({
        
    })
)(Profile);
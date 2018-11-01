import React, { Component } from 'react';
import { connect } from 'react-redux';
import {NavLink, BrowserRouter}  from 'react-router-dom';

class Profile extends Component {
    render() {
        return (
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
        );
    }
}

export default connect(
    state => ({

    }),
    dispatch => ({
        
    })
)(Profile);
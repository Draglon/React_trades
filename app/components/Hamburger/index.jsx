import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getMenuToggle } from '../../store/selector.jsx';

class Hamburger extends Component {
    render() {
        const {menuToggle, onMenuToggle } = this.props;
        return (
            <div className={`hamburger${menuToggle ? ' active' : ''}`} onClick={onMenuToggle}>
                <span className='hamburger__icon'></span>
            </div>
        );
    }
}

export default connect(
    state => ({
        menuToggle: getMenuToggle(state),
    }),
    dispatch => ({
        onMenuToggle: () => {
            dispatch({type: 'MENU_TOGGLE' });
        },
    })
)(Hamburger);

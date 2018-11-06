import React, { Component } from 'react';
import { connect } from 'react-redux';

class Radio extends Component {      
    render() {
        const { type, id, name, value, label } = this.props;

        return (
            <>
                <input type={type} id={id} name={name} defaultValue={value || null} />
                {label ? <label className='form__label' forHtml={id}>{label}</label> : null}
            </>
        );
    }
}
 
export default connect(
    state => ({

    }),
    dispatch => ({
        
    })
)(Radio);
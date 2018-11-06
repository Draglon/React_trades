import React, { Component } from 'react';
import { connect } from 'react-redux';

class Submit extends Component {      
    render() {
        const { className, value } = this.props;

        return (
            <input type='submit' className={className} value={value || ''} />
        );
    }
}
 
export default connect(
    state => ({

    }),
    dispatch => ({
        
    })
)(Submit);
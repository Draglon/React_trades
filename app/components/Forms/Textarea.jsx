import React, { Component } from 'react';
import { connect } from 'react-redux';

class Textarea extends Component {      
    render() {
        const { id, name, placeholder, rows, cols, minlength, maxlength, disabled, errors } = this.props;

        return (
            <textarea 
                id={id || null}
                name={name || null}
                rows={rows || null}
                cols={cols || null}
                minLength={minlength || null}
                maxLength={maxlength || null}
                placeholder={placeholder || null}
            ></textarea>
        );
    }
}
 
export default connect(
    state => ({

    }),
    dispatch => ({
        
    })
)(Textarea);
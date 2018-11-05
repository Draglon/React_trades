import React, { Component } from 'react';
import { connect } from 'react-redux';

class Field extends Component {      
    render() {
        const { type, name, label,  placeholder, value, id, className, classIcon, forHtml, checked, required } = this.props;
        let fieldType = type || 'text';
        let error = false;

        return (
            <div className='form__field'>
                {fieldType === 'checkbox' || fieldType === 'radio' ?
                    <> 
                        <input type={fieldType} />
                        {label ? <label className='form__label'>{label}</label> : null}
                    </>
                : null}

                {fieldType === 'text' || fieldType === 'email' || fieldType === 'password' || fieldType === 'tel' || fieldType === 'number' ? 
                    <>
                        {label ? <label className='form__label'>{label}</label> : null}
                        <input
                            type={fieldType}
                            placeholder={placeholder ? placeholder : null}
                            id={id ? id : null}
                            className={className ? className : null}
                            name={name ? name : null}
                            value={value ? value : null}
                        />
                        {classIcon ? <i className={classIcon}></i> : null}
                        {error ? <span className='form__field-error'>Error</span> : null}
                    </>
                : null}

                {fieldType === 'textarea' ? 
                    <>
                        {label ? <label className='form__label'>{label}</label> : null}
                        <textarea></textarea>
                        {error ? <span className='form__field-error'>Error</span> : null}
                    </>
                : null}
            </div>
        );
    }
}
 
export default connect(
    state => ({

    }),
    dispatch => ({
        
    })
)(Field);
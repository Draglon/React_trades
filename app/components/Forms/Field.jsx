import React, { Component } from 'react';
import { connect } from 'react-redux';

import Checkbox from './Checkbox.jsx';
import Radio from './Radio.jsx';
import Textarea from './Textarea.jsx';
import Input from './Textarea.jsx';

class Field extends Component {      
    render() {
        const { type, name, label, placeholder, value, id, className, classIcon, forHtml, checked, rows, cols, minlength, maxlength, disabled, required } = this.props;
        let fieldType = type || 'text';
        let error = false;

        return (
            <div className='form__field'>
                {fieldType === 'checkbox' ?
                    <Checkbox type={type} id={id} name={name} value={value} label={label} />
                : null}

                {fieldType === 'radio' ?
                    <Radio type={type} id={id} name={name} value={value} label={label} />
                : null}

                {fieldType === 'text' || fieldType === 'email' || fieldType === 'password' || fieldType === 'tel' || fieldType === 'number' ? 
                    <>
                        {label ? <label className='form__label'>{label}</label> : null}
                        <input
                            type={type || 'text'}
                            placeholder={placeholder || null}
                            id={id || null}
                            className={className || null}
                            name={name || null}
                            defaultValue={value || null}
                            // error={() => {}}
                        />
                        {classIcon ? <i className={classIcon}></i> : null}
                        {error ? <span className='form__field-error'>Error</span> : null}
                    </>
                : null}

                {fieldType === 'textarea' ? 
                    <>
                        {label ?
                            <label className='form__label'>{label}</label>
                        : null}
                        <Textarea 
                            id={id || null}
                            name={name || null}
                            rows={rows || null}
                            cols={cols || null}
                            minlength={minlength || null}
                            maxlength={maxlength || null}
                            placeholder={placeholder || null}
                        />
                        {error ? 
                            <span className='form__field-error'>Error</span>
                        : null}
                    </>
                : null}

                {fieldType === 'select' ? 
                    <>
                            
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
import React, { Component } from 'react';
import { connect } from 'react-redux';
 
class AdminPanel extends Component{
    render(){
        return (
            <section className='section admin'>
                <div className='wrapper'>
                    <h2>Admin Panel</h2>
                </div>
            </section>
        );
    }
}

export default connect(
    state => ({

    }),
    dispatch => ({
        
    })
)(AdminPanel);
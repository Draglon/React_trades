import React, { Component } from 'react';
import { connect } from 'react-redux';
 
class News extends Component{
    render(){
        return (
            <section className='section news'>
                <div className='wrapper'>
                    <h2>Новости</h2>
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
)(News);
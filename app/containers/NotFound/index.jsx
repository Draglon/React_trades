import React, { Component } from 'react';
import { connect } from 'react-redux';
 
class NotFound extends Component{
    render(){
        return (
            <section className=''>
                <div className='wrapper'>
                    <h2>Ресурс не найден</h2>
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
)(NotFound);
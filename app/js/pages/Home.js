var React = require('react');

class Home extends React.Component {

    constructor(props) {
        super(props);

        this.state = {showPopup: false};
    }

    render() {
        return (
            <main className='main'>
                <section className='section invitation'>
                    <div className='wrapper'>
                        <h1 className='invitation__title'>Invitation</h1>
                    </div>
                </section>
            </main>
        );
    }
}
 
module.exports = Home;
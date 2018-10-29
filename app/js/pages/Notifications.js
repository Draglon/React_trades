var React = require('react');

class Notifications extends React.Component {
    render() {
        return (
            <main className='main'>
                <section className='section notifications'>
                    <div className='wrapper'>
                        <h2 className='settings__title'>Notifications</h2>
                    </div>
                </section>
            </main>
        );
    }
}
 
module.exports = Notifications;
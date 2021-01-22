import React from 'react';

class Clock extends React.Component {

    constructor() {
        super();
        this.state = { clock: new Date() };
    }
    
    componentDidMount() {
        this.update = setInterval(() => {
            this.setState({ clock: new Date() });
        }, 1 * 1000);
    }

    componentWillUnmount() {
        clearInterval(this.update);
    }

    render() {
        const { clock } = this.state;

        return (<div>
            <h3>
                {clock.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
            </h3>
        </div>);
    }
}

export default Clock;
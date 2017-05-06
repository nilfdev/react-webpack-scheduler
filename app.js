// import Container from './src/components/container.jsx';

import World from './src/components/world';
import Grid from './src/components/grid';

import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            requests: props.data
        };
    }

    render() {
        if (!this.state.requests) {
            return <h1>No data found</h1>
        } else {
            return <Grid data={this.state.requests}/>
        }
    }

}

const requests = [
    {
        id: '1546468987987987',
        user: 'user_a',
        start: '2017-05-02',
        end: '2017-05-03',
        status: 'approved'
    }, {
        id: '278986564651787',
        user: 'user_b',
        start: '2017-05-03',
        end: '2017-05-08',
        status: 'created'
    }
];

ReactDOM.render(
    <App data={requests}/>, document.getElementById('container'));

// import Container from './src/components/container.jsx';

import World from './src/components/world';
import Grid from './src/components/grid';

import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            requests: props.data,
            _inputStart: '2017-05-01',
            _inputEnd: '2017-05-20'
        };
        this.changeContentStart = this.changeContentStart.bind(this);
        this.changeContentEnd = this.changeContentEnd.bind(this);
        this.onRefreshClickHandler = this.onRefreshClickHandler.bind(this);
    }

    changeContentStart(e) {
        console.log('change content st' + e.target.value);
        this.setState({ _inputStart: e.target.value })
    }

    changeContentEnd(e) {
        console.log('change content end' + e.target.value);
        this.setState({ _inputEnd: e.target.value })
    }

    onRefreshClickHandler() {
        this.setState({ _inputStart: this.state._inputStart });
        this.setState({ _inputEnd: this.state._inputEnd });
    }


    render() {

        if (!this.state.requests) {
            return <h1>No data found</h1>
        } else {
            return (
                <div>
                    start:<input type='text' onChange={this.changeContentStart} defaultValue='2017-05-01' />
                    end:<input type='text' ref='end' onChange={this.changeContentEnd} defaultValue='2017-05-20' />

                    <input type='button' ref='action' value='refresh' onClick={this.onRefreshClickHandler} />

                    <br />
                    <Grid start={this.state._inputStart} end={this.state._inputEnd} />
                    {/*<Grid start={this.state.requests} />*/}
                </div>
            )

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
    <App data={requests} />, document.getElementById('container'));

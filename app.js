// import Container from './src/components/container.jsx';

import DataTable from './src/components/dataTable';

import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            requests: props.data, //TODO: DO NOT KNOW WHAT TO USE: props from component
            teams: teams,         // or props from the page itself
            _inputStart: startDate,
            _inputEnd: endDate
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
        // this.setState({ _inputStart: this.state._inputStart });
        // this.setState({ _inputEnd: this.state._inputEnd });
    }


    render() {

        if (!this.state.requests) {
            return <h1>No data found</h1>
        } else {
            return (
                <div>
                    start:<input type='text' onChange={this.changeContentStart} defaultValue={startDate} />
                    end:<input type='text' ref='end' onChange={this.changeContentEnd} defaultValue={endDate} />
                    <input type='button' ref='action' value='Redundatn refresh button' onClick={this.onRefreshClickHandler} />
                    <br />
                    <DataTable start={this.state._inputStart} end={this.state._inputEnd} teams={this.state.teams} requests={this.state.requests} />
                </div>
            )

        }
    }
}

let startDate = '2017-05-01';
let endDate = '2017-05-21'

const teams = [
    {
        id: '123',
        name: 'Carbon',
        members: ['Ilia', 'Dmytro', 'Alex']
    },
    {
        id: '345',
        name: 'Neon',
        members: ['Mykola', 'Oleksandr', 'Vyacheslav']
    }
]

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

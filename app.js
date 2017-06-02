// import Container from './src/components/container.jsx';

import DataTable from './src/components/dataTable';

import React from 'react';
import ReactDOM from 'react-dom';

import DayPicker from "react-day-picker";


class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            requests: props.data, //TODO: DO NOT KNOW WHAT TO USE: props from component
            teams: teams,         // or props from the page itself
            _inputStart: startDate,
            _inputEnd: endDate,
            selectedDay: undefined
        };
        this.changeContentStart = this.changeContentStart.bind(this);
        this.changeContentEnd = this.changeContentEnd.bind(this);
        this.onRefreshClickHandler = this.onRefreshClickHandler.bind(this);
        this.handleDayClick = this.handleDayClick.bind(this);
    }

    handleDayClick (day,selected){
        this.setState({selectedDay: selected ? undefined : day});
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

                    <div style= {{position: 'absolute', backgroundColor: 'white'}}>
                     <DayPicker
                        disabledDays={{ daysOfWeek: [0] }}
                        selectedDays={this.state.selectedDay}
                        onDayClick={this.handleDayClick}
                    />
                    </div>
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
        user: 'Ilia',
        date: '2017-05-02',
        status: 'approved'
    }, {
        id: '278986564651787',
        user: 'Mykola',
        date: '2017-05-03',
        status: 'created'
    }
];

ReactDOM.render(
    <App data={requests} />, document.getElementById('container'));

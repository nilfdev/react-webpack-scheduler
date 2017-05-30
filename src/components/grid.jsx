import React from 'react';
import ReactDOM from 'react-dom';

import HeaderRow from './headerRow';
import Rows from './rows';

import { Util } from '../utils/util.js';

export default class Grid extends React.Component {



    constructor(props) {
        super(props);


        this.state = {
            request: this.props.requests,
            teams: this.props.teams,
            start: this.props.start,
            end: this.props.end
        }
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            requests: nextProps.requests,
            teams: nextProps.teams, //TODO: probably teams is static array we don't need to refresh all the time
            start: nextProps.start,
            end: nextProps.end
        });
    }
    getDates(start, end) {
        let startDate = this.convertToDate(start);
        let endDate = this.convertToDate(end);
        let dates = new Array();

        while (startDate && endDate && startDate <= endDate) {
            dates.push(startDate.toDateString("yyyy-mm-dd"));
            startDate = this.addDays(startDate, 1);
        }
        return dates
    }
    convertToDate(datestring) {
        let date = new Date(datestring);
        if (Object.prototype.toString.call(date) === '[object Date]') {
            return date;
        }
        return null;
    }

    addDays(date, days) {
        var result = new Date(date);
        result.setDate(result.getDate() + days);
        return result;
    }

    render() {
        const dates = this.getDates(this.state.start, this.state.end);

        return (
            <div className="divTable">
                <div className="divTableBody">
                    <HeaderRow dates={dates} />
                    <Rows dates={dates} teams= {this.state.teams} requests={this.state.requests} />
                </div>
            </div>
        )
    }

}

const validate = (props, propName, componentName) => {
    if (props[propName]) {
        console.log('valid property: ' + propName);
    }
};

Grid.propTypes = {
    requests: (props, propName, componentName) => { 
        if(props[propName].length < 1){
            console.log('Array is empty: ' + propName); 
        }
    },
    teams: (props, propName, componentName) => { 
         if(!props[propName] || props[propName].length < 1){
                console.log('Do not know what kind of validations I need here, but this is an ERROR: ' + propName); 
         }
    },
    start: validate,
    end: validate
};

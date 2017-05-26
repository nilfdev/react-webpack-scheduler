import React from 'react';
import ReactDOM from 'react-dom';

import HeaderRow from './headerRow';
import Row from './row';

import { Util } from '../utils/util.js';

export default class Grid extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            start: this.props.start,
            end: this.props.end
        }
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            start: nextProps.start,
            end: nextProps.end
        });
    }
    getDates(start, end) {
        debugger;
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
        // for (let i = this.state.start; i <= this.state.end; i++) {
        //     dates.push(i);
        // }

        return (
            <div className="divTable">
                <div className="divTableBody">
                    <HeaderRow data={dates} />
                    <Row data={dates} />
                </div>
            </div>
        )
    }
}

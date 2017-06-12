import React from 'react';
import ReactDOM from 'react-dom';
import { DateService } from '../services/dateService';


export default class HeaderDateCell extends React.Component {
    render() {
        let date = DateService.toDate(this.props.val);
        if (!date) {
            console.error("Invalid date");
            return;
        }

        let className = DateService.isWeekend(date)
            ? "data_table__header-weekend"
            : "data-table__header-active";

        return (
            <th className={className}>{DateService.format(date)}</th>
        )
    }
}
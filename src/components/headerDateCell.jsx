import React from 'react';
import ReactDOM from 'react-dom';

export default class HeaderDateCell extends React.Component {

    isWeekend(date) {
        let day = new Date(date).getDay();
        return day == 6 || day == 0;
    }


    convertToDate(datestring) {
        let date = new Date(datestring);
        if (Object.prototype.toString.call(date) === '[object Date]') {
            return date;
        }
        return null;
    }

    formatDate(date) {


        return days[date.getDay()] + ' ' +
            date.getUTCFullYear() + "." +
            ("0" + (date.getUTCMonth() + 1)).slice(-2) + "." +
            ("0" + date.getUTCDate()).slice(-2);
    }

    render() {
        let date = this.convertToDate(this.props.val);
        if (!date) {
            console.error("Invalid date");
            return; 
        }
        
         let className = this.isWeekend(date) ? "data_table__header-weekend" : "data-table__header-active";
     
        return (
            <th className={className}>
                {this.formatDate(date)}
            </th>
        )
    }
}

const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
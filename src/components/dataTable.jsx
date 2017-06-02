import React from 'react';
import ReactDOM from 'react-dom';

import HeaderDateCell from './headerDateCell';
import HeaderTextCell from './headerTextCell';

import TextCell from './textCell';
import ClickableCell from './clickableCell';

import {Util} from '../utils/util.js';

export default class DataTable extends React.Component {

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
            requests: nextProps.requests, teams: nextProps.teams, //TODO: probably teams is static array we don't need to refresh all the time
            start: nextProps.start,
            end: nextProps.end
        });
    }
    getDates(start, end) {
        let startDate = this.convertToDate(start);
        let endDate = this.convertToDate(end);
        let dates = new Array();

        while (startDate && endDate && startDate <= endDate) {
            startDate = this.addDays(startDate, 1);
            dates.push(startDate.toDateString("yyyy-mm-dd"));
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
        let headerCells = [];
          headerCells.push( <HeaderTextCell key={'hdr_team'} val='Team'></HeaderTextCell>);
          headerCells.push( <HeaderTextCell key={'hdr_person'} val='Person'></HeaderTextCell>);
        for (let i=0; i<dates.length; i++) {
            headerCells.push(<HeaderDateCell key={'hdr' + i} val={ dates[i] }></HeaderDateCell>);
        }


        let dataRows = [];
          for (let [index, elem] of this.props.teams.entries()) {
            let dataCells = [];

            for(let[ind, el] of elem.members.entries()){
                let memberCells = [];
                for (let i=0; i< dates.length; i++) {
                    memberCells.push(<ClickableCell key={'mbmCell' + i} val='-'></ClickableCell>);
                }

                if (ind == 0){
                    dataCells.push(
                    <tr>
                        <TextCell key={'tm' + index} val ={elem.name} rowSpan={elem.members.length }></TextCell>
                        <TextCell key={'mbr' + ind} val ={el} rowSpan='1'></TextCell>
                        {memberCells}
                    </tr>);
                } else {
                    dataCells.push(
                    <tr>
                        <TextCell key={'mbr' +ind} val ={el} rowSpan='1'></TextCell>
                        {memberCells}
                    </tr>);
                }
            }
            
            dataRows.push(dataCells);
        }

     

        return (
        /*<div className="divTable">
                <div className="divTableBody">
                    <HeaderRow dates={dates} />
                    <Rows dates={dates} teams= {this.state.teams} requests={this.state.requests} />
                </div>
            </div>*/ 
            <table className="data-table">
                <thead>
                    <tr>
                       {headerCells}
                   </tr>
                </thead>
                    <tbody>
                        {dataRows}
                    </tbody>
            </table>
            )
    }

}

const validate = (props, propName, componentName) => {
    if (props[propName]) {
        console.log('valid property: ' + propName);
    }
};

DataTable.propTypes = {
    requests: (props, propName, componentName) => {
        if (props[propName].length < 1) {
            console.log('Array is empty: ' + propName);
        }
    },
    teams: (props, propName, componentName) => {
        if (!props[propName] || props[propName].length < 1) {
            console.log('Do not know what kind of validations I need here, but this is an ERROR: ' + propName);
        }
    },
    start: validate,
    end: validate
};

import React from 'react';
import ReactDOM from 'react-dom';

import {HeaderDateCell} from './headerDateCell';
import {HeaderTextCell } from './headerTextCell';
import {TextCell} from './textCell';
import ClickableCell from './clickableCell';

import { getDatesBetween } from '../dateServices';
import { getRequest } from '../requestServices';


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
            requests: nextProps.requests, 
            teams: nextProps.teams, //TODO: probably teams is static array we don't need to refresh all the time
            start: nextProps.start,
            end: nextProps.end
        });
    }
  
    render() {
        const dates = getDatesBetween(this.state.start, this.state.end);
        let headerCells = [];
        headerCells.push(<HeaderTextCell key={'hdr_team'} val='Team'></HeaderTextCell>);
        headerCells.push(<HeaderTextCell key={'hdr_person'} val='Person'></HeaderTextCell>);
        for (let i = 0; i < dates.length; i++) {
            headerCells.push(<HeaderDateCell key={'hdr' + i} val={dates[i]}></HeaderDateCell>);
        }

        let rows = [];
        for (let [t, team] of this.props.teams.entries()) {
            let dataCells = [];
            
            for (let [m, member] of team.members.entries()) {
                let memberCells = [];
                for (let i = 0; i < dates.length; i++) {
                    memberCells.push(<ClickableCell key={'mbmCell' + i} val='*' request={getRequest(this.props.requests, member, dates[i])}></ClickableCell>);
                }

                if (m == 0) {
                    dataCells.push(
                        <tr>
                            <TextCell key={'tm' + t} val={team.name} rowSpan={team.members.length}></TextCell>
                            <TextCell key={'mbr' + m} val={member} rowSpan='1'></TextCell>
                            {memberCells}
                        </tr>
                    );
                } else {
                    dataCells.push(
                        <tr>
                            <TextCell key={'mbr' + m} val={member} rowSpan='1'></TextCell>
                            {memberCells}
                        </tr>
                    );
                }
            }
            rows.push(dataCells);
        }
        return (
            <table className="data-table">
                <thead>
                    <tr>
                        {headerCells}
                    </tr>
                </thead>
                <tbody>
                    {rows}
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

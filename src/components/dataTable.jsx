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
        }
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            requests: nextProps.requests, 
            teams: nextProps.teams, //TODO: probably teams is static array we don't need to refresh all the time
            start: nextProps.start,
            end: nextProps.end,
            team: nextProps.team
        });

    }
  
    render() {
        let filteredTeams = this.props.teams.filter(team =>  team.name == this.props.team || !this.props.team);

        
        const dates = getDatesBetween(this.props.start, this.props.end);

        let headerCells = [];
        headerCells.push(<HeaderTextCell key={'hdr_team'} val='Team'></HeaderTextCell>);
        headerCells.push(<HeaderTextCell key={'hdr_person'} val='Person'></HeaderTextCell>);
        for (let i = 0; i < dates.length; i++) {
            headerCells.push(<HeaderDateCell key={'hdr' + i} val={dates[i]}></HeaderDateCell>);
        }

        let rows = [];
        for (let [t, team] of filteredTeams.entries()) {
            let dataCells = [];
            
            for (let [m, member] of team.members.entries()) {
                let memberCells = [];

                for (let i = 0; i < dates.length; i++) {
                    memberCells.push(<ClickableCell key={'mbmCell' + i} val='*' 
                                        request={getRequest(this.props.requests, member, dates[i])}
                                        user={member}
                                        date={dates[i]}
                                        onClick = {this.props.handleCellClick}>
                        </ClickableCell>);
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
        
    }
};

DataTable.propTypes = {
    requests: (props, propName, componentName) => {
        if (props[propName].length < 1) {
            //TODO: handle exceptions
        }
    },
    teams: (props, propName, componentName) => {
        if (!props[propName] || props[propName].length < 1) {
            //TODO: handle exceptions
        }
    },
    start: validate,
    end: validate
};

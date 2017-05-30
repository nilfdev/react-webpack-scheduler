import React from 'react';
import ReactDOM from 'react-dom';

export default class HeaderRow extends React.Component {
    render() {
        var headerCells = [];
        for (let [index, elem] of this.props.dates.entries()) {
            headerCells.push(<div className="divTableCell divTableHeading" key={index}>{elem}</div>);
        }
        return (
            <div className="divTableRow">
                <div className="divTableCell divTableHeading">Team</div>
                <div className="divTableCell divTableHeading">Person</div>
                {headerCells}
            </div>
        )
    }
}
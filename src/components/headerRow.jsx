import React from 'react';
import ReactDOM from 'react-dom';

export default class HeaderRow extends React.Component {
    render() {
        var cells = [];
        for (let [index, elem] of this.props.data.entries()) {
            cells.push(<div className="divTableCell divTableHeading" key={index}>{elem}</div>);
        }
        return (
            <div className="divTableRow">
                <div className="divTableCell divTableHeading">Person</div>
                {cells}
            </div>
        )
    }
}
import React from 'react';
import ReactDOM from 'react-dom';

export default class Rows extends React.Component {
    constructor(props) {
        super(props);
        this.onCellClick = this.onCellClick.bind(this);
    }
    onCellClick(e) {
        console.log('cell click event. Data attribute: ' + e.target.getAttribute('data'));
    }

    render() {
        var rows = [];

        for (let [index, elem] of this.props.teams.entries()) {
            var cells = [];
            for (let i = 0; i < elem.members.length; i++) {
                cells.push(<div className="divTableCell">{elem.members[i]}</div>);
            }

            rows.push(
                <div className="divTableRow" key={index}>
                    <div className="divTableCell" rowSpan={elem.members.length}>{elem.name}</div>
                    {cells}
                </div>);
        }


        var cells = [];
        for (let [index, elem] of this.props.dates.entries()) {
            cells.push(<div className="divTableCell" data={elem} key={index} onClick={this.onCellClick}>*</div>);
        }

        /*
        <div className="divTableRow">
                <div className="divTableCell">The name</div>
                {cells}
            </div>
        */

        return (

            <div>
                {rows}
            </div>
        )
    }
}
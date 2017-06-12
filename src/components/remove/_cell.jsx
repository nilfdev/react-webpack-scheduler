import React from 'react';
import ReactDOM from 'react-dom';

export default class Cell extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id: this.props.id,
            rowSpan: this.props.rowSpan,
            key: this.props.key
        };
        this.onCellClick = this.onCellClick.bind(this);
    }
    onCellClick(e) {
        console.log('cell click event. Data attribute: ' + e.target.getAttribute('key'));
    }

    render() {
        
        return (
            <div className="divTableCell" rowSpan={this.props.rowSpan} id={this.props.id} onClick={this.onCellClick}>
                {this.props.val}
            </div>
        )
    }
}

import React from 'react';
import ReactDOM from 'react-dom';

export default class ClickableCell extends React.Component {
    constructor(props) {
        super(props);
        this.onCellClick = this.onCellClick.bind(this);
    }
    onCellClick(e) {
        let request = e.target.getAttribute('data');

        if (this.props.request) {
            // console.log('cell click event. Request attribute id: ' + this.props.request.id);
            // console.log('cell click event. Request attribute status: ' + this.props.request.status);
            return;
        }
        e.target.innerText = 'v';
        
        this.props.onClick({user: this.props.user, date: this.props.date});
    }
    getInnerText() {
        if (this.props.request) {
            return this.props.request.status;
        }
        return '.';
    }

    getClassName() {
        let className = 'data-table_cell';
        className += ((this.props.request) ? ' data-table_cell-requested' :  ' data-table_cell-clickable');
        return className;
    }

    render() {
        const innerText = this.getInnerText();
        return (
            <td className={this.getClassName()}
                onClick={this.onCellClick}>
                {innerText}
            </td>
        )
    }
}
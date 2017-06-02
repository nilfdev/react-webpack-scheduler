import React from 'react';
import ReactDOM from 'react-dom';

export default class ClickableCell extends React.Component {
    constructor(props) {
        super(props);
        this.onCellClick = this.onCellClick.bind(this);
    }
    onCellClick(e) {
        console.log('cell click event. Data attribute: ' + e.target.getAttribute('data'));
    }
    render() {

        return (
            <td className="data-table_cell data-table_cell-clickable" rowSpan={this.props.rowSpan} data={this.props.data} onClick={this.onCellClick}>
                {this.props.val}
            </td>
        )
    }
}

// Cell.propTypes = {
//   rowSpan: PropTypes.element.isRequired
// };
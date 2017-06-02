import React from 'react';
import ReactDOM from 'react-dom';

export default class TextCell extends React.Component {
    render() {

        return (
            <td className="data-table_cell" rowSpan={this.props.rowSpan} data={this.props.data}>
                {this.props.val}
            </td>
        )
    }
}


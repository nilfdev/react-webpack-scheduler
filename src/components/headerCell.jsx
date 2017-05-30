import React from 'react';
import ReactDOM from 'react-dom';

export default class HeaderCell extends React.Component {
    render() {

        return (
            <th className="data-table_header">
                {this.props.text}
            </th>
        )
    }
}

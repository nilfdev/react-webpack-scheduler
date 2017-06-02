import React from 'react';
import ReactDOM from 'react-dom';

export default class HeaderTextCell extends React.Component {
    render() {

        return (
            <th className="data-table__header-active">
                {this.props.val}
            </th>
        )
    }
}

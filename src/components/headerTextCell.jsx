import React from 'react';
import ReactDOM from 'react-dom';

export const HeaderTextCell = ({ val }) => {
    return (
        <th className="data-table__header-active">
            {val}
        </th>
    )
}
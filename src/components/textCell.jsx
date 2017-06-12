import React from 'react';
import ReactDOM from 'react-dom';


export const TextCell = ({ rowSpan, data, val }) => {
    <td className="data-table_cell" rowSpan={rowSpan} data={data}>
        {val}
    </td>
}

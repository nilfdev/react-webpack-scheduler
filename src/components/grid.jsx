import React from 'react';
import ReactDOM from 'react-dom';
import HeaderCell from './headerCell';
import Cell from './cell';

import {Util} from '../utils/util.js';

export default class Grid extends React.Component {
    render() {
        let u = new Util('');

        let dates = u.DatesInInterval();

        return (
         <div className="divTable">
                <div className="divTableBody">
                    <HeaderCell data={dates}/>
                    <Cell data={this.props.data}/>
                </div>
            </div>
        )
    }
}

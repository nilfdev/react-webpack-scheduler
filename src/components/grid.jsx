import React from 'react';
import ReactDOM from 'react-dom';

import HeaderCell from './headerCell';
import Cell from './cell';

import { Util } from '../utils/util.js';

export default class Grid extends React.Component {
    constructor(start, end) {
        super(start, end);

        this.start = start;
        this.end = end;
    }
    render() {
        let u = new Util(this.start, this.end);
        let dates = u.DatesInInterval();
        console.log('render');
        
        return (
            <div className="divTable">
                <div className="divTableBody">
                    <HeaderCell data={dates} />
                    <Cell data={this.props.data} />
                </div>
            </div>
        )
    }
}

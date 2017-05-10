import React from 'react';
import ReactDOM from 'react-dom';

import HeaderCell from './headerCell';
import Cell from './cell';

import {Util} from '../utils/util.js';

export default class Grid extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            start: this.props.start,
            end: this.props.end
        }

        console.log('grid start: ' + this.state.start);
        console.log('grid end: ' + this.state.end);
    }

    render() {

        console.log('grid render start: ' + this.state.start);
        console.log('grid render end: ' + this.state.end);
        
        const dates = new Array();
        console.log('dates 1: ' + dates);

        for (let i = this.state.start; i <= this.state.end; i++) {
            console.log('i: ' + i);
            dates.push(i);
        }

        console.log('dates 2: ' + dates);

        return (
            <div className="divTable">
                <div className="divTableBody">
                    <HeaderCell data={dates}/> {/*<Cell data={this.props.data} />*/}
                </div>
            </div>
        )
    }
}

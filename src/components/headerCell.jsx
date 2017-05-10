import React from 'react';
import ReactDOM from 'react-dom';

export default class HeaderCell extends React.Component {
    constructor(param){
        super(param);

        this.dates = param.data;
    }
    render() {
        var rows = [];

         for (let [index, elem] of this.dates.entries()) {
            rows.push(<div className="divTableCell divTableHeading" key={index}>{elem}</div>);
         }
    
         return (
             <div className="divTableRow">
                   {rows}
            </div>
        )
    }
}
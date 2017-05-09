import React from 'react';
import ReactDOM from 'react-dom';

export default class HeaderCell extends React.Component {
    constructor(data){
        super(data);
        this.data = data.data;
    }
    render() {
        var rows = [];
  
        for (let [index, elem] of this.data.entries()) {
           rows.push(<div className="divTableCell divTableHeading" key={index}>{elem}</div>);
        }
        
         return (
             <div className="divTableRow">
               {rows}
            </div>
        )
    }
}
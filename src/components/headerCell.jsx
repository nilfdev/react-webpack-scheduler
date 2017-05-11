import React from 'react';
import ReactDOM from 'react-dom';

export default class HeaderCell extends React.Component {
    render() {
        var rows = [];
      //  debugger;
         for (let [index, elem] of this.props.data.entries()) {
            rows.push(<div className="divTableCell divTableHeading" key={index}>{elem}</div>);
         }
    
         return (
             <div className="divTableRow">
                   {rows}
            </div>
        )
    }
}
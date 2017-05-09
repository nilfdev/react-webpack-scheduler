import React from 'react';
import ReactDOM from 'react-dom';

export default class Cell extends React.Component {
    
    render() {
        return (
            <div className="divTableRow">
                <div className="divTableHead">Table cell</div>
                <div className="divTableHead">Table cell</div>
                <div className="divTableHead">Table cell</div>
                <div className="divTableHead">Table cell</div>
            </div> 
        )
    }
}
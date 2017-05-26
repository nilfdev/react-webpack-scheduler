import React from 'react';
import ReactDOM from 'react-dom';

export default class Row extends React.Component {
  constructor(props) {
        super(props);
       this.onCellClick = this.onCellClick.bind(this);
    }
    onCellClick(e){
        
        console.log('cell click event. Data attribute: ' +  e.target.getAttribute('data'));
    }
    render() {
        var cells = [];
        for (let [index, elem] of this.props.data.entries()) {
            cells.push(<div className="divTableCell" data={elem} key={index} onClick={this.onCellClick}>{elem}</div>);
        }
        return (
            <div className="divTableRow">
                <div className="divTableCell">The name</div>
                {cells}
            </div>
        )
    }
}
import React, { Component } from 'react';
import ReactDOM from 'react-dom';


export default class Confirmation extends React.Component {

    constructor(props) {
        super(props);
        // this.state = {
        //     pendingDates: ''
        // }
        this.onClick = this.onClick.bind(this);
    }
    onClick(e){
        console.log(e.target);
        this.props.pending = null;
    }

    render(){
        let pendingDates = this.props.pending;
        if (!pendingDates || pendingDates.length == 0)
        {
            return <div>please select dates</div>;
        }
        let confirmtaionString = 'User: ' + this.props.pending.user + ' Date: '  + this.props.pending.date ;

        return <div>
            <h3>{confirmtaionString}</h3>
            <input type='button' onClick={this.onClick} value='confirm'/>
        </div>
    }
}
import React from 'react';
import ReactDOM from 'react-dom';
import { format } from '../dateServices';

export default class Confirmation extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            localPending: []
        }

        this.onConfirm = this.onConfirm.bind(this);
        this.onCancel = this.onCancel.bind(this);
    }

    onConfirm(e){
        this.props.onConfirm('confirmation text');
    }

    onCancel(e){
        this.props.onCancel();
    }

    render(){
        let pendingDates = this.props.pending;
        if (!pendingDates || pendingDates.length == 0)
        {
            return <div>please select dates</div>;
        }
        let confirmtaionString = [];
        for (let [i, pending] of this.props.pending.entries()){
            confirmtaionString.push(<div key={i}>User: {pending.user} date: {pending.date} </div>) ;
        }

        return <div>
            <h3>{confirmtaionString}</h3>
            <input type='button' onClick={this.onConfirm} value='confirm'/>
            <input type='button' onClick={this.onCancel} value='cancel'/>
        </div>
    }
}
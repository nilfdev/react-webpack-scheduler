import React from 'react';
import ReactDOM from 'react-dom';

export default class Filter extends React.Component {
    constructor(props){
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(){
        var option = this.refs.select.value;
        if (option == initialItem){
            option = null;
        }
        this.props.handleChange(option);
    }

    render(){
        let teams = [];
        teams.push(<option key={0}>{initialItem}</option>);
        for (let [t, team] of this.props.teams.entries()) {
            teams.push(<option key={'flt' + t}>{team.name}</option>)
        }
        return (
            <div>
                <h4>Teams</h4>
                <select ref="select" onChange={this.handleChange}>
                   {teams}
                </select>
            </div>
        );
    }
}

const initialItem = 'All';


Filter.propTypes = {
    teams: (props, propName, componentName) => {
        if (!props[propName] || props[propName].length < 1) {
          //TODO: handle exceptions
        }
    }
};

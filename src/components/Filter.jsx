import React from 'react';
import ReactDOM from 'react-dom';

export default class Filter extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            selectedOption: ''
        }

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(){
        var option = this.refs.select.value;
        if (option == initialItem){
            option = null;
        }
        this.setState({ selectedOption: option});
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
                {this.state.selectedOption}
                <select ref="select" onChange={this.handleChange}>
                   {teams}
                </select>
            </div>
        );
    }
}

const initialItem = 'All';

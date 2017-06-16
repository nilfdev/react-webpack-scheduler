import React from 'react';
import ReactDOM from 'react-dom';

import request from 'superagent';
import DatePicker from 'react-datepicker';
import moment from 'moment';

import DataTable from './src/components/dataTable';
import Filter from './src/components/filter';
import Confirmation from './src/components/confirmation';
import {parseTeams, parseRequests} from './src/parsers'
import {format, formatParam} from './src/dateServices'

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            requests: [],
            // start: moment(),
            // end: moment(),
            teams: [], 
            team: '',
            pending: []
        };
      
        this.onChangeTeam = this.onChangeTeam.bind(this);
        this.onClickDate = this.onClickDate.bind(this);
        this.onConfirm = this.onConfirm.bind(this);
        this.onCancel = this.onCancel.bind(this);

        this.handleStartChange = this.handleStartChange.bind(this);
        this.handleEndChange = this.handleEndChange.bind(this);

        this.componentDidMount = this.componentDidMount.bind(this);
    }

    componentDidMount(){
      const defaultDate = moment(new Date());
      this.setState({ start: defaultDate });
      this.setState({ end: defaultDate });

    
    
        let self = this;

        request
            .get('http://127.0.0.1:5984/teams/_all_docs?include_docs=true')
            .send({message: this.state.message})
            .accept('application/json')
            //.withCredentials()
            .end(function(err, res){
                if(err) {
                    throw err;
                }

                var parsedTeams = parseTeams(res);
                self.setState({teams: parsedTeams});
            });

            this.requestData();
      }

 
    onChangeTeam(val) {
        this.setState({ team: val});
    }

    requestData(){
        debugger;
        var a = this.state.start;
        let self = this;
                request
            .get('http://127.0.0.1:5984/requests/_design/request/_view/request-view?startkey="' + formatParam(this.state.start) + '"&endkey="' + formatParam(this.state.end) + '"')
            .send({message: this.state.message})
            .accept('application/json')
            
            //.withCredentials()
            .end(function(err, res){
                
                if(err) {
                    console.log('request error: ' + err);
                    throw err;
                }
                var parsedRequests = parseRequests(res);
                self.setState({requests: parsedRequests});
            });
    }

    onClickDate(val){
        this.addPending({user: val.user, date: val.date });
    }

    addPending(item){
        var itemDate = new Date(item.date);
        let isExists = false;

        for(let stateItem of this.state.pending){
            if (stateItem.user == item.user && itemDate.getDate() == new Date(stateItem.date).getDate())
            {
                isExists = true;
            }
        }
        if (!isExists){
            let pending= this.state.pending;
            pending.push({date: formatParam(itemDate), user:item.user, status: 'requested'})
            this.setState({pending: pending});
        }
    }

    onConfirm(val){
        var self = this;
        request
            .post('http://127.0.0.1:5984/requests/_bulk_docs')
            .send({"docs": this.state.pending})
            .accept('application/json')
            
            //.withCredentials()
            .end(function(err, res){
                
                if(err) {
                    console.log('request error: ' + err);
                    throw err;
                }
                
                self.setState({pending: null});   
                self.requestData();
            });
    }

    onCancel(val){
        this.setState({pending: null});
        this.requestData();
    }

    handleStartChange(start){
        this.setState({start});
        this.requestData();
    }

    handleEndChange(end){
        this.setState({end});
        this.requestData();
    }
   
    render() {
        const start = formatParam(this.state.start);
        const end = formatParam(this.state.end);
      
        if (!this.state.requests) {
            return <h1>No data found</h1>
        } else {
            return (
                
                <div>
                    <DatePicker id='start' dateFormat="YYYY/MM/DD" selected={this.state.start} onChange={this.handleStartChange} todayButton={"Vandaag"} />
                    <DatePicker id='end' dateFormat="YYYY/MM/DD" selected={this.state.end} onChange={this.handleEndChange} todayButton={"Vandaag"} />

                    <Filter handleChange={this.onChangeTeam} teams={this.state.teams} />
                    <Confirmation pending={this.state.pending } onConfirm={this.onConfirm} onCancel= {this.onCancel}/>
                    <DataTable start={start} end={end} team={this.state.team} teams={this.state.teams} requests={this.state.requests} 
                        handleCellClick={this.onClickDate}  />
                    <div>
                        <h3>TODO. Short term:</h3>
                        <ul>
                            <li>"Send request" control</li>
                            <li>Refactor request functions</li>
                            <li>User identity</li>
                            <li>Styling</li>
                            <li>Calendar</li>
                            <li>Make the app based on ID but not user name</li>
                        </ul>

                        <h3>Long term:</h3>
                        <ul>
                            <li>Approve flow</li>                                
                            <li>Integrate with time-off</li>                                
                            <li>Integrate with synergy</li>                                
                            <li>Cancel vacation</li>
                            <li>Mailing with approval</li>
                        </ul>
                    </div>
                </div>


            )

        }
    }
}

ReactDOM.render(<App />, document.getElementById('container'));
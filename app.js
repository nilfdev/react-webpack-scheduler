import DataTable from './src/components/dataTable';
import Filter from './src/components/filter';

import React from 'react';
import ReactDOM from 'react-dom';
import request from 'superagent';

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            requests: props.data, //TODO: DO NOT KNOW WHAT TO USE: props from component
            teams: teams,         // or props from the page itself
            start: startDate,
            end: endDate,
            team: ''
        };
        this.onChangeStart = this.onChangeStart.bind(this);
        this.onChangeEnd = this.onChangeEnd.bind(this);
        this.onChangeTeam = this.onChangeTeam.bind(this);

        this.componentDidMount = this.componentDidMount.bind(this);
        this.onRefreshClickHandler = this.onRefreshClickHandler.bind(this);
    }

    componentDidMount(){
        console.log('component did mount. Start request');

         request
            .post('http://127.0.0.1:5000/api/db')
            .send({message: this.state.message})
            .accept('application/json')
            .withCredentials()
            .end(function(err, res){
            if(err) throw err;
            self.setState({ r: res.body.message });
        });
    }

    onChangeStart(e) {
        this.setState({ start: e.target.value })
    }

    onChangeEnd(e) {
        this.setState({ end: e.target.value })
    }

    onRefreshClickHandler() {
    }

    onChangeTeam(val) {
        this.setState({ team: val});
    }

    render() {

        if (!this.state.requests) {
            return <h1>No data found</h1>
        } else {
            return (
                <div>
                    start:<input type='text' onChange={this.changeStart} defaultValue={startDate} />
                    end:<input type='text' onChange={this.changeEnd} defaultValue={endDate} />
                    <Filter handleChange={this.onChangeTeam} teams={this.state.teams} />
                    <DataTable start={this.state.start} end={this.state.end} team={this.state.team} teams={this.state.teams} requests={this.state.requests} />
                </div>
            )

        }
    }
}



let startDate = '2017-05-01';
let endDate = '2017-05-21';

var teams = [
    {
        id: "123",
        name: "Carbon",
        members: ["Ilia", "Dmytro", "Alex"]
    },
    {
        id: "345",
        name: "Neon",
        members: ["Mykola", "Oleksandr", "Vyacheslav"]
    }
]

const requests = [
    {
        id: "1546468987987987",
        user: "Ilia",
        date: "2017-05-02",
        status: "approved"
    }, {
        id: "278986564651787",
        user: "Mykola",
        date: "2017-05-03",
        status: "created"
    }
];

ReactDOM.render(
    <App data={requests} />, document.getElementById('container'));

/*
 {
        id: "123",
        name: "Carbon",
        members: ["Ilia", "Dmytro", "Alex"]
 }

http://127.0.0.1:5984/vacation/_design/designRequest/_view/request-view?startkey="2017/05/01"&endkey="2017/05/02"

function (doc) {
  if (doc.user && doc.date){
    emit(doc.date,{user: doc.user,status: doc.status});
  }
}

function (doc) {
  var member; 
  if (doc.name && doc.members){
      emit(doc.name, doc.members);
  }
}
http://127.0.0.1:5984/vacation/_design/teamView/_view/team-view
 */
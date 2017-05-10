// import Container from './src/components/container.jsx';

import World from './src/components/world';
import Grid from './src/components/grid';

import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            requests: props.data,
            _inputStart:new Date().toLocaleDateString(),
            _inputEnd: new Date().toLocaleDateString()
        };
       this.changeContent = this.changeContent.bind(this);
       this.onRefreshClickHandler = this.onRefreshClickHandler.bind(this);
    }

   changeContent(e) {
    console.log(e.target);
    this.setState({_inputStart: e.target.value})
  } 

    onRefreshClickHandler(){
        this.setState({_inputStart: this.state._inputStart});
        this.setState({_inputEnd:  this.state._inputEnd});

        console.log(this.state._inputStart);
    }
    render() {
        if (!this.state.requests) {
            return <h1>No data found</h1>
        } else {
            return (
                <div>
                    start:<input type='text' onChange={this.changeContent} defaultValue = '2017-05-09' />
                    end:<input type='text' ref='end'  defaultValue = '2017-05-09'/>
                    
                    <input type ='button' ref='action' value='refresh' onClick={this.onRefreshClickHandler}/>

                    <br/>
                    <Grid data={this.state.requests} />
                </div>
                )
            
        }
    }
}

const requests = [
    {
        id: '1546468987987987',
        user: 'user_a',
        start: '2017-05-02',
        end: '2017-05-03',
        status: 'approved'
    }, {
        id: '278986564651787',
        user: 'user_b',
        start: '2017-05-03',
        end: '2017-05-08',
        status: 'created'
    }
];

ReactDOM.render(
    <App data={requests} />, document.getElementById('container'));

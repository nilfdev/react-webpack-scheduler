import World from './world';
import React from 'react';
import ReactDOM from 'react-dom';


class Hello extends React.Component {
    render() {
        return (
        <div><h1>Hello</h1><World/></div>
        )
    }
}

ReactDOM.render(
    <Hello/>, document.getElementById('hello'));

/*

var React = require('react');
var Hello = React.createClass({displayName: 'Hello',
  render: function() {
    return React.createElement("h1", null, "Hello ");
  }
});
*/
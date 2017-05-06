import React from 'react';
import ReactDOM from 'react-dom';
import Header from './header';

export default class Grid extends React.Component {
    render() {

        return <div>
            <Header data={this.props.data}/>
            <h2>we are here</h2>
        </div>

    }
}

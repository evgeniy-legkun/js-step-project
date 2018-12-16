import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
//import Table from './components/Display/Table/Table';
import TableUsersJobs from './components/Display/Table/TableWrapper';

class App extends Component {

    render() {
        const usersJobsData = [
            {name: 'charli', job: 'aaaa'},
            {name: 'abba', job: 'jaba'},
            {name: 'madlo', job: 'bbblo'},
            {name: 'drdr', job: 'dddd'}
        ]
        return (
            <div className="container">
                <TableUsersJobs usersJobs={usersJobsData} />
            </div>

        );
  }
}

export default App;
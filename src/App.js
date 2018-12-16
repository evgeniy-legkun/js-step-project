import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import TableUsersJobs from './components/Display/Table/TableWrapper';

class App extends Component {
  state = {

  };

  render () {
    const usersJobsData = [
      {name: 'Charlie', job: 'Janitor'},
      {name: 'Mac', job: 'Bouncer'},
      {name: 'Dee', job: 'Aspiring actress'},
      {name: 'Dennis', job: 'Bartender'}
    ];

    return (
      <div className="container">
        <TableUsersJobs usersJobs={usersJobsData} />
      </div>
    );
  }
}

export default App;

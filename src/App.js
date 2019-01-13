import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import TableUsersJobs from './components/Display/Table/TableWrapper';
import { RingLoader } from 'react-spinners';

class App extends Component {
  state = {
    usersJobsData: [
      {name: 'CharlieAB', job: 'Janitor'},
      {name: 'Mac', job: 'Bouncer'},
      {name: 'Dee', job: 'Aspiring actress'},
      {name: 'Dennis', job: 'Bartender'}
    ],
    loading: false
  };

  removeUser = (index, delay = 500) => {
    const {usersJobsData} = this.state;

    this.setState({loading: true});

    setTimeout(() => {
      this.setState({
        usersJobsData: usersJobsData.filter((user, userIndex) => {
          return userIndex !== index;
        }),
        loading: false
      });
    }, delay);
  };

  render () {
    return (
      <div className="container">
        {
          this.state.loading ? (
            <div className={'spinner-container'}>
              <RingLoader
                loading={this.state.loading}
                sizeUnit={'px'}
                size={25}
                color={'rgb(54, 215, 183)'}
              />
            </div>
          ) : (
            <TableUsersJobs
              usersJobs={this.state.usersJobsData}
              removeUser={this.removeUser}
            />
          )
        }
      </div>
    );
  }
}

export default App;

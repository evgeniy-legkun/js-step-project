import React, { Component } from 'react';
import { Table, Button } from 'react-bootstrap';
import './UsersList.css';
import UserCreateForm from './UserCreateForm';

class UsersList extends Component {
  constructor (props) {
    super(props);
  }

  state = {
    users: [
      {id: 1, name: 'Charlie', jobId: 1},
      {id: 2, name: 'Mac', jobId: 2},
      {id: 3, name: 'Dee', jobId: 3},
      {id: 4, name: 'Dennis', jobId: 4}
    ],

    jobs: [
      {id: 1, name: 'Janitor'},
      {id: 2, name: 'Bouncer'},
      {id: 3, name: 'Aspiring actress'},
      {id: 4, name: 'Bartender'},
    ],

    isVisibleList: true
  }

  getJobById (id) {
    const {jobs} = this.state;

    return jobs.find((job) => {
      if (job.id === id) { return job; }
    }) || {};
  }

  removeUser (index, delay = 500) {
    const { users } = this.state;
    const { setLoader } = this.props;
    setLoader(true);

    setTimeout(() => {
      this.setState({
        users: users.filter((user, userIndex) => {
          return userIndex !== index;
        })
      });

      setLoader(false);
    }, delay);
  }

  handleCreateForm (value) {
    if (typeof(value) !== 'boolean') { return; }
    this.setState({isVisibleList: value});
  }

  render () {
    const { users, jobs, isVisibleList } = this.state;

    const createTableBody = (users) => {
      return users.map((user, index) => {
        return (
          <tr key={index}>
            <td>{user.name}</td>
            <td>{this.getJobById(user.jobId).name}</td>
            <td>
              <Button
                bsStyle='primary'
                bsSize='xsmall'
                onClick={() => this.removeUser(index, 1000)}
              >
                remove
              </Button>
            </td>
          </tr>
        );
      });
    };

    return (
      <div>
        {
          users.length !== 0 ? (
            <div className='table-container'>
              <Button
                style={{marginBottom: '20px'}}
                bsStyle='primary'
                bsSize='xsmall'
                onClick={() => this.handleCreateForm(!isVisibleList)}
              >
                Add user
              </Button>

              {
                isVisibleList ? (
                  <Table striped bordered hover className='styled-table'>
                    <thead>
                    <tr>
                      <th>Name</th>
                      <th>Job</th>
                      <th>Remove</th>
                    </tr>
                    </thead>
                    <tbody>
                    { createTableBody(users) }
                    </tbody>
                  </Table>
                ) : (
                  <UserCreateForm jobs={jobs} />
                )
              }
            </div>
          ) : (
            <div className='table-empty'>
              The table is empty
            </div>
          )
        }
      </div>
    );
  }
}

export default UsersList;

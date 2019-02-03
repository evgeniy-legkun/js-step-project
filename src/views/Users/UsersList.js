import React, { Component } from 'react';
import { Table, Button } from 'react-bootstrap';
import './UsersList.css';
import UserCreateForm from './UserCreateForm';
import IconSvg from '../../components/Display/Icon/IconSvg';

class UsersList extends Component {
  constructor (props) {
    super(props);
    this.updateUserType = this.updateUserType.bind(this);
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

    isVisibleList: true,

    userType: 'male'
  };

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

  updateUserType (type) {
    this.setState({ userType: type });
  }

  render () {
    const { users, jobs, isVisibleList } = this.state;
    const { date } = this.props;

    const getAddButtonColor = () => {
      return this.state.isVisibleList ? 'success' : 'primary';
    };

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
            [
              <div style={{display: 'flex'}} key='user-type'>
                User type :
                <div style={{paddingLeft: '15px'}}>
                  <IconSvg
                    key='button-icon' icon={this.state.userType}
                  />
                </div>
                <br/><br/>
              </div>,
              <div key='users-table' className='table-container'>
                <Button
                  style={{marginBottom: '20px'}}
                  bsStyle={getAddButtonColor()}
                  bsSize='xsmall'
                  onClick={() => this.handleCreateForm(!isVisibleList)}
                >
                  {
                    isVisibleList ? (
                      'Add user'
                    ) : (
                      [
                        <IconSvg key='button-icon' icon='arrow-left' />,
                        <span key='button-text'> Back</span>
                      ]
                    )
                  }
                </Button>

                <div>
                  Date: {date.toLocaleTimeString()}<br /><br />
                </div>

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
                    <UserCreateForm updateUserType={this.updateUserType} jobs={jobs} />
                  )
                }
              </div>
            ]
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

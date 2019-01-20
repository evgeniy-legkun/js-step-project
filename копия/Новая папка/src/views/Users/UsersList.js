import React, { Component } from 'react';
import { Table, Button } from 'react-bootstrap';
import './UsersList.css';

class UsersList extends Component {
  constructor (props) {
    super(props);
    this.removeUser = this.removeUser.bind(this);
  }

  state = {
    users: [
      {name: 'Charlie', job: 'Janitor'},
      {name: 'Mac', job: 'Bouncer'},
      {name: 'Dee', job: 'Aspiring actress'},
      {name: 'Dennis', job: 'Bartender'}
    ],
    loading: false
  };

  removeUser = (index, delay = 500) => {
    const { users } = this.state;
    this.props.setLoader(true);

    setTimeout(() => {
      this.setState({
        users: users.filter((user, userIndex) => {
          return userIndex !== index;
        })
      });

      this.props.setLoader(false);
    }, delay);
  };

<<<<<<< HEAD:src/components/Display/Table/TableWrapper.js


class TableWrapper extends Component {
=======
>>>>>>> d17d35a611a8ab44ab53355f8a28ff9bb1071c94:src/views/Users/UsersList.js
  render () {
    const { users } = this.state;

    const createTableBody = (users) => {
      return users.map((user, index) => {
        return (
          <tr key={index}>
            <td>{user.name}</td>
            <td>{user.job}</td>
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

<<<<<<< HEAD:src/components/Display/Table/TableWrapper.js
export default TableWrapper;

=======
export default UsersList;
>>>>>>> d17d35a611a8ab44ab53355f8a28ff9bb1071c94:src/views/Users/UsersList.js

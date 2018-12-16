import React, { Component } from 'react';
import { Table, Button } from 'react-bootstrap';
import './Table.css';

class TableWrapper extends Component {
  render () {
    const { usersJobs, removeUser } = this.props;
    const createTableBody = (usersJobs) => {
      return usersJobs.map((user, index) => {
        return (
          <tr key={index}>
            <td>{user.name}</td>
            <td>{user.job}</td>
            <td>
              <Button
                bsStyle='primary'
                bsSize='xsmall'
                onClick={() => removeUser(index, 1000)}
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
          usersJobs.length !== 0 ? (
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
                  {createTableBody(usersJobs)}
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

export default TableWrapper;
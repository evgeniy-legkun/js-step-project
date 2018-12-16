import React, { Component } from 'react';
import { Table } from 'react-bootstrap';
import './Table.css';

class TableWrapper extends Component {
  render () {
    const { usersJobs } = this.props;
    const rows = usersJobs.map((row, index) => {
      return (
        <tr key={index}>
          <td>{row.name}</td>
          <td>{row.job}</td>
        </tr>
      );
    });

    return (
      <div className='tableContainer'>
        <Table striped bordered hover>
          <thead>
          <tr>
            <th>Name</th>
            <th>Job</th>
          </tr>
          </thead>
          <tbody>
            {rows}
          </tbody>
        </Table>
      </div>
    );
  }
}

export default TableWrapper;
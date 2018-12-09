import React, { Component } from 'react';
import TableHeader from './TableHeader';

class Table extends Component {
  render () {
    return (
      <table>
        <TableHeader />
        <tbody>
        <tr>
          <td>Charlie</td>
          <td>Janitor</td>
        </tr>
        <tr>
          <td>Mac</td>
          <td>Bouncer</td>
        </tr>
        <tr>
          <td>Dee</td>
          <td>Aspiring actress</td>
        </tr>
        <tr>
          <td>Dennis</td>
          <td>Bartender</td>
        </tr>
        </tbody>
      </table>
    );
  }
}

export default Table;
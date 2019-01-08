<<<<<<< HEAD
import React, {Component} from 'react';
import TableHeader from './TableHeader';
class Table extends  Component{
    render (){
        return (

            <table>
                <thead>
                <tr>
                    <th>Name</th>
                    <th>Job</th>
                </tr>
                </thead>
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

export  default Table;
=======
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
>>>>>>> a964c8ad8ac2d94e5a94fecfcf746d7f611b4ac0

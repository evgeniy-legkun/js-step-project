import React, {Component} from 'react';
import { Table, Button} from 'react-bootstrap';
import './Table.css';


let user = {
    name: 'Taras',
    surName: 'SurName',
    address: 'Vinnitsa',
    country: 'Ucraine'
};

const {name, address} = user;

const girlsNames = ['Olia', 'Vika', 'Masha', 'Blabla', 'sdfsf'];
const [firstGirls, secondGirls, ... otherGirls] = girlsNames;
console.log(address);
console.log(firstGirls);
console.log(secondGirls);
console.log(otherGirls);

class TableWrapper extends Component{
    render () {

        const props2 =this.props;
        console.log('props = ', props2);

        const {usersJobs, removeUser} = this.props;
       /* const rows = usersJobs.map((row, index) => {
            return (
                <tr key={index}>
                    <td>{row.name}</td>
                    <td>{row.job}</td>
                    <td><Button
                        bsStyle="primary"
                        bsSize = "xsmall"

                    >Remove #{index}</Button></td>

                </tr>
            );
        })*/
        const rows = usersJobs.map((user, index) => {
            return (
                <tr key={index}>
                    <td>{user.name}</td>
                    <td>{user.job}</td>
                    <td><Button
                        bsStyle="primary"
                        bsSize = "xsmall"
                        onClick={() => removeUser(index)}

                    >Remove #{index}</Button></td>

                </tr>
            );
        })

        return (
            <div className='tableContainer'>
                <Table striped={true} bordered condensed={false} hover  >
                    <thead>
                    <tr>
                        <th>Name</th>
                        <th>Job</th>
                        <th>Remove</th>
                    </tr>
                    </thead>
                    <tbody>
                    {rows}
                  {/*  <tr>
                        <td>Charlie</td>
                        <td>Janitor</td>
                    </tr>
                    <tr>
                        <td>Mac</td>
                        <td>Bouncer</td>
                    </tr>
                    <tr>
                        <td>Dee</td>
                        <td>https://react-bootstrap.github.io/components/table</td>
                    </tr>
                    <tr>
                        <td>Dennis</td>
                        <td>Bartender</td>
                    </tr>*/}
                    </tbody>
                </Table>

            </div>
         );
    }
}

export default TableWrapper;
{/*
https://react-bootstrap.github.io/components/table
*/}
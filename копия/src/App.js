import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
//import Table from './components/Display/Table/Table';
import TableUsersJobs from './components/Display/Table/TableWrapper';

const objOne = {name: "Tania", age: 31};
const objTwo = {SurName: "Denisova"};

const mergedObject = Object.assign({}, objOne, objTwo ); // объеденить обекты, Функция Object.assign получает список объектов и копирует в первый {здесь пустой, так как нам не нужно}  свойства из остальных.
console.log('merged', mergedObject);

class App extends Component {
    state = {
        usersJobsData : [
            {name: 'charli', job: 'aaaa'},
            {name: 'abba', job: 'jaba'},
            {name: 'madlo', job: 'bbblo'},
            {name: 'madlo5', job: '5bbblo'},
            {name: 'drdr', job: 'dddd'}
        ]
    };

    removeUser = Index => {
        const {usersJobsData} = this.state;
        this.setState({
            usersJobsData:usersJobsData.filter((user, userIndex) =>{
                return userIndex !==Index;
                })
        });

    };
    render() {
       /* const usersJobsData = [
            {name: 'charli', job: 'aaaa'},
            {name: 'abba', job: 'jaba'},
            {name: 'madlo', job: 'bbblo'},
            {name: 'madlo5', job: '5bbblo'},
            {name: 'drdr', job: 'dddd'} было вместе с тем, что чуть НИЖЕ закоментировали
        ]*/
        return (
            <div className="container">
                <TableUsersJobs
                    usersJobs={this.state.usersJobsData}
                removeUser={this.removeUser}
                />
            </div>


        );
  }
}

export default App;
import React, { Component } from 'react';
<<<<<<< HEAD
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
=======
// import logo from './logo.svg';
import './App.css';
import TableUsersJobs from './components/Display/Table/TableWrapper';
import { RingLoader } from 'react-spinners';

class App extends Component {
  state = {
    usersJobsData: [
      {name: 'Charlie', job: 'Janitor'},
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
>>>>>>> a964c8ad8ac2d94e5a94fecfcf746d7f611b4ac0

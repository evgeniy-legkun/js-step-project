import React, { Component } from 'react';
import { Table, Button } from 'react-bootstrap';
import './UsersList.css';
<<<<<<< HEAD
import  UserCreateForm from './UserCreateForm'
=======
import UserCreateForm from './UserCreateForm';
>>>>>>> 537f835d3531ff173b75b20e4bfd8c174410e7b5

class UsersList extends Component {
  constructor (props) {
    console.log("props", props);
    super(props);
  }

  state = {
    users: [
<<<<<<< HEAD
      {id:1, name: 'Charlie', jobId: 1},
      {id:2, name: 'Mac', jobId: 2},
      {id:3, name: 'Dee', jobId: 3},
      {id:4, name: 'Dennis', jobId: 4}
    ],
      jobs: [
          {id:1, name:'Janitor'},
          {id:2, name: 'Bouncer'},
          {id:3, name: 'Aspiring actress'},
          {id:4, name: 'Bartender'}
      ],
    //loading: false,
    isVisibleList: true
  };

  getJobById(id){
    const {jobs} = this.state ;
    return jobs.find((job)=>{
      if(job.id == id) {return job}
    }) || {};// null ; // усли получим ундефайнед, то вернет нул    test == true ? test :3; // test || 3
  }

  removeUser = (index, delay = 500) => {
    const { users } = this.state;
    const {setLoader} = this.props;
    setLoader(true);
//    this.props.setLoader(true);
=======
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
>>>>>>> 537f835d3531ff173b75b20e4bfd8c174410e7b5

    setTimeout(() => {
      this.setState({
        users: users.filter((user, userIndex) => {
          return userIndex !== index;
        })
      });

<<<<<<< HEAD
  //    this.props.setLoader(false);
        setLoader(false);
=======
      setLoader(false);
>>>>>>> 537f835d3531ff173b75b20e4bfd8c174410e7b5
    }, delay);
  }

  handleCreateForm (value) {
    if (typeof(value) !== 'boolean') { return; }
    this.setState({isVisibleList: value});
  }

  handlCreateForm(value){
    if (typeof  value !=='boolean') {return;}
    this.setState({isVisibleList:value});
  }

  render () {
<<<<<<< HEAD
    const { users, jobs, isVisibleList } = this.state;// const  isVisibleList = this.state.isVisibleList;
=======
    const { users, jobs, isVisibleList } = this.state;
>>>>>>> 537f835d3531ff173b75b20e4bfd8c174410e7b5

    const createTableBody = (users) => {
      return users.map((user, index) => {
        return (
          <tr key={index}>
            <td>{user.name}</td>
<<<<<<< HEAD
            {/*<td>{user.job}</td>*/}
              <td>{this.getJobById(user.jobId).name}</td>
=======
            <td>{this.getJobById(user.jobId).name}</td>
>>>>>>> 537f835d3531ff173b75b20e4bfd8c174410e7b5
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
<<<<<<< HEAD
                <Button
                    style={{marginBottom: '20px'}}
                    bsStyle='primary'
                    bsSize='xsmall'
                    onClick={()=>this.handlCreateForm(!isVisibleList)}  //onClick={() => this.handlCreateForm(!isVisibleList)}
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
                    ): (
                        <UserCreateForm jobs={jobs}/>
                    )
                }


=======
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
>>>>>>> 537f835d3531ff173b75b20e4bfd8c174410e7b5
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

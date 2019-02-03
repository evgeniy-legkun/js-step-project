import React, {Component} from 'react';
import { Button } from 'react-bootstrap';

class UserCreateForm extends Component {
  render () {
    const {jobs, updateUserType} = this.props;

    const formBlock = {
      width: '350px'
    };

    const createJobsList = (jobs) => {
      return jobs.map((job, index) => {
        return (
          <option key={index} value={job.name}>{job.name}</option>
        );
      });
    };

    return (
      [
        <div key='form' style={formBlock}>
          <label htmlFor="user_name">Name : </label>
          <input type="text" name="user_name" id="user_name" />
          <br/><br/>

          <label htmlFor="user_job">Job : </label>
          <select name="user_job" id="user_job">
            { createJobsList(jobs) }
          </select>
        </div>,
        <Button
          key='change-type-button'
          bsStyle='danger'
          bsSize='xsmall'
          onClick={() => updateUserType('female')}
        >
          Change user type
        </Button>
      ]
    );
  }
}

export default UserCreateForm;
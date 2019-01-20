import React, {Component} from 'react';

class UserCreateForm extends Component {
    render (){
        const{jobs}=this.props;
        const formBlock = {

        };
        return (
          <div style={formBlock}>
              <label htmlFor="user_name"> Name: </label>
              <input type="text" name="user_name" id="user_name"></input>

          </div>
        );
    }
}


export default UserCreateForm;
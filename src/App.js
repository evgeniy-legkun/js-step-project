import React, { Component } from 'react';
import './App.css';
import { RingLoader } from 'react-spinners';
import UsersList from './views/Users/UsersList';

class App extends Component {
  constructor (props) {
    super(props);
    this.setLoader = this.setLoader.bind(this);
  }

  state = {
    loading: false
  };

  setLoader (value) {
    this.setState({loading: value});
  }

  render () {
    const { loading } = this.state;

    return (
      <div className="container">
        <div className='spinner-container'>
          <RingLoader
            loading={loading}
            sizeUnit={'px'}
            size={25}
            color={'rgb(54, 215, 183)'}
          />
        </div>

        <div style={{ visibility: loading ? 'hidden': 'visible'}}>
          {/*Project global components*/}
          <UsersList setLoader={this.setLoader} />
        </div>
      </div>
    );
  }
}

export default App;

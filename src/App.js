import React, { Component } from 'react';
import './App.css';
import { RingLoader } from 'react-spinners';
import UsersList from './views/Users/UsersList';

class App extends Component {
  constructor (props) {
    super(props);
    this.setLoader = this.setLoader.bind(this);
  }

  componentDidMount () {
    this.timerId = setInterval(() => {
      this.tick();
    }, 1000)
  }

  componentWillUnmount () {
    clearInterval(this.timerId);
  }

  state = {
    loading: false,

    date: new Date()
  };

  setLoader (value) {
    this.setState({loading: value});
  }

  tick () {
    this.setState({ date: new Date() });
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
          <UsersList date={this.state.date} setLoader={this.setLoader} />
        </div>
      </div>
    );
  }
}

export default App;

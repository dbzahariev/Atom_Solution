import React, {Component} from 'react';
import {connect} from 'react-redux'

class Home extends Component {
  state = {
    PIN: "",
  };

  componentDidMount = () => {
    if (this.props.Inner === "No") {
      this.props.history.push('/login');
    }
  }

  render() {
    return (
      <div className="App container-fluid">
        <button className="btn btn-success" type='button' onClick={() => { this.props.history.push('/login') }}>Login</button>
        <button className="btn btn-success" type='button' onClick={() => { this.props.dispatch({type: 'LOGOUT'}); this.props.history.push('/login') }}>logout</button>
      </div>
    );
  }
}

const mapStateToProps = state => state
export default connect(mapStateToProps)(Home);
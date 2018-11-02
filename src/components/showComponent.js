import React, { Component } from 'react';
import {connect} from 'react-redux'

class ShowComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
          PIN: "",
        }

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount(){
        console.log(this.props.Inner)
        if (this.props.Inner === "Yes"){
          this.props.history.push('/');
        }
        this.props.dispatch({type: 'INCREMENT', Pin:"test"})
    }

    handleInputChange(event) {
        this.setState({
          [event.target.name]: event.target.value
        });
      }
  
    handleSubmit(event) {
        event.preventDefault();
  
        this.props.dispatch({type: 'CHECK', ToPin:this.state.PIN})
        this.props.history.push('/');
      }

    render() {
        return (
            <div>
                Count: {this.props.count}
                <br/>
                Pin: {this.props.Pin}
                <br/>
                inner: {this.props.Inner}
                <br/>
                
                <form onSubmit={this.handleSubmit} name="form">
                    PIN: <input type="text" name="PIN" value={this.state.PIN} onChange={this.handleInputChange}/>
                    <br/>
                    <input type="submit" value="Login"/ >
                </form>
                <h1>hi</h1>
                <button onClick={()=>{this.props.history.push('/')}}>Home</button>
                <button onClick={()=>{this.props.dispatch({type: 'INCREMENT', Pin:"test"})}}>INCREMENT</button>
                <button onClick={()=>{this.props.dispatch({type: 'CHECK', ToPin:"te2st"})}}>CHECK</button>
                <button onClick={()=>{this.props.dispatch({type: 'CHECK', ToPin:"test"})}}>CHECK Correct</button>
                <button onClick={()=>{this.props.dispatch({type: 'DECREMENT'})}}>DECREMENT</button>
            </div>
        )
    }
}
const mapStateToProps = state => state
export default connect(mapStateToProps)(ShowComponent);
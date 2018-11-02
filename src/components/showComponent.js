import React, { Component } from 'react';
import {connect} from 'react-redux'

class ShowComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            PIN: "test",
        }

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        // console.log(this.props.Inner)
        if (this.props.Inner === "Yes") {
            this.props.history.push('/');
        }
        this.props.dispatch({
            type: 'INCREMENT',
            Pin: "test"
        })
    }

    handleInputChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    handleSubmit(event) {
        event.preventDefault();
        this.Login()
        
        this.props.history.push('/');
    }

    Login() {
        console.log(this.props.Inner)
        this.props.dispatch({type: 'LOGIN', ToPin:"test"});
        this.props.dispatch({type: 'LOGIN', ToPin:"test"});
        console.log(this.props.Inner)
        // this.props.dispatch({
        //     type: 'LOGIN',
        //     ToPin: this.state.PIN
        // })
        // if (this.props.Inner === "Yes") {
        //     this.props.history.push('/');
        //     alert("Login successful")
        // }
        // else {
        //     this.setState({PIN: ""})
            // alert("Incorrect password")
        // }
    }

    render() {
        return (
            <div>
                Pin: {this.props.Pin}
                <br/>
                inner: {this.props.Inner}
                <br/>
                
                <form onSubmit={this.handleSubmit} name="form">
                    PIN: <input type="text" name="PIN" value={this.state.PIN} onChange={this.handleInputChange}/>
                    <br/>
                    <input type="submit" value="Login" />
                </form>
                <br/>
                <br/>
                <button onClick={()=>{this.props.history.push('/')}}>Home</button><br/>
                <button onClick={()=>{this.props.dispatch({type: 'INCREMENT', Pin:"test"})}}>INCREMENT</button><br/>
                <button onClick={()=>{this.props.dispatch({type: 'LOGIN', ToPin:"te2st"})}}>CHECK</button><br/>
                <button onClick={()=>{ this.Login() }}>CHECK Correct</button><br/>
                <button onClick={()=>{this.props.dispatch({type: 'LOGOUT'})}}>LOGOUT</button><br/>
            </div>
        )
    }
}
const mapStateToProps = state => state
export default connect(mapStateToProps)(ShowComponent);
import React from 'react'

export default class CreateApplications extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            PIN: "",
        };

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    toggleChange = () => {
        this.setState({
            studyFromHome: !this.state.studyFromHome
        });
    }

    handleInputChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    handleSubmit(event) {
        event.preventDefault();

        var application = {
            PIN: this.state.name,
        }
        var listOfApplication = JSON.parse(localStorage.getItem("applicationsList")) || []
        listOfApplication.push(application)
        localStorage.setItem("applicationsList", JSON.stringify(listOfApplication));

        this.props.history.push('/');
    }

    render() {
        return (
            <div>
                <form onSubmit={this.onSubmit}>
                    PIN: <input type="text" name="PIN" value={this.state.PIN} onChange={this.handleInputChange}/>
                    <br/>
                    <input type="submit" value="Submit"/ >
                </form>
                <br/>
            <button className="btn btn-danger" onClick={()=>{this.props.history.push('/');}}>CANCEL</button>
            </div>) }
    }
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import HelloWorldService from '../../api/Todo/HelloWorldService'
class Welcome extends Component {
    constructor(props){
        super(props)
        this.state = {
            welcomeMessage:''
        }
        this.retrieveWelcomeMsg=this.retrieveWelcomeMsg.bind(this)
        this.handleSuccess=this.handleSuccess.bind(this)
        this.handleError=this.handleError.bind(this)
    }
    render() {
        return (
            <div>
                <h1>Welcome</h1>
                <div className="container">
                    {this.state.errorMessage}
                </div>
                <div className="container">
                    HI {this.props.match.params.name}.
                    You can manage your TO-DOs <Link to="/todos">Here</Link>
                </div>
                <div className="container">
                    Click Here to get Welcome Message 
                    <button onClick={this.retrieveWelcomeMsg} className="btn btn-success">Get Welcome Message</button>
                </div>
                <div className="container">
                    {this.state.welcomeMessage}
                </div>
            </div>
        )
    }
    retrieveWelcomeMsg(){
       // HelloWorldService.executeHelloWorldService()
        HelloWorldService.executeHelloWorldPathService(this.props.match.params.name)
        .then(response => this.handleSuccess(response))
        .catch(error => this.handleError(error))
    }
    handleSuccess(response){
        this.setState({welcomeMessage:response.data.message})
    }
    handleError(error){
        console.log(error.response)
        let errorMessage = '';
        
        if(error.message) 
            errorMessage += error.message

        if(error.response && error.response.data) {
            errorMessage += error.response.data.message
        }
        this.setState({errorMessage:errorMessage})
    }
}
export default Welcome
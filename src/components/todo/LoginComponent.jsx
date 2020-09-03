import React, { Component } from 'react'
import AuthenticationService from './AuthenticationService.js'

class LoginComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            username: 'Alankrit',
            password: '',
            isInvalid: false,
            isSuccess: false
        }
        this.handleChange = this.handleChange.bind(this)
        this.LoginClicked = this.LoginClicked.bind(this)
    }
    handleChange(event) {
        this.setState({ [event.target.name]: event.target.value })

    }
    LoginClicked() {
        // if (this.state.username === "Alankrit" && this.state.password === "sri") {
        //     AuthenticationService.registerSuccessfullLogin(this.state.username,this.state.password)
        //     this.props.history.push(`/Welcome/${this.state.username}`)
        //     this.setState({ isInvalid: false })
        //     this.setState({ isSuccess: true })
        // }
        // else {
        //     this.props.history.push("/Login")
        //     this.setState({ isInvalid: true })
        //     this.setState({ isSuccess: false })
        // }
        // AuthenticationService.executeBasicAuthService(this.state.username,this.state.password)
        // .then(()=>{
        //     AuthenticationService.registerSuccessfullLogin(this.state.username,this.state.password)
        //     this.props.history.push(`/Welcome/${this.state.username}`)
        // }
        // ).catch(()=>{
        //     this.props.history.push("/Login")
        //     this.setState({ isInvalid: true })
        //     this.setState({ isSuccess: false })
        // })
        AuthenticationService.executeJwtAuthService(this.state.username,this.state.password)
        .then((response)=>{
            AuthenticationService.registerSuccessfullLoginForJwt(this.state.username,response.data.token)
            this.props.history.push(`/Welcome/${this.state.username}`)
        }
        ).catch(()=>{
            this.props.history.push("/Login")
            this.setState({ isInvalid: true })
            this.setState({ isSuccess: false })
        })
    }

    render() {
        return (
            <div>
                <h1>Login</h1>
                <div className="container">
                    User Name: <input type="text" name="username" value={this.state.username} onChange={this.handleChange} />
                 Password : <input type="password" name="password" value={this.state.password} onChange={this.handleChange} />
                    {/*Indirect method*/}
                    {/*<IsSuccess isSuccess={this.state.isSuccess}/>*/}
                    {/*<IsInvalid isInvalid={this.state.isInvalid}/>*/}
                    {/*Direct Method */}
                    {/*this.state.isSuccess && <div>Login Success</div>*/}
                    {this.state.isInvalid && <div className="alert alert-warning">Login Failed</div>}
                    <button className="btn btn-success" onClick={this.LoginClicked}>Login</button>
                </div>
            </div>
        )
    }
}
// function IsSuccess(props){
//     if(props.isSuccess){
//        return <div>Login Success</div>
//     }
//     return null

// }
// function IsInvalid(props){
//     if(props.isInvalid){
//         return <div>Login Failed</div>
//     }
//     return null
// }

export default LoginComponent
import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
//import AuthenticationService from './AuthenticationService.js'
import HeaderComponent from './HeaderComponent'
import AuthenticatedRoute from './AuthenticatedRoute'
import LoginComponent from './LoginComponent'
import ListTodos from './ListTodos'
import FooterComponent from './FooterComponents'
import LogoutComponent from './LogoutComponent'
import Welcome from './Welcome'
import TodoComponent from './TodoComponent'
class TodoApp extends Component {
    render() {
        return (
            <div className="TodoApp">
                <Router>
                    <>
                        <HeaderComponent />
                        <Switch>
                            <Route path='/' exact from component={LoginComponent} />
                            <Route path='/login' from component={LoginComponent} />
                            <AuthenticatedRoute path='/logout' from component={LogoutComponent} />
                            <AuthenticatedRoute path='/todos/:id' from component={TodoComponent} />
                            <AuthenticatedRoute path='/Welcome/:name' from component={Welcome} />
                            <AuthenticatedRoute path='/todos' from component={ListTodos} />

                            <Route component={ErrorHandler} />
                        </Switch>
                        <FooterComponent />
                    </>
                </Router>
                {/*<LoginComponent/>
                <Welcome/>*/}
            </div>
        )
    }
}          
function ErrorHandler() {
    return <div>An Error Occured!Contact Support.</div>
}

export default TodoApp
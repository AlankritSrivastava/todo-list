import React, { Component } from 'react'
import TodoDataService from '../../api/Todo/TodoDataService'
import AuthenticationService from './AuthenticationService'
import moment from 'moment'
class ListTodos extends Component {
    constructor() {
        super()
        this.state = {
            todos: [],
            message:null
        }
        this.deleteTodoClicked=this.deleteTodoClicked.bind(this)
        this.refreshTodos=this.refreshTodos.bind(this)
        this.updateTodoClicked=this.updateTodoClicked.bind(this)
        this.addButtonClicked=this.addButtonClicked.bind(this)
    }

    componentDidMount(){
        this.refreshTodos()
    }
    refreshTodos(){
        let username=AuthenticationService.getUsername()
        TodoDataService.retrieveAllTodos(username)
        .then(
            response =>{
                 this.setState({
                     todos:response.data
                 })
            }
        )
    }
    deleteTodoClicked(id){
        let username=AuthenticationService.getUsername()
        TodoDataService.deleteTodo(username,id)
        .then(
            response =>{
                this.setState({
                message :`Delete of ${id} Successfull`
            })
            this.refreshTodos()
        }
        )

    }
    updateTodoClicked(id){
        this.props.history.push(`/todos/${id}`)

    }
    addButtonClicked(){
        this.props.history.push('/todos/-1')
    }
    render() {
        return <div>
            <h1>List Todos</h1>
            {this.state.message && <div className="alert alert-success">{this.state.message}</div>}
            <div className="container">
            <table className="table">
                <thead>
                    <tr>
                        {/*<th>ID</th>*/}
                        <th>Description</th>
                        <th>IsDone</th>
                        <th>TargetDate</th>
                        <th>Update</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        this.state.todos.map(
                            todo =>
                                <tr key={todo.id}>
                                    {/*<td>{todo.id}</td>*/}
                                    <td>{todo.description}</td>
                                    <td>{todo.done.toString()}</td>
                                    <td>{moment(todo.targetDate).format('DD-MM-YYYY')}</td>
                                    <td><button className="btn btn-success" onClick={()=>this.updateTodoClicked(todo.id)}>Update</button></td>
                                    <td><button className="btn btn-warning" onClick={()=>this.deleteTodoClicked(todo.id)}>Delete</button></td>
                                </tr>
                        )
                    }
                </tbody>
            </table>
            <div className="row">
                <button className="btn btn-success" onClick={()=>this.addButtonClicked()}>Add</button>
            </div>
            </div>
            </div>
    }
}

export default ListTodos
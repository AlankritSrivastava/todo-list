import React, { Component } from 'react'
//import FirstComponent from './components/exp/FirstComponent.jsx'
//import SecondComponent from './components/exp/SecondComponent.jsx'
//import ThirdComponent from './components/exp/ThirdComponent.jsx'
//import Counter from './components/counter/Counter'
import TodoApp from './components/todo/TodoApp'
import './App.css'
import './bootstrap.css'
 
class App extends Component {
  render() {
    return (
      <div className="App">
      {/*<Counter/>*/}
      <TodoApp/>
      </div>
    );
  }
}
// class LearningComponents extends Component{
//   render() {
//     return (
//       <div className="App">
//        My World
//        <FirstComponent></FirstComponent>
//        <SecondComponent></SecondComponent>
//        <ThirdComponent></ThirdComponent>
//       </div>
//     );
//   }
// }


export default App;
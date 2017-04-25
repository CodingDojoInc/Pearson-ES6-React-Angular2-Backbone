import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import APP_STATE from './state';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      todos: props.state.todos,
      filter: "ALL"
    }
    // Need to pin handleCheck to 'this' since passing down to child components
    this.handleCheck = this.handleCheck.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleCheck(idx){
    // Find the relevant todo
    const todos = this.state.todos;
    // Flip the completed value
    todos[idx].completed = !todos[idx].completed;
    // Reset state and rerender
    this.setState({
      todos
    });
  }
  handleClick(filter){
    this.setState({
      filter
    });
  }
  handleSubmit(newTodo){
    this.setState({
      todos: [newTodo, ...this.state.todos]
    });
  }
  render(){
    return (
      <div>
        <TodoFilters
          filters={["ALL", "COMPLETED", "INCOMPLETE"]}
          onClick={this.handleClick}
        />
        <TodoList
          filter={this.state.filter}
          todos={this.state.todos}
          onCheck={this.handleCheck}
        />
        <TodoForm
          onSubmit={this.handleSubmit}
        />
      </div>
    )
  }
}

class TodoList extends Component {
  render(){
    // Iterate through the todos passed down as props and generate an array of list items
      const todoList = this.props.todos
      .filter( (todo) => {
        if (this.props.filter === "ALL") { return true; }
        return (this.props.filter === "COMPLETED") ? todo.completed : !todo.completed
      })
      .map( (todo, idx) => {
      return (
        <li key={idx}>
          {todo.text} {todo.due}
          <input
            type="checkbox"
            checked={todo.completed}
            onChange={ () => this.props.onCheck(idx) }
          />
        </li>
      )
    });

    return (
      <ul>
        {todoList}
      </ul>
    )
  }
}

class TodoFilters extends Component {
  render(){
    const filterButtons = this.props.filters.map( (filter, idx) => {
      return <button
                key={idx}
                onClick={ () => this.props.onClick(filter) }
              >
                {filter}
              </button>
    });
    return (
      <div>
        { filterButtons }
      </div>
    )
  }
}

class TodoForm extends Component {
  constructor(props){
    super(props);
    this.state = {
      text: "",
      completed: false,
      due: ""
    }
  }
  handleChange(e, type){
    this.setState({
      [type] : e.target.value
    })
  }
  render(){
    return (
      <form onSubmit={ (e) => {
          e.preventDefault();
          if (this.state.text !== '' && this.state.due !== ''){
            this.setState({
              text: '',
              due: ''
            });
            this.props.onSubmit(this.state);
          }
        }}
       >
        Todo: <input
                type="text"
                value={this.state.text}
                onChange={ (e)=> this.handleChange(e, 'text')
              }/>
        Due: <input
                type="text"
                value={this.state.due}
                onChange={ (e)=> this.handleChange(e, 'due')
              }/>

        <input type="submit" value="Add Todo"/>
      </form>
    )
  }
}

ReactDOM.render(
  <App state={ APP_STATE }/>,
  document.getElementById('root')
);

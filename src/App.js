import { useState, useEffect, useRef } from 'react';
import Container from 'react-bootstrap/Container';
import classNames from 'classnames';

import Header from "./components/header/Header";
import TodoInput from "./components/todoinput/TodoInput";
import TodoList from './components/todolist/TodoList';
import TodoFilters from './components/todofilters/TodoFilters';

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

	const [todos, setTodos] = useState([{
		name: 'Reading',
		done: false,
		id: 1
	}]);
	const [filter, setFilter] = useState('all');
	
	
	function countRemaining() {
		const remainingTasks = todos.filter(todo => !todo.done);
		return remainingTasks.length;
	}

	// ADD TODO
	const addTodo = (newTodoInput) => {
		let todosCopy = [...todos];
		todosCopy = [...todosCopy, {name: newTodoInput, done: false, id: todos.length + 1}];
		setTodos(todosCopy);
	}
	
	function toggleTodo(id) {
		const newtodos = [...todos];
		const selectedTask = todos.find(todo => todo.id === id);
		selectedTask.done = !selectedTask.done;
		setTodos(newtodos)
	}

	function deleteTodo(id) {
		const remainingTodos = todos.filter(todo => todo.id !== id);
		setTodos(remainingTodos);
	}

	function clearCompleted() {
		const remainingTodos = todos.filter(todo => !todo.done);
		setTodos(remainingTodos);
	}


	return (    
	<div className="App">
		<Container>
			<Header/>
			<TodoInput addTodo={addTodo}/>
			<TodoList 
				data={todos} 
				toggleTodo={toggleTodo}
				deleteTodo={deleteTodo}/> 
			<TodoFilters 
				countRemaining={countRemaining}
				clearCompleted={clearCompleted}/>       
		</Container>      
	</div>

	);
}

export default App;

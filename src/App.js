import { useState, useEffect, useRef } from 'react';
import Container from 'react-bootstrap/Container';
import { v4 as uuidv4 } from 'uuid';

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
	


	const addTodo = (newTodoInput) => {
		let todosCopy = [...todos];
		todosCopy = [...todosCopy, {name: newTodoInput, done: false, id: todos.length + 1}];
		setTodos(todosCopy);
	}
	


	return (    
	<div className="App">
		<Container>
			<Header/>
			<TodoInput addTodo={addTodo}/>
			<TodoList data={todos}/> 
			<TodoFilters/>       
		</Container>      
	</div>

	);
}

export default App;

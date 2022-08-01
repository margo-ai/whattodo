import { useState, useEffect} from 'react';
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
	const [filteredTodos, setFilteredTodos] = useState([]);
	const [allFilterActive, setAllFilterActive] = useState(true);
	const [activeFilterActive, setActiveFilterActive] = useState(false);
	const [completedFilterActive, setCompletedFilterActive] = useState(false);

	

	// Count uncompleted todos
	function countRemaining() {
		const remainingTasks = todos.filter(todo => !todo.done);
		return remainingTasks.length;
	}

	// Add todo
	const addTodo = (newTodoInput) => {
		let todosCopy = [...todos];
		todosCopy = [...todosCopy, {name: newTodoInput, done: false, id: todos.length + 1}];
		setTodos(todosCopy);
	}
	
	//Toggle todo complete/not complete
	function toggleTodo(id) {
		const newtodos = [...todos];
		const selectedTask = todos.find(todo => todo.id === id);
		selectedTask.done = !selectedTask.done;
		setTodos(newtodos)
	}

	//Delete todo when X clicked
	function deleteTodo(id) {
		const remainingTodos = todos.filter(todo => todo.id !== id);
		setTodos(remainingTodos);
	}

	//Clear all copleted todos
	function clearCompleted() {
		const remainingTodos = todos.filter(todo => !todo.done);
		setTodos(remainingTodos);
	}

	//Change list displayed based on filter
	useEffect(() => {
		filterList();
	}, [todos, filter]);


	function filterList() {
		if (filter === 'all') {
			setFilteredTodos(todos);
			setAllFilterActive(true);
			setActiveFilterActive(false);
			setCompletedFilterActive(false);
		} else if (filter === 'active') {
			const activeTodos = todos.filter(todo => !todo.done);
			setFilteredTodos(activeTodos);
			setActiveFilterActive(true);
			setAllFilterActive(false);
			setCompletedFilterActive(false);
		} else if (filter === 'completed') {
			const completedTodos = todos.filter(todo => todo.done);
			setFilteredTodos(completedTodos);
			setCompletedFilterActive(true);
			setAllFilterActive(false);
			setActiveFilterActive(false);
		}
	}



	return (    
	<div className="App">
		<Container>
			<Header/>
			<TodoInput addTodo={addTodo}/>
			<TodoList 
				data={filteredTodos} 
				toggleTodo={toggleTodo}
				deleteTodo={deleteTodo}/> 
			<TodoFilters 
				countRemaining={countRemaining}
				clearCompleted={clearCompleted}
				setFilter={setFilter}
				allFilterActive={allFilterActive}
				activeFilterActive={activeFilterActive}
				completedFilterActive={completedFilterActive}
				/>       
		</Container>      
	</div>

	);
}

export default App;

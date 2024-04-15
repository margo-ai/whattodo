import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";

import { v4 as uuidv4 } from "uuid";

import { Header } from "./components/Header";
import { TodoInput } from "./components/TodoInput";
import { TodoList } from "./components/TodoList";
import { TodoFilters } from "./components/TodoFilters";

import "bootstrap/dist/css/bootstrap.min.css";
import { Todo } from "./types/types";

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [filter, setFilter] = useState("all");
  const [filteredTodos, setFilteredTodos] = useState<Todo[]>([]);
  const [allFilterActive, setAllFilterActive] = useState(true);
  const [activeFilterActive, setActiveFilterActive] = useState(false);
  const [completedFilterActive, setCompletedFilterActive] = useState(false);

  // Count uncompleted todos
  const countRemaining = () => {
    const remainingTasks = todos.filter((todo) => !todo.done);
    return remainingTasks.length;
  };

  const addToLocalStorage = (todos: Todo[]) => {
    localStorage.setItem("todos", JSON.stringify(todos));
  };

  // Add todo
  const addTodo = (newTodoInput: string) => {
    const newItem = { name: newTodoInput, done: false, id: uuidv4() };
    const todosCopy = [...todos, newItem];
    console.log(todosCopy);
    addToLocalStorage(todosCopy);
    setTodos(todosCopy);
  };

  //Toggle todo complete/not complete
  const toggleTodo = (id: string) => {
    const newtodos = [...todos];
    const selectedTask = todos.find((todo) => todo.id === id);
    selectedTask.done = !selectedTask.done;
    addToLocalStorage(newtodos);
    setTodos(newtodos);
  };

  //Delete todo when X clicked
  const deleteTodo = (id: string) => {
    const remainingTodos = todos.filter((todo) => todo.id !== id);
    addToLocalStorage(remainingTodos);
    setTodos(remainingTodos);
  };

  //Clear all copleted todos
  const clearCompleted = () => {
    const remainingTodos = todos.filter((todo) => !todo.done);
    addToLocalStorage(remainingTodos);
    setTodos(remainingTodos);
  };

  useEffect(() => {
    const todosFromLS = JSON.parse(localStorage.getItem("todos"));
    setTodos(todosFromLS);
  }, []);

  //Change list displayed based on filter
  useEffect(() => {
    updateTodos();
  }, [todos, filter]);

  const filterTodos = (todos: Todo[], completed: boolean, all: boolean, active: boolean) => {
    setFilteredTodos(todos);
    setCompletedFilterActive(completed);
    setAllFilterActive(all);
    setActiveFilterActive(active);
  };

  const updateTodos = () => {
    if (filter === "all") {
      filterTodos(todos, false, true, false);
    } else if (filter === "active") {
      const activeTodos = todos.filter((todo) => !todo.done);
      filterTodos(activeTodos, false, false, true);
    } else if (filter === "completed") {
      const completedTodos = todos.filter((todo) => todo.done);
      filterTodos(completedTodos, true, false, false);
    }
  };

  return (
    <div className="App">
      <Container>
        <Header />
        <TodoInput addTodo={addTodo} />
        <TodoList data={filteredTodos} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
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

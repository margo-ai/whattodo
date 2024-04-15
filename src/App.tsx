import React from "react";
import { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import classNames from "classnames";

import { Header } from "./components/Header";
import { TodoInput } from "./components/TodoInput";
import { TodoList } from "./components/TodoList";
import { TodoFilters } from "./components/TodoFilters";

import "bootstrap/dist/css/bootstrap.min.css";
import { Todo } from "./types/types";

function App() {
  const [todos, setTodos] = useState<Todo[]>([
    {
      name: "Reading",
      done: false,
      id: 1,
    },
  ]);
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

  // Add todo
  const addTodo = (newTodoInput: string) => {
    let todosCopy = [...todos];
    todosCopy = [...todosCopy, { name: newTodoInput, done: false, id: todos.length + 1 }];
    console.log(todosCopy);
    localStorage.setItem("todos", JSON.stringify(todosCopy));
    setTodos(todosCopy);
  };

  //Toggle todo complete/not complete
  const toggleTodo = (id: number) => {
    const newtodos = [...todos];
    const selectedTask = todos.find((todo) => todo.id === id);
    selectedTask.done = !selectedTask.done;
    setTodos(newtodos);
  };

  //Delete todo when X clicked
  const deleteTodo = (id: number) => {
    const remainingTodos = todos.filter((todo) => todo.id !== id);
    setTodos(remainingTodos);
  };

  //Clear all copleted todos
  const clearCompleted = () => {
    const remainingTodos = todos.filter((todo) => !todo.done);
    setTodos(remainingTodos);
  };

  //Change list displayed based on filter
  useEffect(() => {
    // const todosFromLS = JSON.parse(localStorage.getItem("todos"));
    // setTodos(todosFromLS);
    filterList();
  }, [todos, filter]);

  const filterList = () => {
    if (filter === "all") {
      setFilteredTodos(todos);
      setCompletedFilterActive(false);
      setAllFilterActive(true);
      setActiveFilterActive(false);
    } else if (filter === "active") {
      const activeTodos = todos.filter((todo) => !todo.done);
      setFilteredTodos(activeTodos);
      setCompletedFilterActive(false);
      setAllFilterActive(false);
      setActiveFilterActive(true);
    } else if (filter === "completed") {
      const completedTodos = todos.filter((todo) => todo.done);
      setFilteredTodos(completedTodos);
      setCompletedFilterActive(true);
      setAllFilterActive(false);
      setActiveFilterActive(false);
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

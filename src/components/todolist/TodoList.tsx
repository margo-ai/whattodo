import React from "react";
import { TodoItem } from "../TodoItem";

import "./todolist.scss";
import { Todo } from "src/types/types";

type Props = {
  data: Todo[];
  toggleTodo: (id: string) => void;
  deleteTodo: (id: string) => void;
};

export const TodoList = ({ data, toggleTodo, deleteTodo }: Props) => {
  const tasks = data.map((todo) => {
    return <TodoItem key={todo.id} todo={todo} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />;
  });

  return <ul className="list mb-3">{tasks}</ul>;
};

import React from "react";

import classNames from "classnames";
import "./todoitem.scss";

import { Todo } from "src/types/types";

type Props = {
  todo: Todo;
  toggleTodo: (id: string) => void;
  deleteTodo: (id: string) => void;
};

export const TodoItem = ({ todo, toggleTodo, deleteTodo }: Props) => {
  const labelClasses = classNames("item__label", {
    "complete-todo": todo.done === true,
  });

  function handleToggle() {
    toggleTodo(todo.id);
  }

  function handleDelete() {
    deleteTodo(todo.id);
  }

  return (
    <li className="item">
      <label className={labelClasses}>
        <input type="checkbox" className="item__checkbox" checked={todo.done === true} onChange={handleToggle} />
        <span className="item__checkbox-custom"></span>
        {todo.name}
      </label>
      <button className="item__delete" onClick={handleDelete}></button>
    </li>
  );
};

import React, { useState } from "react";

import "./todoinput.scss";

type Props = {
  addTodo: (newTodoInput: string) => void;
};

export const TodoInput = ({ addTodo }: Props) => {
  const [userInput, setUserInput] = useState("");

  const handleChange = (e: { currentTarget: { value: React.SetStateAction<string> } }) => {
    setUserInput(e.currentTarget.value);
  };

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    addTodo(userInput);
    setUserInput("");
  };

  return (
    <form className="addtodo" onSubmit={handleSubmit}>
      <input
        className="addtodo__input"
        data-testid="input"
        value={userInput}
        onChange={handleChange}
        type="text"
        placeholder="Create a new ToDo..."
      />
      <button type="submit" className="addtodo__submit">
        +
      </button>
    </form>
  );
};

import { useEffect, useState } from "react";
import { renderHook } from "@testing-library/react";
import { describe, it } from "@jest/globals";

import { Todo } from "./types/types";

describe("Todo tests", () => {
  it("adding new todo", () => {
    const { result } = renderHook(() => {
      const [todos, setTodos] = useState<Todo[]>([{ name: "Work", done: false, id: "1" }]);
      useEffect(() => {
        const addTodo = (newTodoInput: string) => {
          const newItem = { name: newTodoInput, done: false, id: "2" };
          const todosCopy = [...todos, newItem];
          setTodos(todosCopy);
        };
        addTodo("Reading");
      }, []);

      return todos;
    });

    expect(result.current.length).toBe(2);
    expect(result.current).toEqual([
      { name: "Work", done: false, id: "1" },
      { name: "Reading", done: false, id: "2" },
    ]);
  });

  it("set filter to all", () => {
    const { result } = renderHook(() => {
      const [filter, setFilter] = useState("all");
      useEffect(() => {
        const handleFilterAll = () => {
          setFilter("all");
        };
        handleFilterAll();
      }, []);
      return filter;
    });

    expect(result.current).toBe("all");
  });

  it("set filter to active", () => {
    const { result } = renderHook(() => {
      const [filter, setFilter] = useState("all");
      useEffect(() => {
        const handleFilterActive = () => {
          setFilter("active");
        };
        handleFilterActive();
      }, []);
      return filter;
    });

    expect(result.current).toBe("active");
  });

  it("set filter to completed", () => {
    const { result } = renderHook(() => {
      const [filter, setFilter] = useState("all");
      useEffect(() => {
        const handleFilterCompleted = () => {
          setFilter("completed");
        };
        handleFilterCompleted();
      }, []);
      return filter;
    });

    expect(result.current).toBe("completed");
  });

  it("clear completed todos", () => {
    const { result } = renderHook(() => {
      const [todos, setTodos] = useState<Todo[]>([
        { name: "Work", done: true, id: "1" },
        { name: "Reading", done: false, id: "2" },
      ]);
      useEffect(() => {
        const clearCompleted = () => {
          const remainingTodos = todos.filter((todo) => !todo.done);
          setTodos(remainingTodos);
        };
        clearCompleted();
      }, []);

      return todos;
    });

    expect(result.current.length).toBe(1);
    expect(result.current).toEqual([{ name: "Reading", done: false, id: "2" }]);
  });
});

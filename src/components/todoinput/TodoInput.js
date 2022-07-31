import { useState, useEffect, useRef } from 'react';

import './todoinput.scss';

const TodoInput = ({addTodo}) => {

    const [userInput, setUserInput] = useState('');

    const handleChange = (e) => {
        setUserInput(e.currentTarget.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (userInput.length < 3) {
            return;
        }
        addTodo(userInput);
        setUserInput("");
    }

    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     const todoName = newTodoInput.current.value;
    //     if (todoName === "") {
    //         return
    //     }
    //     addTodo(newTodoInput);
    //     setUserInput("");
    // }




    return (
        <form 
            className="addtodo__block"
            onSubmit={handleSubmit}>            
            <input 
                className="addtodo__input"
                value={userInput}
                onChange={handleChange}
                type="text"
                placeholder="Create a new ToDo..."
                />
            <button 
                type="submit"
                className="addtodo__submit" onClick={() => addTodo()}>+</button>
        </form>
    )
}

export default TodoInput;
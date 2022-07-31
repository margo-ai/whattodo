import TodoItem from '../todoitem/TodoItem';

import './todolist.scss';

const TodoList = ({data, toggleTodo, deleteTodo}) => {

    const tasks = data.map(todo => {
        // const {id, ...itemProps} = item;
        return (
            <TodoItem
                key={todo.id}
                todo={todo}
                toggleTodo={toggleTodo}
                deleteTodo={deleteTodo}
            />
        )
    });

    return (       
        <ul className="list mb-3">
            {tasks}
        </ul>
                
    )
    
}

export default TodoList;
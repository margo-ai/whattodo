import TodoItem from '../todoitem/TodoItem';

import './todolist.scss';

const TodoList = ({data}) => {

    const tasks = data.map(item => {
        const {id, ...itemProps} = item;
        return (
            <TodoItem
                key={id}
                {...itemProps}
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
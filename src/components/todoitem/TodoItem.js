
import classNames from 'classnames';
import './todoitem.scss';

const TodoItem = ({todo, toggleTodo, deleteTodo}) => {

    const labelClasses = classNames('item__label', {
        'complete-todo': todo.done === true
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
                <input type="checkbox" className="item__checkbox" onChange={handleToggle}/>
                <span className="item__checkbox-custom"></span>
                {todo.name}
            </label>
            <button className="item__delete" onClick={handleDelete}></button>
        </li>    
        
    )
}

export default TodoItem;
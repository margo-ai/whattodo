
import './todoitem.scss';

const TodoItem = ({name}) => {
    return (
        <li className="item">
            <label className="item__label">
                <input type="checkbox" className="item__checkbox" />
                <span className="item__checkbox-custom"></span>
                {name}
            </label>
            <button className="item__delete"></button>
        </li>    
        
    )
}

export default TodoItem;

import './todofilter.scss';

const TodoFilters = ({countRemaining, clearCompleted}) => {
    return (
        <div className="filters">
            <p className="filters__remaining">{countRemaining()} task left</p>
            <div className="filters__group">
                <button className="filter allFilterActive">All</button>
                <button className="filter activeFilterActive">Active</button>
                <button className="filter completedFilterActive">Completed</button>
            </div>
            <button className="filters__clear" onClick={clearCompleted}>Clear Completed</button>
        </div>    
    )
}

export default TodoFilters;

import './todofilter.scss';

const TodoFilters = ({countRemaining, clearCompleted, setFilter, allFilterActive, activeFilterActive, completedFilterActive}) => {

    function handleFilterAll() {
        setFilter('all');
    }

    function handleFilterActive() {
        setFilter('active');
    }

    function handleFilterComplete() {
        setFilter('completed');
    }

    return (
        <div className="filters">
            <p className="filters__remaining">{countRemaining()} task left</p>
            <div className="filters__group">
                <button className={allFilterActive ? "filter active-filter" : "filter"} onClick={handleFilterAll}>All</button>
                <button className={activeFilterActive ? "filter active-filter" : "filter"} onClick={handleFilterActive}>Active</button>
                <button className={completedFilterActive ? "filter active-filter" : "filter"} onClick={handleFilterComplete}>Completed</button>
            </div>
            <button className="filters__clear" onClick={clearCompleted}>Clear Completed</button>
        </div>    
    )
}

export default TodoFilters;
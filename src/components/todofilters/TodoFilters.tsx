import React from "react";
import "./todofilter.scss";

type Props = {
  countRemaining: () => number;
  clearCompleted: () => void;
  setFilter: (filter: string) => void;
  allFilterActive: boolean;
  activeFilterActive: boolean;
  completedFilterActive: boolean;
};

export const TodoFilters = ({
  countRemaining,
  clearCompleted,
  setFilter,
  allFilterActive,
  activeFilterActive,
  completedFilterActive,
}: Props) => {
  const handleFilterAll = () => {
    setFilter("all");
  };

  const handleFilterActive = () => {
    setFilter("active");
  };

  const handleFilterCompleted = () => {
    setFilter("completed");
  };

  return (
    <div className="filters">
      <p className="filters__remaining" data-testid="countRemaining">
        {countRemaining()} task left
      </p>
      <div className="filters__group">
        <button className={allFilterActive ? "filter active-filter" : "filter"} onClick={handleFilterAll}>
          All
        </button>
        <button className={activeFilterActive ? "filter active-filter" : "filter"} onClick={handleFilterActive}>
          Active
        </button>
        <button className={completedFilterActive ? "filter active-filter" : "filter"} onClick={handleFilterCompleted}>
          Completed
        </button>
      </div>
      <button className="filters__clear" onClick={clearCompleted}>
        Clear Completed
      </button>
    </div>
  );
};

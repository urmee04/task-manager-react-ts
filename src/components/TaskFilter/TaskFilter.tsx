import React, { useState } from "react";
import { type TaskFilterProps } from "../../types";
//TaskFilter component that allow users to filter tasks by status and priority
export const TaskFilter: React.FC<TaskFilterProps> = ({ onFilterChange }) => {
  //state for storing the selected status filter value
  const [status, setStatus] = useState<string>("");
  //state for storing the selected priority filter value
  const [priority, setPriority] = useState<string>("");
  /*handler function that triggers when the Apply button is clicked
  It passes the current filter values to the parent component*/
  const handleFilter = () => {
    onFilterChange({
      status: status as any,
      priority: priority as any,
    });
  };

  return (
    <div className="filter-panel">
      {/* Dropdown for selecting task status */}
      <select onChange={(e) => setStatus(e.target.value)}>
        <option value="">All</option>
        <option value="pending">Pending</option>
        <option value="in-progress">In Progress</option>
        <option value="completed">Completed</option>
      </select>
      {/* Dropdown for selecting task priority */}
      <select onChange={(e) => setPriority(e.target.value)}>
        <option value="">All</option>
        <option value="low">Low</option>
        <option value="medium">Medium</option>
        <option value="high">High</option>
      </select>

      {/* Button to apply the selected filters */}
      <button onClick={handleFilter}>Apply</button>
    </div>
  );
};

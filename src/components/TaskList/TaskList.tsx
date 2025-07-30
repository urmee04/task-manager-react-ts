/*TaskList component receives a list of tasks and renders a TaskItem for each.
It passes down the status change and delete handlers to each TaskItem.*/

import React from "react";
import { type TaskListProps } from "../../types";
import { TaskItem } from "../TaskItem/TaskItem";

export const TaskList: React.FC<TaskListProps> = ({
  tasks,
  onStatusChange,
  onDelete,
}) => {
  return (
    <div>
      {tasks.length === 0 ? (
        <p>No tasks match the current filters</p>
      ) : (
        tasks.map((task) => (
          <TaskItem
            key={task.id}
            task={task}
            onStatusChange={onStatusChange}
            onDelete={onDelete}
          />
        ))
      )}
    </div>
  );
};

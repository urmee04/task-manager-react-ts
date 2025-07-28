/**TaskItem component displays individual task details including title, description, status,
*priority, and due date. It allows users to change the task status using a dropdown
and delete the task via a button.*/

import React from "react";
import { type Task, type TaskStatus } from "../../types/index";

interface TaskItemProps {
  task: Task;
  onStatusChange: (taskId: string, newStatus: TaskStatus) => void;
  onDelete: (taskId: string) => void;
}
export const TaskItem: React.FC<TaskItemProps> = ({
  task,
  onStatusChange,
  onDelete,
}) => {
  return (
    <div className={`task-card ${task.status} ${task.priority}`}>
      <h3>{task.title}</h3>
      <p>{task.description}</p>
      <p>Status: {task.status}</p>
      <p>Priority: {task.priority}</p>
      <p>Due: {task.dueDate}</p>
      <select
        value={task.status}
        onChange={(e) => onStatusChange(task.id, e.target.value as TaskStatus)}
      >
        <option value="pending">Pending</option>
        <option value="in-progress">In Progress</option>
        <option value="completed">Completed</option>
      </select>

      <button onClick={() => onDelete(task.id)}>Delete</button>
    </div>
  );
};

import React, { useState } from "react";

import "./App.css";
import { type Task, type TaskStatus } from "./types";
import { TaskFilter } from "./components/TaskFilter/TaskFilter";
import { TaskList } from "./components/TaskList/TaskList";

const initialTasks: Task[] = [
  {
    id: "1",
    title: "Title1",
    description: "Description1",
    status: "pending",
    priority: "low",
    dueDate: "2025-08-01",
  },

  {
    id: "2",
    title: "Title2",
    description: "Description2",
    status: "in-progress",
    priority: "medium",
    dueDate: "2025-08-01",
  },

  {
    id: "3",
    title: "Title3",
    description: "Description3",
    status: "completed",
    priority: "high",
    dueDate: "2025-08-01",
  },
];

function App() {
  const [tasks, setTasks] = useState<Task[]>(initialTasks);
  const [filteredTasks, setFilteredTasks] = useState<Task[]>(initialTasks);

  const handleStatusChange = (id: string, newStatus: TaskStatus) => {
    const updatedTasks = tasks.map((task) =>
      task.id === id ? { ...task, status: newStatus } : task
    );
    setTasks(updatedTasks);
    setFilteredTasks(updatedTasks);
  };

  const handleDelete = (id: string) => {
    const updated = tasks.filter((task) => task.id !== id);
    setTasks(updated);
    setFilteredTasks(updated);
  };

  const handleFilterChange = ({ status, priority }: Partial<Task>) => {
    let filtered = tasks;

    if (status) filtered = filtered.filter((task) => task.status === status);
    if (priority)
      filtered = filtered.filter((task) => task.priority === priority);

    setFilteredTasks(filtered);
  };

  return (
    <div className="app">
      <h1>Task Manager</h1>
      <TaskFilter onFilterChange={handleFilterChange} />
      <TaskList
        tasks={filteredTasks}
        onStatusChange={handleStatusChange}
        onDelete={handleDelete}
      />
    </div>
  );
}

export default App;

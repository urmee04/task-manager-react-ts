//define allowed task status values as a union type
export type TaskStatus = "pending" | "in-progress" | "completed";

//interface to define the structure of a single task
export interface Task {
  id: string; //unique identifier for the task
  title: string; //title or name of the task
  description: string; //detailed information about the task
  status: TaskStatus; //current status of the task
  priority: "low" | "medium" | "high"; //priority level of the task
  dueDate: string; //due date for the task
}

//props interface for a TaskList component
export interface TaskListProps {
  tasks: Task[]; //array of tasks to display
  onStatusChange: (taskId: string, newStatus: TaskStatus) => void; //callback when a task's status is updated
  onDelete: (taskId: string) => void; //callback to delete a task
}

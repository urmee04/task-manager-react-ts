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
/**************************************************/
//props interface for a TaskList component
export interface TaskListProps {
  //array of tasks to display
  tasks: Task[];
  //callback when a task's status is updated
  onStatusChange: (taskId: string, newStatus: TaskStatus) => void;
  //callback to delete a task
  onDelete: (taskId: string) => void;
}
/**************************************************/
//props interface for a single TaskItem component
export interface TaskItemProps {
  //the task object to display
  task: Task;
  //callback to update the task status
  onStatusChange: (taskId: string, newStatus: TaskStatus) => void;
  //callback to delete the task
  onDelete: (taskId: string) => void;
}

/***********************************************/

//props interface for the TaskFilter component
export interface TaskFilterProps {
  //callback function triggered when filters change.
  //accepts an object that can include optional status and priority.
  onFilterChange: (filters: {
    //optional task status filter
    status?: TaskStatus;
    //optional task priority filter
    priority?: "low" | "medium" | "high";
  }) => void;
}

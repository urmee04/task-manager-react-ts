### Lab 9.3: Event Handling

#### Task Management Application Lab

##### Lab Overview

In this lab, will create a Task Management application that demonstrates:

- Dynamic list rendering
- Proper key usage
- Conditional rendering
- TypeScript React components
- Filtering functionality
- Component composition

##### Workplace Context

As a frontend developer, working on a task management system. The team needs a component that:

- Displays a list of tasks
- Filters tasks by status
- Shows different visual states based on task properties
- Is reusable and type-safe
- Handles various task states efficiently

## Objectives

By the end of this lab, will be able to:

- Create components that render lists with proper key management
- Implement filtering and sorting of list items
- Use conditional rendering based on item properties
- Apply TypeScript interfaces for type safety
- Implement proper component composition and prop handling

## Setup Instructions

1. Create a new React TypeScript project using Vite:

```bash
npm create vite@latest task-manager -- --template react-ts
cd task-manager
npm install
```

2. Create the following folder structure:

```bash
src/
  components/
    TaskList/
      TaskList.tsx
    TaskItem/
      TaskItem.tsx
    TaskFilter/
      TaskFilter.tsx
  types/
    index.ts
```

##### Cloning the Repository

To clone this repository, open terminal or command prompt and run the following command:

```bash
git clone https://github.com/urmee04/task-manager-react-ts/tree/main/src
cd task-manager
npm install
npm run dev
```

##### Reflection Questions

**1. How did you ensure unique keys for your list items?**
Each task in the list has a unique `id` property that's used as the key when mapping through tasks in the TaskList component (key={task.id}).This ensures React can efficiently track and update individual list items.

**2. What considerations did you make when implementing the filtering functionality?**
To implement the filtering functionality I maintained two state arrays: original tasks and filteredTasks to preserve all tasks while showing filtered results. Used separate state for filter criteria (status and priority). Implemented the filter as a pure function that doesn't mutate original data and also included an "All" option in filter dropdowns to reset filters.

**3. How did you handle state updates for task status changes?**

To handle state updates for task status chages I used useState to manage task state in the parent App component. I Created a handleStatusChange function that:

- Maps through tasks to find and update the matching task

- Updates both the main tasks and filtered tasks states

- Uses the spread operator to immutably update state

- Passed this handler down to child components via props

**4. What challenges did you face when implementing conditional rendering?**

Challenges I faced when implementing conditional rendering like handling empty states when filters return no results (the tasks.length === 0 check), ensuring proper re-rendering when both tasks and filters change and managing the display logic for different task statuses (pending/in-progress/completed)

##### References

Besides class lectures and materials and code suggestions from lessons, I took help from the following resources to complete the lab.

- [List and Keys](https://react.dev/learn/rendering-lists#keeping-list-items-in-order-with-key)

- [Array.prototype.filter()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)

- [Updating Objects in State](https://react.dev/learn/updating-objects-in-state)

- [Conditional Rendering](https://react.dev/learn/conditional-rendering)

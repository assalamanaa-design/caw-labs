import { useState } from "react";
import TaskForm from "./components/TaskForm";
import Column from "./components/Column";
import "./App.css";

function App() {
  const [tasks, setTasks] = useState([
    { id: 1, title: "Learn React", description: "Basics", status: "todo" },
    { id: 2, title: "Build Kanban", description: "TP", status: "progress" },
  ]);

  const addTask = (title, description) => {
    const newTask = {
      id: Date.now(),
      title,
      description,
      status: "todo",
    };
    setTasks([...tasks, newTask]);
  };

  const moveTask = (taskId, direction) => {
    setTasks((prev) =>
      prev.map((task) => {
        if (task.id !== taskId) return task;

        const order = ["todo", "progress", "done"];
        let idx = order.indexOf(task.status);

        if (direction === "right" && idx < order.length - 1) idx++;
        if (direction === "left" && idx > 0) idx--;

        return { ...task, status: order[idx] };
      })
    );
  };

  const deleteTask = (taskId) => {
    setTasks(tasks.filter((t) => t.id !== taskId));
  };

  return (
    <div className="app">
      <h1>Kanban Board</h1>

      <TaskForm addTask={addTask} />

      <div className="board">
        <Column
          title="To Do"
          tasks={tasks.filter((t) => t.status === "todo")}
          moveTask={moveTask}
          deleteTask={deleteTask}
        />

        <Column
          title="In Progress"
          tasks={tasks.filter((t) => t.status === "progress")}
          moveTask={moveTask}
          deleteTask={deleteTask}
        />

        <Column
          title="Done"
          tasks={tasks.filter((t) => t.status === "done")}
          moveTask={moveTask}
          deleteTask={deleteTask}
        />
      </div>
    </div>
  );
}

export default App;

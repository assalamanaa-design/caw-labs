import TaskCard from "./TaskCard";

function Column({ title, tasks, moveTask, deleteTask }) {
  return (
    <div className="column">
      <h2>{title}</h2>

      <div className="task-list">
        {tasks.length === 0 && <p>No tasks</p>}

        {tasks.map((task) => (
          <TaskCard
            key={task.id}
            task={task}
            moveTask={moveTask}
            deleteTask={deleteTask}
          />
        ))}
      </div>
    </div>
  );
}

export default Column;

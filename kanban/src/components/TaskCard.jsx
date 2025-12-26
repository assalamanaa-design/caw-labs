function TaskCard({ task, moveTask, deleteTask }) {
  return (
    <div className="task-card">
      <h3>{task.title}</h3>
      <p>{task.description}</p>

      <div className="task-actions">
        <button onClick={() => moveTask(task.id, "left")}>←</button>
        <button onClick={() => moveTask(task.id, "right")}>→</button>
        <button onClick={() => deleteTask(task.id)}>✕</button>
      </div>
    </div>
  );
}

export default TaskCard;

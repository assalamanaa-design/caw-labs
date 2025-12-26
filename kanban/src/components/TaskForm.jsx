import { useState } from "react";

function TaskForm({ addTask }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const submit = (e) => {
    e.preventDefault();
    if (!title.trim()) return;

    addTask(title, description);
    setTitle("");
    setDescription("");
  };

  return (
    <form className="task-form" onSubmit={submit}>
      <input
        type="text"
        placeholder="Task title..."
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="text"
        placeholder="Description..."
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button>Add Task</button>
    </form>
  );
}

export default TaskForm;

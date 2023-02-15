import React, { useState } from "react";
import "./App.css";

function App() {
  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [timeToAchieve, setTimeToAchieve] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTask = {
      title: title,
      description: description,
      dueDate: dueDate,
      timeToAchieve: timeToAchieve,
      timestamp: new Date().toLocaleString(),
      status: "pending",
    };
    setTasks([...tasks, newTask]);
    setTitle("");
    setDescription("");
    setDueDate("");
    setTimeToAchieve("");
  };

  const handleDelete = (index) => {
    const newTasks = [...tasks];
    newTasks.splice(index, 1);
    setTasks(newTasks);
  };

  const handleStatusChange = (index) => {
    const newTasks = [...tasks];
    newTasks[index].status =
      newTasks[index].status === "pending" ? "completed" : "pending";
    setTasks(newTasks);
  };

  return (
    <div className="app">
      <h1>To Do List</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Task Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Task Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
        <input
          type="date"
          placeholder="Due Date"
          value={dueDate}
          onChange={(e) => setDueDate(e.target.value)}
          required
        />
        <input
          type="time"
          placeholder="Time to Achieve"
          value={timeToAchieve}
          onChange={(e) => setTimeToAchieve(e.target.value)}
          required
        />
        <button type="submit">Add Task</button>
      </form>
      <ul>
        {tasks.map((task, index) => (
          <li key={index} className={task.status}>
            <div>
              <h3>{task.title}</h3>
              <p>{task.description}</p>
              <p>
                Due: {task.dueDate} at {task.timeToAchieve}
              </p>
              <p>Created: {task.timestamp}</p>
            </div>
            <div>
              <button onClick={() => handleStatusChange(index)}>
                {task.status === "pending" ? "Mark Completed" : "Mark Pending"}
              </button>
              <button onClick={() => handleDelete(index)}>Delete</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;

import React, { useState } from "react";
import './Tasks.css';
import MessagingNavbar from "./Messaging_Navbar"; // Reusing the Messaging Navbar

function Tasks() {
  // Sample tasks data
  const [tasks, setTasks] = useState([
    { id: 1, title: "Critique the homepage design", completed: false },
    { id: 2, title: "Check accessibility for color contrast", completed: false },
    { id: 3, title: "Evaluate responsiveness on mobile devices", completed: false },
    { id: 4, title: "Test form usability on the checkout page", completed: false }
  ]);

  // Sample feedback data
  const [feedback, setFeedback] = useState([
    {
      id: 1,
      title: "Homepage Design",
      comments: "The homepage is visually appealing, but the color scheme could be improved for better contrast."
    },
    {
      id: 2,
      title: "Checkout Page",
      comments: "The form inputs are not responsive on mobile. They need resizing to improve usability."
    }
  ]);

  // Toggle task completion
  const toggleTaskCompletion = (id) => {
    const updatedTasks = tasks.map((task) =>
      task.id === id ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
  };

  return (
    <div className="tasks-container">
      {/* Custom Navbar */}
      <div className="tasks-navbar">
        <MessagingNavbar />
      </div>

      {/* Main Tasks Area */}
      <div className="tasks-main">
        {/* Header */}
        <div>tasks</div>
        <div className="tasks-header">
          {/* Task List */}
        <div className="task-list">
          <div>to-do</div>
          {tasks.map((task) => (
            <div
              key={task.id}
              className={`task ${task.completed ? "completed" : "pending"}`}
              onClick={() => toggleTaskCompletion(task.id)}
            >
              <p>{task.title}</p>
              <span className="status">{task.completed ? "Completed" : "Pending"}</span>
            </div>
          ))}
        </div>

        {/* Feedback Section */}
        <div className="feedback-section">
          <div>UI/UX feedback</div>
          {feedback.map((item) => (
            <div key={item.id} className="feedback-item">
              <h4>{item.title}</h4>
              <p>{item.comments}</p>
            </div>
          ))}
        </div>

        
        </div>
      </div>
    </div>
  );
}

export default Tasks;
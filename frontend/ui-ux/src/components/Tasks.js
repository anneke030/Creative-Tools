import React, { useState } from "react";
import './Tasks.css';
import MessagingNavbar from "./Messaging_Navbar"; // Reusing the Messaging Navbar
import raafayImage from "../images/Raafay.png"
import jamesImage from "../images/James.png"

function Tasks() {
  const [tasks, setTasks] = useState([
    { id: 1, title: "Critique the homepage design", completed: false },
    { id: 2, title: "Check accessibility for color contrast", completed: false },
    { id: 3, title: "Evaluate responsiveness on mobile devices", completed: false },
    { id: 4, title: "Test form usability on the checkout page", completed: false }
  ]);

  const [feedback, setFeedback] = useState([
    {
      id: 1,
      title: "Homepage Design",
      comments: "The homepage is visually appealing, but the color scheme could be improved for better contrast.",
      image: raafayImage // Placeholder image URL
    },
    {
      id: 2,
      title: "Checkout Page",
      comments: "The form inputs are not responsive on mobile. They need resizing to improve usability.",
      image: jamesImage // Placeholder image URL
    }
  ]);

  const toggleTaskCompletion = (id) => {
    const updatedTasks = tasks.map((task) =>
      task.id === id ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
  };

  return (
    <div className="tasks-container">
      <div className="tasks-navbar">
        <MessagingNavbar />
      </div>
      <div className="tasks-main">
        <div className="tasks-title">tasks</div>
        <div className="tasks-header">
          <div className="task-list">
            <div className="subtitle">to-do:</div>
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
          <div className="feedback-section">
            <div className="subtitle">UI/UX feedback:</div>
            {feedback.map((item) => (
              <div key={item.id} className="feedback-item">
                <img src={item.image} alt={`${item.title} profile`} className="feedback-image" />
                <div className="feedback-content">
                  <div className="feedback-title">{item.title}</div>
                  <p className="feedback-comments">{item.comments}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Tasks;

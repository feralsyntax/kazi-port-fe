import React, { useState } from "react";
import "./dashboard.css";

const Dashboard = () => {
  const [userName] = useState("John Doe");

  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: "Build a Landing Page",
      company: "Safaricom",
      description:
        "Create a responsive landing page for a new product launch. Must follow brand guidelines and include mobile-first optimization.",
      status: "available",
      paid: true,
    },
    {
      id: 2,
      title: "Write Product Description",
      company: "M-Pesa",
      description:
        "Write a compelling product description for a new feature. Focus on user benefits and ease of transaction tracking.",
      status: "available",
      paid: true,
    },
    {
      id: 3,
      title: "Social Media Content",
      company: "Google",
      description:
        "Create 5 social media posts for a tech campaign highlighting developer tools and community growth.",
      status: "completed",
      paid: true,
    },
    {
      id: 4,
      title: "Bug Testing",
      company: "Microsoft",
      description:
        "Test the new app and report any bugs found. Specifically look at session persistence and cross-browser compatibility.",
      status: "available",
      paid: false,
    },
    {
      id: 5,
      title: "Logo Design",
      company: "PayHero",
      description:
        "Design a modern logo for a fintech startup. Needs to represent trust, speed, and digital accessibility.",
      status: "in-progress",
      paid: true,
    },
    {
      id: 6,
      title: "Data Entry",
      company: "KCB Bank",
      description:
        "Enter customer data into the new CRM system carefully ensuring zero errors in banking transaction logs.",
      status: "available",
      paid: false,
    },
  ]);

  const handleStartTask = (id) => {
    const task = tasks.find((t) => t.id === id);

    if (task) {
      alert(`Starting task: ${task.title}`);

      setTasks(
        tasks.map((t) =>
          t.id === id
            ? {
                ...t,
                status: "in-progress",
              }
            : t
        )
      );
    }
  };

  const handleLogout = () => {
    alert("Logging out...");
  };

  const getStatusBadgeClass = (status) => {
    switch (status) {
      case "available":
        return "badge-open";
      case "completed":
        return "badge-done";
      case "in-progress":
        return "badge-in-progress";
      default:
        return "badge-pending";
    }
  };

  const getStatusLabel = (status) => {
    if (status === "available") return "Open";
    if (status === "completed") return "Done";
    return status;
  };

  return (
    <div className="dashboard-container">
      <main className="main-content">
        <section className="welcome-section">
          <h1 className="welcome-title">
            Welcome back, {userName}!
          </h1>

          <p className="welcome-subtitle">
            Here are your available tasks
          </p>
        </section>

        <div className="task-grid">
          {tasks.map((task) => (
            <article
              key={task.id}
              className="task-card"
            >
              <div className="card-header">
                <h3 className="task-title">
                  {task.title}
                </h3>

                <div className="payment-status">
                  {task.paid ? (
                    <span className="payment-paid">
                      💰 Paid
                    </span>
                  ) : (
                    <span className="payment-unpaid">
                      🆓 Unpaid
                    </span>
                  )}
                </div>
              </div>

              <div className="company-tag">
                <span>💼</span> {task.company}
              </div>

              <p className="task-description">
                {task.description}
              </p>

              <div className="badge-container">
                <span
                  className={`badge ${getStatusBadgeClass(
                    task.status
                  )}`}
                >
                  {getStatusLabel(task.status)}
                </span>
              </div>
                            <div className="card-actions">
                {task.status === "available" ? (
                  <button
                    className="btn-primary"
                    onClick={() => handleStartTask(task.id)}
                  >
                    Start Task
                  </button>
                ) : (
                  <button
                    className="btn-secondary"
                    disabled
                  >
                    {task.status === "completed"
                      ? "Completed"
                      : "In Progress"}
                  </button>
                )}

                <button
                  className="btn-secondary"
                  disabled
                >
                  View Details
                </button>
              </div>
            </article>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
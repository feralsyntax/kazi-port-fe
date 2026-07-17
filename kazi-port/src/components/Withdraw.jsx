import { useState } from "react";
import "./Withdraw.css";

const DEFAULT_BALANCE = 1250;

const Withdraw = () => {
  const [amount, setAmount] = useState(DEFAULT_BALANCE);
  const [phone, setPhone] = useState("");
  const [task, setTask] = useState("Build Landing Page - Safaricom");
  const [loading, setLoading] = useState(false);

  const [status, setStatus] = useState({
    show: false,
    type: "",
    title: "",
    description: "",
  });

  const formatKES = (value) =>
    `KES ${Number(value).toLocaleString(undefined, {
      minimumFractionDigits: 2,
    })}`;

  const withdrawAll = () => {
    setAmount(DEFAULT_BALANCE);
  };

  const cancelWithdrawal = () => {
    setAmount(DEFAULT_BALANCE);
    setPhone("");
    setStatus({
      show: false,
      type: "",
      title: "",
      description: "",
    });
    setLoading(false);
  };

  const showStatus = (type, title, description) => {
    setStatus({
      show: true,
      type,
      title,
      description,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!amount || amount <= 0) {
      showStatus(
        "error",
        "Invalid Amount",
        "Please enter a value greater than zero."
      );
      return;
    }

    if (phone.trim().length < 10) {
      showStatus(
        "error",
        "Invalid Phone",
        "Please enter a valid M-Pesa registered number."
      );
      return;
    }

    setLoading(true);

    showStatus(
      "processing",
      "Processing...",
      "We are contacting M-Pesa to initiate your transfer."
    );

    setTimeout(() => {
      const success = Math.random() < 0.8;

      if (success) {
        showStatus(
          "success",
          "Transfer Successful",
          `${formatKES(amount)} has been sent to ${phone}.`
        );
        setLoading(false);
      } else {
        showStatus(
          "error",
          "Connection Failed",
          "M-Pesa services are temporarily unreachable. Please try again later."
        );
        setLoading(false);
      }
    }, 2000);
  };

  return (
    <div className="withdraw-page">

      {/* Sidebar */}

      <aside className="sidebar">

        <div className="sidebar-header">
          <h1>PayHero</h1>
          <p>Growth-oriented Fintech</p>
        </div>

        <nav className="sidebar-nav">

          <a href="#">
            <span className="material-symbols-outlined">
              dashboard
            </span>
            Dashboard
          </a>

          <a href="#">
            <span className="material-symbols-outlined">
              payments
            </span>
            Payments
          </a>

          <a
            href="#"
            className="active"
          >
            <span className="material-symbols-outlined">
              account_balance_wallet
            </span>
            Withdraw
          </a>

          <a href="#">
            <span className="material-symbols-outlined">
              person
            </span>
            Account
          </a>

        </nav>

        <div className="sidebar-footer">

          <a href="#">
            <span className="material-symbols-outlined">
              help
            </span>
            Support
          </a>

          <a href="#">
            <span className="material-symbols-outlined">
              logout
            </span>
            Logout
          </a>

        </div>

      </aside>

      {/* Mobile Header */}

      <header className="mobile-header">

        <h1>PayHero</h1>

        <div className="mobile-icons">

          <span className="material-symbols-outlined">
            notifications
          </span>

          <div className="avatar"></div>

        </div>

      </header>

      <main className="withdraw-content">

        <div className="withdraw-wrapper">

          <a
            href="#"
            className="back-link"
          >
            <span className="material-symbols-outlined">
              arrow_back
            </span>

            Back to Dashboard

          </a>

          <div className="glass-card">

            <div className="card-header">

              <span className="badge">
                Withdraw Earnings
              </span>

              <h2>
                Claim Your Payment
              </h2>

              <p>
                Move your earned commission to your mobile wallet instantly.
              </p>

            </div>

            <div className="balance-card">

              <div>

                <p className="balance-label">
                  Current Balance
                </p>

                <h3>
                  {formatKES(DEFAULT_BALANCE)}
                </h3>

                <p className="balance-subtitle">
                  From 3 completed tasks
                </p>

              </div>

              <span className="material-symbols-outlined balance-icon">
                payments
              </span>

            </div>

            <form onSubmit={handleSubmit}>
                          {/* Amount Input */}

              <div className="form-group">

                <div className="form-label-row">

                  <label htmlFor="amount">
                    Amount (KES)
                  </label>

                  <button
                    type="button"
                    className="withdraw-all-btn"
                    onClick={withdrawAll}
                  >
                    Withdraw All
                  </button>

                </div>

                <div className="input-prefix">

                  <span>KES</span>

                  <input
                    id="amount"
                    type="number"
                    value={amount}
                    onChange={(e) =>
                      setAmount(Number(e.target.value))
                    }
                  />

                </div>

              </div>

              {/* Phone Number */}

              <div className="form-group">

                <label htmlFor="phone">
                  Phone Number
                </label>

                <input
                  id="phone"
                  type="tel"
                  placeholder="2547XXXXXXXX"
                  value={phone}
                  onChange={(e) =>
                    setPhone(e.target.value)
                  }
                />

                <small>
                  Enter the phone number registered with
                  M-Pesa
                </small>

              </div>

              {/* Task Reference */}

              <div className="form-group">

                <label htmlFor="task">
                  Task Reference
                </label>

                <select
                  id="task"
                  value={task}
                  onChange={(e) =>
                    setTask(e.target.value)
                  }
                >
                  <option>
                    Build Landing Page - Safaricom
                  </option>

                  <option>
                    API Integration - Equity Bank
                  </option>

                  <option>
                    UI Design - Kenya Power
                  </option>

                  <option>
                    General Wallet Withdrawal
                  </option>

                </select>

              </div>

              {/* Fee Summary */}

              <div className="summary-box">

                <div className="summary-row">

                  <span>
                    Transaction Fee
                  </span>

                  <span>
                    KES 0.00
                  </span>

                </div>

                <div className="summary-row total">

                  <span>
                    Net to Receive
                  </span>

                  <span className="primary">
                    {formatKES(amount)}
                  </span>

                </div>

              </div>

              {/* Buttons */}

              <div className="button-group">

                <button
                  type="submit"
                  className="submit-btn"
                  disabled={loading}
                >
                  {loading
                    ? "Processing..."
                    : "Confirm Withdrawal"}
                </button>

                <button
                  type="button"
                  className="cancel-btn"
                  onClick={cancelWithdrawal}
                >
                  Cancel
                </button>

              </div>

            </form>

            {/* Status */}

            {status.show && (
              <div
                className={`status-card ${status.type}`}
              >

                <div className="status-icon">

                  {status.type === "processing" &&
                    "pending"}

                  {status.type === "success" &&
                    "check_circle"}

                  {status.type === "error" &&
                    "error"}

                </div>

                <div className="status-content">

                  <h4>
                    {status.title}
                  </h4>

                  <p>
                    {status.description}
                  </p>

                </div>

                {loading && (
                  <div className="loader"></div>
                )}

              </div>
            )}

          </div>

          {/* Recent Withdrawals */}

          <section className="recent-withdrawals">

            <h3>
              Recent Withdrawals
            </h3>

            <div className="withdrawal-item">

              <div className="withdrawal-left">

                <div className="withdrawal-icon">

                  <span className="material-symbols-outlined">
                    check
                  </span>

                </div>

                <div>

                  <p>
                    M-Pesa Withdrawal
                  </p>

                  <small>
                    Oct 12, 2023 • 14:32
                  </small>

                </div>

              </div>

              <strong>
                KES 750.00
              </strong>

            </div>

            <div className="withdrawal-item">

              <div className="withdrawal-left">

                <div className="withdrawal-icon">

                  <span className="material-symbols-outlined">
                    check
                  </span>

                </div>

                <div>

                  <p>
                    M-Pesa Withdrawal
                  </p>

                  <small>
                    Oct 08, 2023 • 09:15
                  </small>

                </div>

              </div>

              <strong>
                KES 500.00
              </strong>

            </div>
                      </section>

        </div>
      </main>

      {/* Mobile Bottom Navigation */}

      <nav className="bottom-nav">

        <button className="bottom-nav-item">
          <span className="material-symbols-outlined">
            dashboard
          </span>
          <span>Home</span>
        </button>

        <button className="bottom-nav-item active">
          <span className="material-symbols-outlined">
            account_balance_wallet
          </span>
          <span>Wallet</span>
        </button>

        <button className="bottom-nav-item">
          <span className="material-symbols-outlined">
            history
          </span>
          <span>History</span>
        </button>

        <button className="bottom-nav-item">
          <span className="material-symbols-outlined">
            person
          </span>
          <span>Profile</span>
        </button>

      </nav>

    </div>
  );
};

export default Withdraw;
function Analytics() {

  const stats = [
    { title: "On Time Trains", value: "82%", type: "good" },
    { title: "Average Delay", value: "12 mins", type: "bad" },
    { title: "Daily Passengers", value: "24K", type: "neutral" },
    { title: "AI Accuracy", value: "94%", type: "good" },
  ];

  const extraStats = [
    { title: "Peak Hour Traffic", value: "High" },
    { title: "Platform Utilization", value: "76%" },
    { title: "Cancellations Today", value: "3" },
    { title: "Network Efficiency", value: "88%" },
  ];

  return (
    <div className="page-container analytics-page">

      {/* HEADER */}
      <div className="analytics-header">

        <h1>📊 Railway Analytics Dashboard</h1>

        <p>
          Real-time insights into train performance, delays, and passenger flow.
        </p>

      </div>

      {/* MAIN STATS */}
      <div className="analytics-grid">

        {stats.map((item, index) => (
          <div key={index} className="modern-card analytics-card">

            <h2>{item.title}</h2>

            <h1 className={item.type}>
              {item.value}
            </h1>

          </div>
        ))}

      </div>

      {/* EXTRA INSIGHTS */}
      <div className="analytics-section">

        <h2>📈 Operational Insights</h2>

        <div className="analytics-grid">

          {extraStats.map((item, index) => (
            <div key={index} className="modern-card">

              <h3>{item.title}</h3>
              <p>{item.value}</p>

            </div>
          ))}

        </div>

      </div>

      {/* PERFORMANCE BARS */}
      <div className="analytics-section">

        <h2>⚡ Performance Overview</h2>

        <div className="progress-box">

          <div>
            <p>On-Time Performance</p>
            <div className="progress">
              <div style={{ width: "82%" }}></div>
            </div>
          </div>

          <div>
            <p>AI Optimization Level</p>
            <div className="progress">
              <div style={{ width: "94%" }}></div>
            </div>
          </div>

          <div>
            <p>Network Load</p>
            <div className="progress">
              <div style={{ width: "76%" }}></div>
            </div>
          </div>

        </div>

      </div>

    </div>
  );
}

export default Analytics;
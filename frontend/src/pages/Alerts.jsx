function Alerts() {

  const alerts = [
    {
      text: "Heavy rain may affect train timing.",
      type: "high"
    },
    {
      text: "Platform 4 maintenance ongoing.",
      type: "medium"
    },
    {
      text: "AI detected possible congestion at Bhopal Junction.",
      type: "info"
    },
    {
      text: "Signal failure reported near Itarsi route.",
      type: "high"
    },
    {
      text: "Extra coaches added to Indore Express.",
      type: "info"
    }
  ];

  const getAlertClass = (type) => {
    switch (type) {
      case "high":
        return "alert-item high";
      case "medium":
        return "alert-item medium";
      case "info":
        return "alert-item info";
      default:
        return "alert-item";
    }
  };

  return (
    <div className="page-container alerts-page">

      {/* HEADER */}
      <div className="alerts-header">

        <h1>🚨 Railway Alerts System</h1>

        <p>Real-time notifications from AI monitoring system</p>

      </div>

      {/* ALERTS */}
      <div className="alerts-box">

        {alerts.map((alert, index) => (
          <div
            key={index}
            className={getAlertClass(alert.type)}
          >

            <span className="alert-icon">
              {alert.type === "high" ? "🔴" :
               alert.type === "medium" ? "🟠" : "🔵"}
            </span>

            <span className="alert-text">
              {alert.text}
            </span>

          </div>
        ))}

      </div>

    </div>
  );
}

export default Alerts;
function Reports() {

  const reports = [
    {
      title: "Monthly Report",
      desc: "Full system performance summary",
      type: "PDF",
      color: "blue"
    },
    {
      title: "AI Prediction Report",
      desc: "Machine learning delay analysis",
      type: "AI",
      color: "purple"
    },
    {
      title: "Delay Analysis",
      desc: "Train delay trends & insights",
      type: "Analytics",
      color: "red"
    },
    {
      title: "Passenger Report",
      desc: "Daily passenger flow data",
      type: "CSV",
      color: "green"
    },
    {
      title: "Network Efficiency",
      desc: "Railway system performance report",
      type: "PDF",
      color: "blue"
    },
    {
      title: "Safety Report",
      desc: "Incident & safety monitoring data",
      type: "PDF",
      color: "red"
    }
  ];

  const getIcon = (type) => {
    switch (type) {
      case "PDF": return "📄";
      case "AI": return "🤖";
      case "Analytics": return "📊";
      case "CSV": return "📁";
      default: return "📄";
    }
  };

  return (
    <div className="page-container reports-page">

      {/* HEADER */}
      <div className="reports-header">

        <h1>📑 System Reports Center</h1>

        <p>Download AI-powered railway performance reports</p>

      </div>

      {/* GRID */}
      <div className="card-grid">

        {reports.map((report, index) => (

          <div key={index} className="modern-card report-card">

            <div className="report-icon">
              {getIcon(report.type)}
            </div>

            <h2>{report.title}</h2>

            <p className="report-desc">
              {report.desc}
            </p>

            <span className={`badge ${report.color}`}>
              {report.type}
            </span>

            <button className="download-btn">
              ⬇ Download
            </button>

          </div>

        ))}

      </div>

    </div>
  );
}

export default Reports;
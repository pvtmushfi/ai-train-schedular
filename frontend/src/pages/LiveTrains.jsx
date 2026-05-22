function LiveTrains() {
  const trains = [
    {
      id: 1,
      name: "Rajdhani Express",
      status: "Running",
      delay: "5 mins",
    },
    {
      id: 2,
      name: "Shatabdi Express",
      status: "On Time",
      delay: "0 mins",
    },
    {
      id: 3,
      name: "Duronto Express",
      status: "Delayed",
      delay: "18 mins",
    },
  ];

  const getStatusClass = (status) => {
    switch (status) {
      case "Running":
        return "status running";
      case "On Time":
        return "status ontime";
      case "Delayed":
        return "status delayed";
      default:
        return "status";
    }
  };

  return (
    <div className="page-container live-page">

      {/* HEADER */}
      <div className="live-header">
        <h1>🚆 Live Train Tracking</h1>
        <p>Real-time status of active trains across network</p>
      </div>

      {/* GRID */}
      <div className="card-grid">

        {trains.map((train) => (
          <div key={train.id} className="modern-card live-card">

            {/* NAME */}
            <h2>{train.name}</h2>

            {/* STATUS */}
            <div className={getStatusClass(train.status)}>
              {train.status}
            </div>

            {/* DETAILS */}
            <div className="live-details">
              <p>
                ⏱ Delay: <b>{train.delay}</b>
              </p>
            </div>

          </div>
        ))}

      </div>
    </div>
  );
}

export default LiveTrains;
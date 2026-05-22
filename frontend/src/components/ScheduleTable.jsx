function ScheduleTable({
  schedules,
  deleteSchedule,
  setEditingTrain,
}) {
  return (
    <div className="table-container">
      <div className="table-header">
        <h2>Live Train Schedule</h2>
      </div>

      <table>
        <thead>
          <tr>
            <th>Train</th>
            <th>Source</th>
            <th>Destination</th>
            <th>Time</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {schedules.map((train) => (
            <tr key={train.id}>
              <td>{train.train_name}</td>

              <td>{train.source}</td>

              <td>{train.destination}</td>

              <td>{train.time}</td>

              <td>{train.status}</td>

              <td>
                <button
                  className="edit-btn"
                  onClick={() =>
                    setEditingTrain(train)
                  }
                >
                  Edit
                </button>

                <button
                  className="delete-btn"
                  onClick={() =>
                    deleteSchedule(train.id)
                  }
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ScheduleTable;
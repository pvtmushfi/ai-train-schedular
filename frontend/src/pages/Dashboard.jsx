import { useEffect, useState } from "react";

import AIPrediction from "../components/AIPrediction";
import TrainForm from "../components/TrainForm";
import ScheduleTable from "../components/ScheduleTable";
import StatsCard from "../components/StatsCard";
import SearchBar from "../components/SearchBar";

import { getSchedules, addTrain } from "../services/api";

function Dashboard() {
  const [schedules, setSchedules] = useState([]);
  const [editingTrain, setEditingTrain] = useState(null);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetchSchedules();
  }, []);

  /* =========================
     FETCH TRAINS
  ========================= */
  const fetchSchedules = async () => {
    const data = await getSchedules();
    setSchedules(data);
  };

  /* =========================
     ADD TRAIN
  ========================= */
  const addSchedule = async (newTrain) => {
    await addTrain(newTrain);
    fetchSchedules();
  };

  /* =========================
     DELETE TRAIN
  ========================= */
  const deleteSchedule = (id) => {
    const filtered = schedules.filter(
      (train) => train.id !== id
    );
    setSchedules(filtered);
  };

  /* =========================
     UPDATE TRAIN
  ========================= */
  const updateSchedule = (updatedTrain) => {
    const updatedList = schedules.map((train) =>
      train.id === updatedTrain.id ? updatedTrain : train
    );

    setSchedules(updatedList);
    setEditingTrain(null);
  };

  /* =========================
     SEARCH TRAIN
  ========================= */
  const filteredSchedules = schedules.filter((train) =>
    train.train_name?.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="dashboard">

      {/* HERO */}
      <div className="dashboard-hero modern-hero">
        <h1>🚆 AI Train Scheduling Dashboard</h1>
        <p>
          Smart railway scheduling platform powered by AI for real-time tracking,
          optimization, and predictions.
        </p>
      </div>

      {/* MAIN CONTAINER */}
      <div className="container">

        {/* STATS */}
        <div className="stats-grid modern-stats">
          <StatsCard title="Total Trains" value={schedules.length} />
          <StatsCard title="Running" value="48" />
          <StatsCard title="Delayed" value="6" />
          <StatsCard title="AI Accuracy" value="94%" />
        </div>

        {/* SEARCH */}
        <div className="section-card">
          <h2>🔍 Search Trains</h2>

          <SearchBar search={search} setSearch={setSearch} />
        </div>

        {/* FORM + AI */}
        <div className="dashboard-grid">

          {/* FORM */}
          <div className="section-card">
            <h2>➕ Add / Edit Train</h2>

            <TrainForm
              addSchedule={addSchedule}
              editingTrain={editingTrain}
              updateSchedule={updateSchedule}
            />
          </div>

          {/* AI PANEL */}
          <div className="info-card">
            <h2>🤖 AI Insights</h2>

            <p>
              AI analyzes train delays, predicts congestion, and optimizes
              routes in real time for better efficiency.
            </p>

            <div className="ai-badge">AI ACTIVE</div>

            <AIPrediction />
          </div>

        </div>

        {/* TABLE */}
        <div className="section-card">
          <h2>🚉 Train Schedule</h2>

          <ScheduleTable
            schedules={filteredSchedules}
            deleteSchedule={deleteSchedule}
            setEditingTrain={setEditingTrain}
          />
        </div>

      </div>
    </div>
  );
}

export default Dashboard;
function StatsCard({ title, value }) {
  return (
    <div className="card">
      <h3>{title}</h3>

      <p>{value}</p>

      <span className="ai-badge">
        AI Powered
      </span>
    </div>
  );
}

export default StatsCard;
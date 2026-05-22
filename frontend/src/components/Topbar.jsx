function Topbar() {
  const date = new Date();

  return (
    <div className="topbar">
      <div></div>

      <div>
        {date.toLocaleDateString()} | {date.toLocaleTimeString()}
      </div>
    </div>
  );
}

export default Topbar;
import { useState } from "react";
import { predictDelay } from "../services/api";

function AIPrediction() {
  const [weather, setWeather] = useState("");
  const [traffic, setTraffic] = useState("");
  const [speed, setSpeed] = useState("");

  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handlePredict = async () => {
    try {
      setLoading(true);
      setError("");
      setResult(null);

      const data = await predictDelay(
        Number(weather),
        Number(traffic),
        Number(speed)
      );

      setResult(data);
    } catch (err) {
      console.log(err);
      setError("Prediction failed. Please check API.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="prediction-box modern-ai">

      <h2>🤖 AI Delay Prediction</h2>

      <input
        type="number"
        placeholder="Weather Impact (0-10)"
        value={weather}
        onChange={(e) => setWeather(e.target.value)}
      />

      <input
        type="number"
        placeholder="Traffic Level (0-10)"
        value={traffic}
        onChange={(e) => setTraffic(e.target.value)}
      />

      <input
        type="number"
        placeholder="Train Speed (km/h)"
        value={speed}
        onChange={(e) => setSpeed(e.target.value)}
      />

      <button onClick={handlePredict} disabled={loading}>
        {loading ? "Predicting..." : "Predict Delay"}
      </button>

      {/* ERROR */}
      {error && (
        <div className="ai-error">
          ❌ {error}
        </div>
      )}

      {/* RESULT */}
      {result && (
        <div className="modern-result">

          <h3 className="prediction-title">
            🚨 Predicted Delay:{" "}
            <span className="prediction-value">
              {result.predicted_delay} min
            </span>
          </h3>

          <p className="risk-text">
            ⚠ Risk Level:{" "}
            <span className="risk-value">
              {result.risk}
            </span>
          </p>

        </div>
      )}

    </div>
  );
}

export default AIPrediction;
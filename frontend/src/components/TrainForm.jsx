import { useEffect, useState } from "react";

function TrainForm({
  addSchedule,
  editingTrain,
  updateSchedule,
}) {
  const [trainName, setTrainName] =
    useState("");

  const [source, setSource] = useState("");

  const [destination, setDestination] =
    useState("");

  const [time, setTime] = useState("");

  const [status, setStatus] = useState("");

  useEffect(() => {
    if (editingTrain) {
      setTrainName(editingTrain.train_name);

      setSource(editingTrain.source);

      setDestination(
        editingTrain.destination
      );

      setTime(editingTrain.time);

      setStatus(editingTrain.status);
    }
  }, [editingTrain]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const trainData = {
      train_name: trainName,
      source,
      destination,
      time,
      status,
    };

    if (editingTrain) {
      updateSchedule(trainData);
    } else {
      await addSchedule(trainData);
    }

    setTrainName("");

    setSource("");

    setDestination("");

    setTime("");

    setStatus("");
  };

  return (
    <form
      className="train-form"
      onSubmit={handleSubmit}
    >
      <input
        type="text"
        placeholder="Train Name"
        value={trainName}
        onChange={(e) =>
          setTrainName(e.target.value)
        }
        required
      />

      <input
        type="text"
        placeholder="Source"
        value={source}
        onChange={(e) =>
          setSource(e.target.value)
        }
        required
      />

      <input
        type="text"
        placeholder="Destination"
        value={destination}
        onChange={(e) =>
          setDestination(e.target.value)
        }
        required
      />

      <input
        type="time"
        value={time}
        onChange={(e) =>
          setTime(e.target.value)
        }
        required
      />

      <select
        value={status}
        onChange={(e) =>
          setStatus(e.target.value)
        }
        required
      >
        <option value="">
          Select Status
        </option>

        <option value="On Time">
          On Time
        </option>

        <option value="Delayed">
          Delayed
        </option>

        <option value="Cancelled">
          Cancelled
        </option>
      </select>

      <button type="submit">
        Add Train
      </button>
    </form>
  );
}

export default TrainForm;
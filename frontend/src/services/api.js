import axios from "axios";

const BASE_URL = "http://127.0.0.1:8000";

/* =========================
   REGISTER USER
========================= */

export const registerUser = async (userData) => {
  try {
    const response = await axios.post(`${BASE_URL}/register`, userData);

    return response.data;
  } catch (error) {
    console.log("Register Error", error.response?.data);
  }
};

/* =========================
   LOGIN USER
========================= */

export const loginUser = async (userData) => {
  try {
    const response = await axios.post(`${BASE_URL}/login`, userData);

    return response.data;
  } catch (error) {
    console.log("Login Error", error.response?.data);

    return null;
  }
};

/* =========================
   GET ALL TRAINS
========================= */

export const getSchedules = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/trains`);

    return response.data;
  } catch (error) {
    console.log("Fetch Train Error", error.response?.data);

    return [];
  }
};

/* =========================
   ADD TRAIN
========================= */

export const addTrain = async (trainData) => {
  try {
    const response = await axios.post(`${BASE_URL}/add-train`, trainData);

    return response.data;
  } catch (error) {
    console.log("Add Train Error", error.response?.data);
  }
};

/* =========================
   AI DELAY PREDICTION
========================= */

export const predictDelay = async (weather, traffic, speed) => {
  try {
    const response = await axios.get(`${BASE_URL}/predict-delay`, {
      params: {
        weather,
        traffic,
        speed,
      },
    });

    return response.data;
  } catch (error) {
    console.log("Prediction Error", error.response?.data);
  }
};

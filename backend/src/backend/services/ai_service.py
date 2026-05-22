from sklearn.linear_model import LinearRegression

import numpy as np

# TRAINING DATA

X = np.array([
    [1, 20, 60],
    [2, 35, 50],
    [3, 50, 40],
    [1, 10, 80],
    [4, 70, 30],
])

# Delay Minutes

y = np.array([5, 10, 20, 2, 35])

# CREATE MODEL

model = LinearRegression()

# TRAIN MODEL

model.fit(X, y)

# AI FUNCTION

def predict_delay(
    weather,
    traffic,
    speed
):

    prediction = model.predict([
        [weather, traffic, speed]
    ])

    return round(float(prediction[0]), 2)
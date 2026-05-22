from fastapi import APIRouter

from src.backend.services.ai_service import (
    predict_delay
)

router = APIRouter()

@router.get("/predict-delay")
def delay_prediction(
    weather: int,
    traffic: int,
    speed: int
):

    result = predict_delay(
        weather,
        traffic,
        speed
    )

    risk = "Low"

    if result > 20:
        risk = "High"

    elif result > 10:
        risk = "Medium"

    return {
        "predicted_delay": result,
        "risk": risk
    }
from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

from src.backend.database.db import get_db

from src.backend.models.train_model import Train

from src.backend.schemas.train_schema import TrainCreate

router = APIRouter()

# ADD TRAIN

@router.post("/add-train")
def add_train(
    train: TrainCreate,
    db: Session = Depends(get_db)
):

    new_train = Train(
        train_name=train.train_name,
        source=train.source,
        destination=train.destination,
        time=train.time,
        status=train.status
    )

    db.add(new_train)

    db.commit()

    db.refresh(new_train)

    return {
        "message": "Train Added Successfully",
        "data": {
            "id": new_train.id,
            "train_name": new_train.train_name,
            "source": new_train.source,
            "destination": new_train.destination,
            "time": new_train.time,
            "status": new_train.status
        }
    }

# GET ALL TRAINS

@router.get("/trains")
def get_trains(db: Session = Depends(get_db)):

    trains = db.query(Train).all()

    return trains
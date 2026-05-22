from pydantic import BaseModel

class TrainCreate(BaseModel):
    train_name: str
    source: str
    destination: str
    time: str
    status: str
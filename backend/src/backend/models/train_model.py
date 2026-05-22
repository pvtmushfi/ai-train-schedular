from sqlalchemy import Column, Integer, String

from src.backend.database.db import Base

class Train(Base):
    __tablename__ = "trains"

    id = Column(Integer, primary_key=True, index=True)

    train_name = Column(String(100))

    source = Column(String(100))

    destination = Column(String(100))

    time = Column(String(50))

    status = Column(String(50))
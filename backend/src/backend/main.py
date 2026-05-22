from fastapi import FastAPI
from src.backend.routes.ai_routes import (router as ai_router)
from fastapi.middleware.cors import CORSMiddleware

from src.backend.database.db import engine, Base

from src.backend.routes.auth_routes import router as auth_router

from src.backend.routes.train_routes import router as train_router

Base.metadata.create_all(bind=engine)

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
app.include_router(ai_router)
app.include_router(auth_router)

app.include_router(train_router)

@app.get("/")
def home():
    return {
        "message": "Backend Running"
    }
from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from fastapi import HTTPException
from src.backend.database.db import get_db
from src.backend.models.user_model import User
from src.backend.schemas.user_schema import UserCreate
from src.backend.schemas.user_schema import ( UserCreate,UserLogin)

router = APIRouter()

@router.post("/register")
def register(user: UserCreate, db: Session = Depends(get_db)):

    new_user = User(
        name=user.name,
        email=user.email,
        password=user.password
    )

    db.add(new_user)

    db.commit()

    return {
        "message": "User Registered Successfully"
    }
@router.post("/login")
def login(
    user: UserLogin,
    db: Session = Depends(get_db)
):

    existing_user = db.query(User).filter(
        User.email == user.email
    ).first()

    if not existing_user:
        raise HTTPException(
            status_code=400,
            detail="User Not Found"
        )

    if existing_user.password != user.password:
        raise HTTPException(
            status_code=400,
            detail="Invalid Password"
        )

    return {
        "message": "Login Successful",
        "user": {
            "id": existing_user.id,
            "name": existing_user.name,
            "email": existing_user.email
        }
    }
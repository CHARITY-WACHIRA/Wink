from flask_bcrypt import generate_password_hash
from flask_jwt_extended import create_access_token
from sqlalchemy.exc import IntegrityError
from ..models import User
from .. import db

def register_user(data):
    # Check if user with this email already exists
    existing_user = User.query.filter_by(email=data['email']).first()
    if existing_user:
        return {
            "message": "A user with this email already exists",
            "status": 409  # Conflict status code
        }
    
    # Check if username is already taken
    existing_username = User.query.filter_by(username=data['username']).first()
    if existing_username:
        return {
            "message": "This username is already taken",
            "status": 409  # Conflict status code
        }

    try:
        hashed_password = generate_password_hash(data['password']).decode('utf-8')
        new_user = User(
            username=data['username'],
            email=data['email'],
            password=hashed_password,
            gender=data.get('gender'),
            preferences=data.get('preferences')
        )
        db.session.add(new_user)
        db.session.commit()
        access_token = create_access_token(identity=new_user.id)
        return {
            "message": "User registered successfully",
            "user": {"id": new_user.id, "username": new_user.username, "email": new_user.email},
            "token": access_token,
            "status": 201
        }
    except IntegrityError as e:
        db.session.rollback()
        # Log the full error for debugging
        print(f"IntegrityError: {str(e)}")
        return {
            "message": "An error occurred. The username or email might already be taken.",
            "status": 409
        }
    except Exception as e:
        db.session.rollback()
        # Log the full error for debugging
        print(f"Unexpected error: {str(e)}")
        return {
            "message": "An unexpected error occurred",
            "status": 500
        }

def authenticate_user(data):
    try:
        user = User.query.filter_by(username=data['username']).first()
        if user and check_password_hash(user.password, data['password']):
            access_token = create_access_token(identity=user.id)
            return {
                "message": "Login successful",
                "user": {"id": user.id, "username": user.username, "email": user.email},
                "token": access_token,
                "status": 200
            }
        return {"message": "Invalid credentials", "status": 401}
    except Exception as e:
        print(f"Unexpected error during authentication: {str(e)}")
        return {"message": "An unexpected error occurred", "status": 500}

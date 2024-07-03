from werkzeug.security import generate_password_hash, check_password_hash
from ..models import User
from .. import db

def register_user(data):
    hashed_password = generate_password_hash(data['password'], method='pbkdf2:sha256')
    new_user = User(username=data['username'], password=hashed_password, gender=data['gender'], preferences=data['preferences'])
    db.session.add(new_user)
    db.session.commit()
    return new_user

def authenticate_user(data):
    user = User.query.filter_by(username=data['username']).first()
    if user and check_password_hash(user.password, data['password']):
        return user
    return None

# app.py

from flask import Flask, request, jsonify
from flask_jwt_extended import JWTManager, create_access_token, jwt_required, get_jwt_identity
from flask_cors import CORS
from models import db, User, Profile, Swipe

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///wink.db'  # Change this to your database URI
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.config['JWT_SECRET_KEY'] = 'your_jwt_secret_key'  # Change this to a secure random key
app.config['JWT_ACCESS_TOKEN_EXPIRES'] = timedelta(days=1)  # Example: token expires in 1 day

db.init_app(app)
jwt = JWTManager(app)
CORS(app)  # Enable CORS for development purposes, adjust as needed for production

# Create tables based on models
with app.app_context():
    db.create_all()

# Routes
@app.route('/api/register', methods=['POST'])
def register():
    data = request.get_json()
    username = data.get('username')
    email = data.get('email')
    password = data.get('password')

    if not username or not email or not password:
        return jsonify(message='Missing username, email, or password'), 400
    
    existing_user = User.query.filter_by(email=email).first()
    if existing_user:
        return jsonify(message='Email already registered'), 409

    new_user = User(username=username, email=email)
    new_user.set_password(password)
    db.session.add(new_user)
    db.session.commit()

    access_token = create_access_token(identity=new_user.id)
    return jsonify(access_token=access_token), 201

@app.route('/api/login', methods=['POST'])
def login():
    data = request.get_json()
    email = data.get('email')
    password = data.get('password')

    user = User.query.filter_by(email=email).first()
    if not user or not user.check_password(password):
        return jsonify(message='Invalid email or password'), 401

    access_token = create_access_token(identity=user.id)
    return jsonify(access_token=access_token), 200

@app.route('/api/profiles', methods=['GET'])
@jwt_required()
def get_profiles():
    current_user_id = get_jwt_identity()
    profiles = Profile.query.filter(Profile.user_id != current_user_id).all()
    return jsonify([profile.to_dict() for profile in profiles]), 200

@app.route('/api/swipe/<int:profile_id>', methods=['POST'])
@jwt_required()
def swipe(profile_id):
    current_user_id = get_jwt_identity()
    action = request.json.get('action')  # 'like' or 'dislike'

    profile = Profile.query.get(profile_id)
    if not profile:
        return jsonify(message='Profile not found'), 404
    
    # Record the swipe action
    swipe = Swipe(user_id=current_user_id, profile_id=profile_id, action=action)
    db.session.add(swipe)
    db.session.commit()

    return jsonify(message=f'{action.capitalize()}d profile {profile_id}'), 200

if __name__ == '__main__':
    app.run(debug=True)

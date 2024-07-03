from flask import Blueprint, request, jsonify
from ..services import auth_service

bp = Blueprint('auth', __name__, url_prefix='/auth')

@bp.route('/register', methods=['POST'])
def register():
    data = request.json
    new_user = auth_service.register_user(data)
    return jsonify({"message": "User registered successfully", "user_id": new_user.id}), 201

@bp.route('/login', methods=['POST'])
def login():
    data = request.json
    user = auth_service.authenticate_user(data)
    if user:
        return jsonify({"message": "Login successful", "user_id": user.id}), 200
    return jsonify({"message": "Invalid credentials"}), 401

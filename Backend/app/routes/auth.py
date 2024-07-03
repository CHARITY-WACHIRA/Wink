from flask import Blueprint, request, jsonify
from ..services import auth_service

bp = Blueprint('auth', __name__, url_prefix='/auth')

@bp.route('/register', methods=['POST'])
def register():
    data = request.json
    user = auth_service.register_user(data)
    return jsonify({"message": "User registered", "user": user.id}), 201

@bp.route('/login', methods=['POST'])
def login():
    data = request.json
    user = auth_service.login_user(data)
    if user:
        return jsonify({"message": "Login successful", "user": user.id}), 200
    return jsonify({"message": "Invalid credentials"}), 401

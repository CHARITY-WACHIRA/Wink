from flask import Blueprint, request, jsonify
from ..services import auth_service

bp = Blueprint('auth', __name__, url_prefix='/auth')

@bp.route('/register', methods=['POST'])
def register():
    data = request.json
    result = auth_service.register_user(data)
    return jsonify(result), result['status']

@bp.route('/login', methods=['POST'])
def login():
    try:
        data = request.json
        result = auth_service.authenticate_user(data)
        return jsonify(result), result['status']
    except Exception as e:
        print(f"Error in /login route: {str(e)}")
        return jsonify({"message": "An error occurred"}), 500

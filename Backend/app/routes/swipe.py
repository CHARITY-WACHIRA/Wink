from flask import Blueprint, request, jsonify
from ..services import swipe_service

bp = Blueprint('swipe', __name__, url_prefix='/swipe')

@bp.route('/', methods=['POST'])
def swipe():
    data = request.json
    swipe_service.record_swipe(data)
    match = swipe_service.check_match(data)
    if match:
        return jsonify({"message": "It's a match!"}), 200
    return jsonify({"message": "Swipe recorded"}), 200

@bp.route('/matches/<int:user_id>', methods=['GET'])
def get_matches(user_id):
    matches = swipe_service.get_user_matches(user_id)
    return jsonify({"matches": matches}), 200

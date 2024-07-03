from flask import Blueprint, request, jsonify
from ..services import profile_service

bp = Blueprint('profile', __name__, url_prefix='/profile')

@bp.route('/<int:user_id>', methods=['POST', 'PUT'])
def create_or_update_profile(user_id):
    data = request.json
    profile = profile_service.create_or_update_profile(user_id, data)
    return jsonify({"message": "Profile updated", "profile": profile.id}), 200

@bp.route('/<int:user_id>', methods=['GET'])
def get_profile(user_id):
    profile = profile_service.get_profile(user_id)
    if profile:
        return jsonify({
            "name": profile.name,
            "age": profile.age,
            "gender": profile.gender,
            "occupation": profile.occupation,
            "bio": profile.bio,
            "photos": profile.photos
        }), 200
    return jsonify({"message": "Profile not found"}), 404

@bp.route('/', methods=['GET'])
def get_all_profiles():
    profiles = profile_service.get_all_profiles()
    profile_list = [{
        "user_id": profile.user_id,
        "name": profile.name,
        "age": profile.age,
        "gender": profile.gender,
        "occupation": profile.occupation,
        "bio": profile.bio,
        "photos": profile.photos
    } for profile in profiles]
    return jsonify({"profiles": profile_list}), 200

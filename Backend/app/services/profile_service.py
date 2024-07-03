from ..models import Profile
from .. import db

def create_or_update_profile(user_id, data):
    profile = Profile.query.filter_by(user_id=user_id).first()
    if profile:
        profile.name = data['name']
        profile.age = data['age']
        profile.gender = data['gender']
        profile.occupation = data['occupation']
        profile.bio = data['bio']
        profile.photos = data['photos']
    else:
        profile = Profile(user_id=user_id, **data)
        db.session.add(profile)
    db.session.commit()
    return profile

def get_profile(user_id):
    profile = Profile.query.filter_by(user_id=user_id).first()
    return profile

def get_all_profiles():
    profiles = Profile.query.all()
    return profiles

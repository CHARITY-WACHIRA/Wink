from app import create_app, db
from app.models import User, Profile
from flask_bcrypt import Bcrypt

def seed_data():
    app = create_app()
    bcrypt = Bcrypt(app)  
    app.app_context().push()

    db.drop_all()
    db.create_all()

    # Creating sample users
    users = [
        {"username": "john_doe", "password": "password123", "gender": "male", "preferences": "female"},
        {"username": "jane_smith", "password": "password123", "gender": "female", "preferences": "male"},
        {"username": "alice_jones", "password": "password123", "gender": "female", "preferences": "male"},
        {"username": "bob_brown", "password": "password123", "gender": "male", "preferences": "female"}
    ]

    for user_data in users:
        hashed_password = bcrypt.generate_password_hash(user_data['password']).decode('utf-8')
        user = User(
            username=user_data['username'],
            password=hashed_password,
            gender=user_data['gender'],
            preferences=user_data['preferences']
        )
        db.session.add(user)
        db.session.commit()

        # Creating sample profiles for each user
        profile_data = {
            "john_doe": {"name": "John Doe", "age": 30, "gender": "male", "occupation": "Software Developer", "bio": "Love coding and coffee!", "photos": "http://example.com/photos/john.jpg"},
            "jane_smith": {"name": "Jane Smith", "age": 28, "gender": "female", "occupation": "Graphic Designer", "bio": "Passionate about design and art.", "photos": "http://example.com/photos/jane.jpg"},
            "alice_jones": {"name": "Alice Jones", "age": 25, "gender": "female", "occupation": "Marketing Specialist", "bio": "Creative and strategic thinker.", "photos": "http://example.com/photos/alice.jpg"},
            "bob_brown": {"name": "Bob Brown", "age": 35, "gender": "male", "occupation": "Project Manager", "bio": "Leader with a vision.", "photos": "http://example.com/photos/bob.jpg"}
        }

        profile_info = profile_data[user_data['username']]
        profile = Profile(
            user_id=user.id,
            name=profile_info['name'],
            age=profile_info['age'],
            gender=profile_info['gender'],
            occupation=profile_info['occupation'],
            bio=profile_info['bio'],
            photos=profile_info['photos']
        )
        db.session.add(profile)
    
    db.session.commit()

if __name__ == '__main__':
    seed_data()

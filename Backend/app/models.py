from . import db
from datetime import datetime

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(80), unique=True, nullable=False)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(200), nullable=False)  # Adjusted for bcrypt hash length
    gender = db.Column(db.String(10), nullable=True)  # Changed to nullable
    preferences = db.Column(db.String(100), nullable=True)  # Changed to nullable
    profile = db.relationship('Profile', backref='user', uselist=False)
    swipes = db.relationship('Swipe', backref='user', lazy='dynamic')
    matches1 = db.relationship('Match', foreign_keys='Match.user1_id', backref='user1', lazy='dynamic')
    matches2 = db.relationship('Match', foreign_keys='Match.user2_id', backref='user2', lazy='dynamic')
    messages = db.relationship('Message', backref='sender', lazy='dynamic')

    def __repr__(self):
        return f'<User {self.username}>'

class Profile(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'), nullable=False)
    name = db.Column(db.String(80), nullable=False)
    age = db.Column(db.Integer, nullable=False)
    gender = db.Column(db.String(10), nullable=False)
    occupation = db.Column(db.String(80), nullable=False)
    bio = db.Column(db.String(500), nullable=True)
    photos = db.Column(db.String(500), nullable=True)

    def __repr__(self):
        return f'<Profile {self.name}>'

class Swipe(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'), nullable=False)
    target_id = db.Column(db.Integer, nullable=False)
    like = db.Column(db.Boolean, nullable=False)
    timestamp = db.Column(db.DateTime, default=datetime.utcnow)

    def __repr__(self):
        return f'<Swipe {self.user_id} -> {self.target_id}>'

class Match(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    user1_id = db.Column(db.Integer, db.ForeignKey('user.id'), nullable=False)
    user2_id = db.Column(db.Integer, db.ForeignKey('user.id'), nullable=False)
    timestamp = db.Column(db.DateTime, default=datetime.utcnow)
    messages = db.relationship('Message', backref='match', lazy='dynamic')

    def __repr__(self):
        return f'<Match {self.user1_id} <-> {self.user2_id}>'

class Message(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    match_id = db.Column(db.Integer, db.ForeignKey('match.id'), nullable=False)
    sender_id = db.Column(db.Integer, db.ForeignKey('user.id'), nullable=False)
    content = db.Column(db.String(500), nullable=False)
    timestamp = db.Column(db.DateTime, default=datetime.utcnow)

    def __repr__(self):
        return f'<Message {self.id} in Match {self.match_id}>'
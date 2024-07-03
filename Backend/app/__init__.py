from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from config import Config

db = SQLAlchemy()

def create_app():
    app = Flask(__name__)
    app.config.from_object(Config)
    
    db.init_app(app)
    
    with app.app_context():
        from .routes import auth, swipe, chat
        app.register_blueprint(auth.bp)
        app.register_blueprint(swipe.bp)
        app.register_blueprint(chat.bp)
        
        db.create_all()
    
    return app

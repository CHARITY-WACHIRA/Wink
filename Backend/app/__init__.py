from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from config import Config
from flask_migrate import Migrate
from flask_bcrypt import Bcrypt

db = SQLAlchemy()
migrate = Migrate()
bcrypt = Bcrypt()

def create_app():
    app = Flask(__name__)
    app.config.from_object(Config)
    
    db.init_app(app)
    migrate.init_app(app, db)
    bcrypt.init_app(app)
    
    
    with app.app_context():
        from .routes import auth, profile, swipe, chat
        app.register_blueprint(auth.bp)
        app.register_blueprint(profile.bp)
        app.register_blueprint(swipe.bp)
        app.register_blueprint(chat.bp)
        
        db.create_all()
    
    return app

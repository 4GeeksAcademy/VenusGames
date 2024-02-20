from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    full_name = db.Column(db.String(120), unique=True, nullable=False)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(250), unique=False, nullable=False)
    avatar = db.Column(db.String(500), unique=False, nullable=True)
    admin = db.Column(db.Boolean(), unique=False, nullable=False, default=False)

        

    def __repr__(self):
        return f'<User {self.email}>'

    def serialize(self):
        return {
            "id": self.id,
            "full_name": self.full_name,
            "email": self.email,
            "avatar": self.avatar,
            "admin": self.admin,
            # do not serialize the password, its a security breach
        }

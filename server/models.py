from flask_sqlalchemy import SQLAlchemy
from sqlalchemy.orm import validates
from sqlalchemy_serializer import SerializerMixin
from datetime import datetime


db = SQLAlchemy()


from datetime import datetime


# User Model
class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(100), unique=True, nullable=False)
    contacts = db.Column(db.String(100))
    email = db.Column(db.String(120), unique=True, nullable=False)
    password_hash = db.Column(db.String(100), nullable=False)
    location = db.Column(db.String(100))

    # Relationship with Business (One-to-Many)
    businesses = db.relationship('Business', backref='owner', lazy=True)

    # Relationship with Review (One-to-Many)
    reviews = db.relationship('Review', backref='user', lazy=True)

    def __init__(self, username, contacts, email, password, location):
        self.username = username
        self.contacts = contacts
        self.email = email
        self.set_password(password)
        self.location = location

    @validates('email')
    def validate_email(self, key, email):
        if "@" not in email:
            raise ValueError("Invalid email address")
        return email

# Business Model
class Business(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'), nullable=False)
    rating = db.Column(db.Float)
    comments = db.Column(db.Text)
    products = db.Column(db.String(200))

    # Relationship with User (Many-to-One)
    user = db.relationship('User', back_populates='businesses')

    # Relationship with Review (One-to-Many)
    reviews = db.relationship('Review', backref='business', lazy=True)

    def __init__(self, user_id, rating, comments, products):
        self.user_id = user_id
        self.rating = rating
        self.comments = comments
        self.products = products

    @validates('rating')
    def validate_rating(self, key, rating):
        if rating < 1 or rating > 5:
            raise ValueError("Rating must be between 1 and 5")
        return rating

# Review Model
class Review(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'), nullable=False)
    business_id = db.Column(db.Integer, db.ForeignKey('business.id'), nullable=False)
    review_date = db.Column(db.DateTime, default=datetime.utcnow)
    review_text = db.Column(db.Text)

    # Relationship with User (Many-to-One)
    user = db.relationship('User', back_populates='reviews')

    # Relationship with Business (Many-to-One)
    business = db.relationship('Business', back_populates='reviews')

    def __init__(self, user_id, business_id, review_text):
        self.user_id = user_id
        self.business_id = business_id
        self.review_text = review_text

# Product Model
class Product(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(200), unique=True, nullable=False)
    description = db.Column(db.Text)
    price = db.Column(db.Float)
    category = db.Column(db.String(50))

    def __init__(self, name, description, price, category):
        self.name = name
        self.description = description
        self.price = price
        self.category = category

    @validates('price')
    def validate_price(self, key, price):
        if price < 0:
            raise ValueError("Price cannot be negative")
        return price

from flask_sqlalchemy import SQLAlchemy
from sqlalchemy.orm import validates
from sqlalchemy_serializer import SerializerMixin
from datetime import datetime


db = SQLAlchemy()



# User Model
class User(db.Model):
    __tablename__ = 'users'
    
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(100), unique=True, nullable=False)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(120), unique=True, nullable=False)
    contacts = db.Column(db.String(100))
    owner = db.Column(db.Boolean, nullable=False)

    # Relationship with Business(owner_id) to user (One-to-Many)
    businesses = db.relationship('Business', backref='user', lazy=True)

    # Relationship with Review (One-to-Many)
    reviews = db.relationship('Review', backref='user', lazy=True)

    

    @validates('email')
    def validate_email(self, key, email):
        if "@" not in email:
            raise ValueError("Invalid email address")
        return email

# Business Model
class Business(db.Model):
    __tablename__ = 'businesses'

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String, unique=True)
    owner_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)
    hours_open = db.Column(db.String)
    contacts = db.Column(db.String)
    

    
    # Relationship with Review (One-to-Many)
    reviews = db.relationship('Review', backref='business', lazy=True)

  

    

# Review Model
class Review(db.Model):
    __tablename__ = 'reviews'
    
    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)
    business_id = db.Column(db.Integer, db.ForeignKey('businesses.id'), nullable=False)
    comment = db.Column(db.string, nullable=False)
    rating = db.Column(db.Float)

    # Relationship with User (Many-to-Many)
    user = db.relationship('User', back_populates='reviews')

    # Relationship with Business (Many-to-Many)
    business = db.relationship('Business', back_populates='reviews')

    

# Product Model
class Product(db.Model):
    __tablename__ = 'products'

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(200), unique=True, nullable=False)
    description = db.Column(db.Text)
    price = db.Column(db.Float)
    # Relationship with business (One-to-Many)
    business_id = db.Column(db.Integer,  db.ForeignKey('businesses.id'))

   

    @validates('price')
    def validate_price(self, key, price):
        if price < 0:
            raise ValueError("Price cannot be negative")
        return price

class BusinessImg(db.Model):
    __tablename__ = 'businessimgs'
    
    id = db.Column(db.Integer, primary_key=True)
    businessimgurl = db.Column(db.String, nullable=False)
    business_id = db.Column(db.Integer, db.ForeignKey('businesses.id'), nullable=False)



class ProductImg(db.Model):
    
    __tablename__ = 'productimgs'

    id = db.Column(db.Integer)
    product_id = db.Column(db.Integer, db.ForeignKey('businesses.id'), nullable=False)
    productimgurl = db.Column(db.String)


    
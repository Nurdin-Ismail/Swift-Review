from flask_sqlalchemy import SQLAlchemy
from sqlalchemy.orm import validates
from sqlalchemy_serializer import SerializerMixin
from datetime import datetime


db = SQLAlchemy()



# User Model
class User(db.Model, SerializerMixin):
    __tablename__ = 'users'
    
    serialize_rules = ('-reviews.users',)
    
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(100), unique=True, nullable=False)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(120), unique=True, nullable=False)
    contacts = db.Column(db.String(100))
    owner = db.Column(db.Boolean, nullable=False)
    created_at = db.Column(db.DateTime, server_default=db.func.now())
    updated_at = db.Column(db.DateTime, onupdate=db.func.now())

    # Relationship with Business(owner_id) to user (One-to-Many)
    businesses = db.relationship('Business', backref='user', lazy=True)

    # Relationship with Review (One-to-Many)
    reviews = db.relationship('Review', back_populates='user')
    

    @validates('email')
    def validate_email(self, key, email):
        if "@" not in email:
            raise ValueError("Invalid email address")
        return email

# Business Model
class Business(db.Model, SerializerMixin):
    __tablename__ = 'businesses'
    
    serialize_rules = ('-reviews.business',)

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String, unique=True)
    category = db.Column(db.String)
    sub_category = db.Column(db.String)
    owner_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)
    hours_open = db.Column(db.String)
    contacts = db.Column(db.String)
    poster = db.Column(db.String)
    created_at = db.Column(db.DateTime, server_default=db.func.now())
    updated_at = db.Column(db.DateTime, onupdate=db.func.now())

    products = db.relationship('Product', backref='business')
    image = db.relationship('BusinessImg', backref='business')
    # Relationship with Review (One-to-Many)
    reviews = db.relationship('Review', back_populates='game')
  

    

# Review Model
class Review(db.Model, SerializerMixin):
    __tablename__ = 'reviews'
    
    serialize_rules = ('-business.reviews', '-user.reviews')
    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)
    business_id = db.Column(db.Integer, db.ForeignKey('businesses.id'), nullable=False)
    comment = db.Column(db.String, nullable=False)
    rating = db.Column(db.Float)

    # Relationship with User (Many-to-Many)
    user = db.relationship('User', back_populates='reviews')

    # Relationship with Business (Many-to-Many)
    business = db.relationship('Business', back_populates='reviews')
    
    

# Product Model
class Product(db.Model, SerializerMixin):
    __tablename__ = 'products'

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(200), unique=True, nullable=False)
    description = db.Column(db.Text)
    price = db.Column(db.Float)
    poster = db.Column(db.String)

    # Relationship with business (One-to-Many)
    business_id = db.Column(db.Integer,  db.ForeignKey('businesses.id'))
    created_at = db.Column(db.DateTime, server_default=db.func.now())
    updated_at = db.Column(db.DateTime, onupdate=db.func.now())

    images = db.relationship('ProductImg', backref='product')

    @validates('price')
    def validate_price(self, key, price):
        if price < 0:
            raise ValueError("Price cannot be negative")
        return price

class BusinessImg(db.Model, SerializerMixin):
    __tablename__ = 'businessimgs'
    
    id = db.Column(db.Integer, primary_key=True)
    businessimgurl = db.Column(db.String, nullable=False)
    business_id = db.Column(db.Integer, db.ForeignKey('businesses.id'), nullable=False)



class ProductImg(db.Model, SerializerMixin):
    
    __tablename__ = 'productimgs'

    id = db.Column(db.Integer, primary_key=True)
    product_id = db.Column(db.Integer, db.ForeignKey('businesses.id'), nullable=False)
    productimgurl = db.Column(db.String)


    
#!/usr/bin/env python3

from flask import Flask, jsonify, request, make_response
from flask_migrate import Migrate
from flask_restful import Api, Resource, reqparse
from flask_cors import CORS
from sqlalchemy import desc, asc
import jwt
from functools import wraps
from  werkzeug.security import generate_password_hash, check_password_hash
from datetime import datetime, timedelta
import traceback


from models import db, Business, Review,Product,User, app

app.config['SECRET_KEY'] = 'mt9X8IpJIXKj5B80'
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///app.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

migrate = Migrate(app, db)

db.init_app(app)
api = Api(app)
CORS(app)

def token_required(f):
    @wraps(f)
    def decorated(*args, **kwargs):
        token = None
        if 'x-access-token' in request.headers:
            token = request.headers['x-access-token']
        if not token:
            return jsonify({'message': 'Login first. Token is missing !!'}), 401
  
        try:
            data = jwt.decode(token, app.config['SECRET_KEY'])
            user_id = data.get('id')
            current_user = User.query.filter(User.id == user_id).first()
            if not current_user:
                raise Exception("User not found")  # Raise an exception if the user is not found
        except Exception as e:
            traceback.print_exc()  # Log the exception traceback
            return jsonify({'message': 'Token is invalid !!'}), 401
        return f(current_user, *args, **kwargs)
    return decorated


@app.route('/')
def hello_world():
    return 'Hello, World!'

# Restaurant Resource
class RestaurantResource(Resource):
    
    @token_required
    def get(self, restaurant_id):
         # Retrieve restaurant by ID 
        restaurant = Business.query.get(restaurant_id)
        if restaurant:
            return {
                'name': restaurant.name,
                'category': restaurant.category,
                'sub_category': restaurant.sub_category
            }, 200
        else:
            return {'message': 'Restaurant not found'}, 404

class Restaurants(Resource):
    
    @token_required
    def get(self):
        # Retrieve a list of all restaurants
        categ = "Restaurants"
        restaurant_list = []
        for business in Business.query.filter_by(category = "Restaurants").all():
            
            restaurant_dict = {
                "id": business.id,
                "name": business.name,
                "category": business.category,
                "sub_category": business.sub_category,
                "owner_id": business.owner_id,
                "hours_open": business.hours_open,
                "contacts": business.contacts,
                "poster": business.poster,
                "location": business.location,
                "created_at": business.created_at
            }
            restaurant_list.append(restaurant_dict)
        return make_response(jsonify(restaurant_list), 200)
    
api.add_resource(Restaurants, '/restaurants')

# Sub-Category Resource
class SubCategoryResource(Resource):
    
    @token_required
    def get(self, category):
        # Retrieve restaurants by category
        restaurants = Business.query.filter_by(sub_category=category).all()
        restaurant_list = []
        for restauranto in Business.query.filter_by(sub_category=category).all():
            restaurant_dict = restauranto.to_dict()
            restaurant_list.append(restaurant_dict)
        return make_response(jsonify(restaurant_list), 200)
    
class Users(Resource):
    
    @token_required
    def get(self):
        list = []
        for user in User.query.all():
            user_dict = {
                "id": user.id,
                "username": user.username,
                "email": user.email,
                "contacts": user.contacts,
                "created_at": user.created_at,
                "password": user.password
            }
            list.append(user_dict)
            
        return make_response(jsonify(list), 200)    

class UserById(Resource):
    
    @token_required
    def get(self, id):
        user = User.query.filter(User.id == id).first()
        
        if user:
            user_dict ={
                "id": user.id,
                "username": user.username,
                "email": user.email,
                "contacts": user.contacts,
                "created_at": user.created_at,
                "password": user.password
            }
            
            return make_response(jsonify(user_dict), 200)
        else:
            return make_response(jsonify({"error": "User not found"}), 404)
        
    @token_required  
    def delete(self, id):
        user = User.query.filter(User.id == id).first()
        
        if user:
            db.session.delete(user)
            db.session.commit()
            
            return make_response(jsonify({"message": "User deleted successfully"}), 200)
        else:
            return make_response(jsonify({"error": "User not found"}), 404)
        
        
class Businesses(Resource):
    
    @token_required
    def get(self):
        list = []
        
        for business in Business.query.all():
            business_dict ={
                "id": business.id,
                "name": business.name,
                "category": business.category,
                "sub_category": business.sub_category,
                "owner_id": business.owner_id,
                "hours_open": business.hours_open,
                "contacts": business.contacts,
                "poster": business.poster,
                "created_at": business.created_at
            }
            list.append(business_dict)
        return make_response(jsonify(list), 200)
    
    @token_required
    def post(self):
        data = request.get_json()
        new_business = Business(
            name = data.get('name'),
            category = data.get('category'),
            sub_category = data.get('sub_category'),
            owner_id = data.get('owner_id'),
            hours_open = data.get('hours_open'),
            contacts = data.get('contacts'),
            poster = data.get('poster')
        )
        db.session.add(new_business)
        db.session.commit()
        
        new_business_dict = {
            "id": new_business.id,
            "name": new_business.name,
            "category": new_business.category,
            "sub_category": new_business.sub_category,
            "owner_id": new_business.owner_id,
            "hours_open": new_business.hours_open,
            "contacts": new_business.contacts,
            "poster": new_business.poster,
            "created_at": new_business.created_at
        }
        return make_response(jsonify(new_business_dict), 200)
    
    
class BusinessById(Resource):
    
    @token_required
    def get(self, id):
        business = Business.query.filter(Business.id == id).first()
        
        if business:
            business_dict = {
                "id": business.id,
                "name": business.name,
                "category": business.category,
                "sub_category": business.sub_category,
                "owner_id": business.owner_id,
                "hours_open": business.hours_open,
                "contacts": business.contacts,
                "poster": business.poster,
                "created_at": business.created_at
            }
            return make_response(jsonify(business_dict), 200)
        else:
            return make_response(jsonify({"error": "Business not found"}), 404)
     
    @token_required   
    def delete(self, id):
        business = Business.query.filter(Business.id == id).first()
        
        if business:
            db.session.delete(business)
            db.session.commit()
            
            return make_response(jsonify({'message': "Business deleted sucessfully"}), 200)
        else:
            return make_response(jsonify({"error": "Business not found"}), 404)
        
class Reviews(Resource):
    
    @token_required
    def get(self):
        reviews_list = []
        for review in Review.query.all():
            review_dict = {
                "id": review.id,
                "user_id": review.user_id,
                "business_id": review.business_id,
                "comment": review.comment,
                "rating": review.rating
            }
            reviews_list.append(review_dict)
        return make_response(jsonify(reviews_list), 200)
    
    @token_required
    def post(self):
        data = request.get_json()
        new_review = Review(
            user_id=data.get('user_id'),
            business_id=data.get('business_id'),
            comment=data.get('comment'),
            rating=data.get('rating')
        )
        db.session.add(new_review)
        db.session.commit()

        new_review_dict = {
            "id": new_review.id,
            "user_id": new_review.user_id,
            "business_id": new_review.business_id,
            "comment": new_review.comment,
            "rating": new_review.rating
        }
        return make_response(jsonify(new_review_dict), 200)


class ReviewById(Resource):
    
    @token_required
    def get(self, id):
        review = Review.query.filter(Review.id == id).first()

        if review:
            review_dict = {
                "id": review.id,
                "user_id": review.user_id,
                "business_id": review.business_id,
                "comment": review.comment,
                "rating": review.rating
            }

            return make_response(jsonify(review_dict), 200)
        else:
            return make_response(jsonify({"error": "Review not found"}), 404)
        
    @token_required
    def put(self, id):
        review = Review.query.filter(Review.id == id).first()

        if review:
            data = request.get_json()

            # Update review fields
            review.user_id = data.get('user_id', review.user_id)
            review.business_id = data.get('business_id', review.business_id)
            review.comment = data.get('comment', review.comment)
            review.rating = data.get('rating', review.rating)

            db.session.commit()

            updated_review_dict = {
                "id": review.id,
                "user_id": review.user_id,
                "business_id": review.business_id,
                "comment": review.comment,
                "rating": review.rating
            }

            return make_response(jsonify(updated_review_dict), 200)
        else:
            return make_response(jsonify({"error": "Review not found"}), 404)
        
    @token_required
    def delete(self, id):
        review = Review.query.filter(Review.id == id).first()

        if review:
            db.session.delete(review)
            db.session.commit()

            return make_response(jsonify({'message': "Review deleted successfully"}), 200)
        else:
            return make_response(jsonify({"error": "Review not found"}), 404)
        

class ProductListResource(Resource):
    def __init__(self):
        self.parser = reqparse.RequestParser()
        self.parser.add_argument('name', type=str)
        self.parser.add_argument('description', type=str)
        self.parser.add_argument('price', type=float)


    def get(self):
        products = Product.query.all()
        product_list = []
        for product in products:
            product_data = {
                'id': product.id,
                'name': product.name,
                'description': product.description,
                'poster': product.poster,
                'price': product.price,
            }
            product_list.append(product_data)
        return {'products': product_list}, 200
    
    @token_required
    def post(self):
        args = request.get_json()
        new_product = Product(
            name=args.get('name'),
            description=args.get('description'),
            poster=args.get('poster'),
            business_id=args.get('business_id')
        )
        db.session.add(new_product)
        db.session.commit()
        product_data = {
            'id': new_product.id,
            'name': new_product.name,
            'description': new_product.description,
            'poster': new_product.poster,
            
        }
        return product_data, 201
    
class ProductResource(Resource):
    def __init__(self):
        self.parser = reqparse.RequestParser()
        self.parser.add_argument('name', type=str)
        self.parser.add_argument('description', type=str)
        self.parser.add_argument('price', type=float)
        self.parser.add_argument('poster', type=str)
        
    @token_required
    def get(self, product_id):
        product = Product.query.get(product_id)
        if product:
            return {
                'id': product.id,
                'name': product.name,
                'description': product.description,
                'poster': product.poster,
                'price': product.price,
                'business_id': product.business_id
            }, 200
        else:
            return {'message': 'Product not found'}, 404
        
    @token_required
    def patch(self, product_id):
        args = self.parser.parse_args()
        product = Product.query.get(product_id)

        if product:
            # Update product fields if corresponding args are not None
            if args['name'] is not None:
                product.name = args['name']
            if args['description'] is not None:
                product.description = args['description']
            if args['poster'] is not None:
                product.poster = args['poster']
            if args['price'] is not None:
                product.price = args['price']

            db.session.commit()

            # Return the updated product details
            return {
                'id': product.id,
                'name': product.name,
                'description': product.description,
                'poster': product.poster,
                'price': product.price,
                'business_id': product.business_id
            }, 200
        else:
            return {'message': 'Product not found'}, 404
        
    @token_required
    def delete(self, product_id):
        product = Product.query.get(product_id)
        if product:
            db.session.delete(product)
            db.session.commit()
            return {'message': 'Product deleted successfully'}, 200
        else:
            return {'message': 'Product not found'}, 404        
        
    
class RecentReview(Resource):
    def get(self):
        reviews = Review.query.order_by(desc(Review.created_at)).limit(30)
        reviews_list = []
        for review in reviews:
            review_dict = {
                "id": review.id,
                "user_id": review.user_id,
                "business_id": review.business_id,
                "comment": review.comment,
                "rating": review.rating
            }
            reviews_list.append(review_dict)
        return make_response(jsonify(reviews_list), 200)

  
class Login(Resource):
    
    def post(self):
        
        auth = request.form

        if not auth or not auth.get('username') or not auth.get('password'):
            return make_response(
                'Could not verify',
                401,
                {'WWW-Authenticate' : 'Basic realm ="Login required !!"'}
            )
            
        user = User.query.filter(User.username == auth.get('username')).first()
        
        if not user:
            return make_response(
                'Could not verify',
                401,
                {'WWW-Authenticate' : 'Basic realm ="User does not exist !!"'}
            )
        
        if check_password_hash(user.password, auth.get('password')):
            token = jwt.encode({
                'id': user.id,
                'exp' : datetime.utcnow() + timedelta(minutes = 30)
            }, app.config['SECRET_KEY'])
    
            return make_response(jsonify({'token' : token.decode('UTF-8')}), 201)
        # returns 403 if password is wrong
        return make_response(
            'Could not verify',
            403,
            {'WWW-Authenticate' : 'Basic realm ="Wrong Password !!"'}
        )



class SignUp(Resource):
    
    def post(self):
        
        data = request.get_json()
        new_user = User(
            username = data.get('username'),
            email = data.get('email'),
            contacts = data.get('contacts'),
            created_at = data.get('created_at'),
            password = generate_password_hash(data.get('password'))
        )
        db.session.add(new_user)
        db.session.commit()
        
        new_user_dict = {
            "id": new_user.id,
            "username": new_user.username,
            "email": new_user.email,
            "contacts": new_user.contacts,
            "created_at": new_user.created_at,
            "password": new_user.password
        }
        return make_response(jsonify(new_user_dict), 200)
        
class Logout(Resource):
    
    @token_required
    def delete(self, token):
        token = None
        return token
    
class CheckSession(Resource):
    
    def get(self):
        return make_response(jsonify({'message': 'Session is active'}), 200)

# Add resources to the API
api.add_resource(RestaurantResource, '/restaurants/<int:restaurant_id>')
api.add_resource(SubCategoryResource, '/restaurants/category/<string:category>')
api.add_resource(Users, '/users')
api.add_resource(UserById, '/user/<int:id>')
api.add_resource(Businesses, '/businesses')
api.add_resource(BusinessById, '/business/<int:id>')
api.add_resource(Reviews, '/reviews')
api.add_resource(ReviewById, '/review/<int:id>')
api.add_resource(ProductResource, '/products/<int:product_id>')
api.add_resource(ProductListResource, '/products')
api.add_resource(RecentReview, '/reviews/recent_reviews')
api.add_resource(Login, '/login')
api.add_resource(SignUp, '/signup')
api.add_resource(Logout, '/logout')
api.add_resource(CheckSession, '/check_session')






if __name__ == '__main__':
    app.run(port=5555)
#!/usr/bin/env python3

from flask import Flask, jsonify, request, make_response
from flask_migrate import Migrate
from flask_restful import Api, Resource


from models import *

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///app.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

migrate = Migrate(app, db)

db.init_app(app)
api = Api(app)

# Create tables
with app.app_context():
    db.create_all()

# Restaurant Resource
class RestaurantResource(Resource):
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

class RestaurantListResource(Resource):
    def get(self):
        # Retrieve a list of all restaurants
        restaurants = Business.query.all()
        restaurant_list = []
        for restaurant in restaurants:
            restaurant_data = {
                'name': restaurant.name,
                'category': restaurant.category,
                'sub_category': restaurant.sub_category
            }
            restaurant_list.append(restaurant_data)
        return {'restaurants': restaurant_list}, 200

# Sub-Category Resource
class SubCategoryResource(Resource):
    def get(self, category):
        # Retrieve restaurants by category
        restaurants = Business.query.filter_by(category=category).all()
        restaurant_list = []
        for restaurant in restaurants:
            restaurant_data = {
                'name': restaurant.name,
                'category': restaurant.category,
                'sub_category': restaurant.sub_category
            }
            restaurant_list.append(restaurant_data)
        return {'restaurants': restaurant_list}, 200

# Add resources to the API
api.add_resource(RestaurantResource, '/restaurants/<int:restaurant_id>')
api.add_resource(RestaurantListResource, '/restaurants')
api.add_resource(SubCategoryResource, '/restaurants/category/<string:category>')

if __name__ == '__main__':
    app.run(debug=True)
from app import  app
from faker import Faker
from models import *
import random

price= str(round(random.uniform(1,5), 1))
print(price)

def check_category(categ, sub):
        subforRestaurants = ["Chinese", "Italian", "Local", "Indian"]
        subforAuto = ["Auto-repair", "Car Wash", "Car Dealers", "Parking"]
        if categ =='Restaurants':
            if sub not in subforRestaurants:
                raise ValueError("sub-category does not belong to category")
            else:
                return random.choice(subforRestaurants)
            
        elif categ =='Automotives':
            if sub not in subforAuto:
                raise ValueError("sub-category does not belong to category")
            else:
                return random.choice(subforAuto)
            
sub = check_category("Restaurants", "Indian")

print(sub)

s = Business.query.first()

print(s.poster)
from app import  app
from faker import Faker
from models import *
import random

list_ofnames =[
    'Jordan Wall', 'Anthony Moore', 'Cheryl Smith', 'Matthew Irwin', 
    'Jeffrey Campbell', 'Kyle Ford', 'Brandon Gonzalez', 
    'Garrett Smith', 'Jessica Reese', 'Michael Pierce', 
    'Jacqueline Williams', 'Jonathon Molina', 'William West', 
    'Rodney Scott', 'Erik Young', 'Lawrence Stout', 
    'Darin Jarvis', 'Anthony Fry', 'Danny Sweeney', 
    'Joseph Sharp', 'David Black', 'Bradley Flynn', 
    'Ashley Wyatt', 'Michael Andrews', 'Samuel York', 
    'David Gonzalez', 'Nicholas Harrington', 'Tammy Bennett', 
    'Steven Webb', 'Stacy Flores', 'James Marsh', 
    'Lori Patterson', 'Bailey Ramirez', 'Thomas Bowen', 
    'Erica Rowe', 'Matthew Norris', 'Charles Gibson', 
    'Ryan Bennett', 'Kenneth Williams', 'Mallory Diaz',
    'Jason Pena', 'Deborah Garza', 'William Meza MD', 
    'Erica Smith', 'Reginald Gordon', 'Michael Cortez', 
    'Benjamin Massey', 'Brenda Palmer', 'Jonathan Underwood', 
    'Albert Williams', 'Cody Reynolds', 'Sarah Rodriguez', 
    'Sarah Jones', 'Amber Watson', 'Monique Brennan', 
    'Nathan Blake', 'Scott Stout', 'Emily Holloway', 
    'Regina Lopez', 'Brian Bailey', 'Laurie Franklin', 
    'Jaime Taylor', 'Kathleen Arnold', 'Angela Garcia',
    'Angela Ochoa', 'Bill Haynes', 'James Page', 
    'Patricia Jones', 'Joseph Quinn', 'Miranda Cooper', 
    'Ashley Evans', 'Kimberly Pearson', 'Denise Powell',
    'Mark Ferguson', 'Sydney Peck', 'Melinda Thompson', 
    'Kevin Johnson', 'Kelly Nguyen', 'Jeremy Vargas', 
    'Christy Marquez', 'Sharon Anderson', 'Juan Woods', 
    'George Riley', 'Debbie Johnson', 'Vanessa Miles', 
    'Frank Maxwell', 'Kristy Malone', 'Jeffrey Zavala',
    'Matthew Taylor', 'Mary Thompson', 'Mary Cain', 
    'Laurie Hudson', 'Joseph Morrison', 'Sheri Cline',
    'Carol Wagner', 'Michael Russell', 'Tyler Austin',
    'Brenda Rocha', 'Bryan Harvey', 'Tracy Hayes'
               ]

buiness_names_for_restaurants_local = [
         "Kwa Mathe",
         "Mama Nilishe",
         "Jikoni",
         "CJs",
         "Kikao",
         "Big Knife",
         "Java",
         "Tupelo African Restaurant",
         "Junubin Restaurant",
         "Mama Oliech Restaurant",
         "Five Senses Restaurant",
         "SoulFood",
         "Shanoz Cafe and Cafe",
         "305 Pacha Gardens",
    ]
buiness_names_for_restaurants_chinese = [
         "Peking Peacock",
         "Silk Road Supper",
         "Oriental Orchid",
         "Ming’s Taste",
         "The Jade Plum",
         "Golden Peach",
         "Luminous Wok",
         "Funk Dragon",
         "Wu-Tang Restaurant",
         "Mandarin Noodle King",
         "Noodle Bowl World",
         "Dragon Egg Palace"
    ]
   
buiness_names_for_restaurants_italian = [
         "Mambo Italian",
         "La Salumeria Restaurant",
         "La Terreza Italian",
         "Mateo's Italian",
         "Villa Rosa",
         "The Alchemist",
         "Degree kitchen",
         "The Arbor",
         "La Dolce",
         "Urban Eatery",
         "Asmara Bar",
         "Talisman Restaurant",
         "La Cascina",
         "Mediterraneo Ristorante",
         "La dolce vita",
         "Roberto's Restaurant",
]
        
        
buiness_names_for_restaurants_Indian = [
         "Kennedy's Indian Curry House & Irish Pub",
         "Raavi Foods",
         "Ocean Indian Cuisine",
         "Keeva Indian Kitchen",
         "Copra",
         "Castro Indian",
         "Indreni Indian Kitchen",
        "Aaha Indian Cuisine",
         "Chaska Restaurant",
         "Dos Corner",
         "Pakwan Restaurant",
        "Rose Indian Cuisine",
         "Naan Point",
         "Kennedy's Indian Curry",
        "Om Indian",
        

        
                
    ]
    
    
business_names_for_automotives_repair_shops = [
        "International Sport Motors",
         "Sunset 76 Auto Repair & Tire Center", 
         "Mike's Union Auto Repair", 
         "AJC Auto Body" ,
         "415 SF Official Star Smog" ,
         "Eddy's Auto Services" ,
         "JT's Auto Repair" ,
         "West Wind Automotive" ,
         "Moe’s Tires" ,
         "CARSTAR Sunset Auto Reconstruction" ,
         "RepairSmith" ,
         "Golden Auto Muffler & Brake Service" 
         
        
        
    ]
    

business_names_for_automotives_car_dealers_ = [
         "Auto Mart",
         "Motor Getawayz",
         "Starlight AutoMall",
         "Superior Care Auto Center",
         "CarMatcher",
         "Blusky Auto’s",
         "Car Rentals",
         "Old City Motors",
         "AutoGem",
         "Motorhub",
         "Royal Motors",
         "Silverline Cars",
         "Car Paramount",
         "The Car Site"
    ]
    
business_names_for_automotives_parking = [
     "Main Street Parking",
     "Central Plaza Garage",
     "Sunset Mall Parking Lot",
     "Downtown Park 'n Ride",
     "Greenfield Park",
     "Metro Center Parking",
     "Golden Gate Parking",
     "City View Parking",
     "Express Park Zone",
     "Pristine Park and Ride",
     "Valley View Parking",
     "Sunset Strip Parking",
     "Elite Park Services",
     "Highway Rest Stop Parking",
    ]
    
business_names_for_automotives_car_wash = [
        "Low-Pressure Pre Wash",
        "High-Pressure Prewash.",
        "Soap Spray (Presoak)",
        "High pH Soap Spray.",
        "Wheel Brush.",
        "Brush Wash",
        "pin it",
        "spash splash",
        "wet diaries",
        "hot point"
    
        
    ]
    
    
img_for_italian = [
        
    ]
    
img_for_local = [
        
    ]
    
img_for_chinese = [
        
    ]
    
img_for_indian = [
        
    ]
    # (general/thumbnails) 
img_for_Restaurants=[
        
    ]
img_for_Automotives=[
        
    ]


with app.app_context():
    fake = Faker()

    # print("🦸‍♀️ Deleting Data from Database...")

    # Business.query.delete()
    User.query.delete()
    # Product.query.delete()
    # Review.query.delete()

    # print("🦸‍♀️ Default names ...")
    
    
    users = []
    for user in list_ofnames:
        new_user = User(
            username = user,
            # location = fake.address(),
            email = fake.email(),
            password = fake.password(),
            contacts = fake.phone_number(),
            owner = False
        )
        users.append(new_user)
    db.session.add_all(users)
    db.session.commit()
    print("Users successfully populated")
    
    
# business_names_for_restaurants_local #business model
    business_category = ['Restaurants', 'Automotives']
    subsRestaurant = ["Chinese", "Italian", "Local", "Indian"]
    subAuto = ["Auto-repair", "Car Wash", "Car Dealers", "Parking"]
    
    def check_category(categ):
        subforRestaurants = ["Chinese", "Italian", "Local", "Indian"]
        subforAuto = ["Auto-repair", "Car Wash", "Car Dealers", "Parking"]
        if categ =='Restaurants':
            
            return random.choice(subforRestaurants)
            
        elif categ =='Automotives':
            
            return random.choice(subforAuto)
            
    locals = []   
    for local_restaurant in business_names_for_restaurants_local:
        local = Business(
            name = local_restaurant,
            category = "Restaurants", #business_category
            sub_category = "Local",
            owner_id = random.randint(1, 20),
            # hours_open = faker.
            contacts = fake.phone_number(),
            location = fake.address(),
            
        )
        locals.append(local)
    db.session.add_all(locals)
    db.session.commit()
    
    italians = []   
    for italian_restaurant in business_names_for_restaurants_italian:
        italian = Business(
            name = local_restaurant,
            category = "Restaurants", #business_category
            sub_category = "Italian",
            owner_id = random.randint(1, 20),
            poster = 'url',
            # hours_open = faker.
            contacts = fake.phone_number(),
            location = fake.address(),
            
        )
        italians.append(italian)
    db.session.add_all(italians)
    db.session.commit()
    
    indians = []   
    for indian_restaurant in business_names_for_restaurants_indian:
        indian = Business(
            name = indian_restaurant,
            category = "Restaurants", #business_category
            sub_category = "Indian",
            owner_id = random.randint(1, 20),
            # hours_open = faker.
            contacts = fake.phone_number(),
            location = fake.address(),
            
        )
        indians.append(indian)
    db.session.add_all(indians)
    db.session.commit()
    
    chineses = []   
    for chinese_restaurant in business_names_for_restaurants_chinese:
        chinese = Business(
            name = chinese_restaurant,
            category = "Restaurants", #business_category
            sub_category = "Chinese",
            owner_id = random.randint(1, 20),
            # hours_open = faker.
            contacts = fake.phone_number(),
            location = fake.address(),
            
        )
        chineses.append(chinese)
    db.session.add_all(chineses)
    db.session.commit()
    print("Business successfully populated")

    reviews= []  
    for review in range(1000):
        new_review = Review(
                user_id = random.randint(1, 100),
                business_id = random.randint(1, 10),
                comment = fake.text(),
                rating = round(random.uniform(1,5), 1)
                
            )
        reviews.append(new_review)
    db.session.add_all(reviews)
    db.session.commit()
            
    print("Review seeded successfully.")
        
    
    
    
    
    
    
        

    
    
    

    
    
    
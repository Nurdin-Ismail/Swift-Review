# Swift-Review


# Motivations:

#    1. Check Reviews of a business
#    2. Write a Review
#    3. Add your business to be reviewed
   
    

# Model User


   # owner = True/False

   business = relationship(, backref=users)


# Model Business

    #   category= restaurant, shopping, automotive 
    
    owner_id = ForeignKey(users.id)
    

# Model Review


    user_id = 
     rating=
     comment= ''
     
     

# Model products 


    belonging_to_business= business_id

    hhh
     


["Restaurants", "Automotives"]

["Chinese", "Italian", "Local", "Indian", "Auto-repair", "Car Wash", "Car Dealers", "Parking" ]
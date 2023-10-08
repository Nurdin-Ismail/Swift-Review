# Business Review App

Author: Nicole Njeri
Date: October 06, 2023

## Introduction

Welcome to our Business Review App project! This project combines a Flask API for managing business reviews with a React frontend for a seamless user experience. In this readme, we'll walk you through the key features, technologies used, and how to set up and run both the frontend and backend components.

## Project Overview

### Backend (Flask API)

In the backend, we've developed a Flask API that manages business reviews for restaurants and automotive services. The core entities in our project are Businesses, Reviews, Products, and Users. We've established robust database models, including relationships between these entities, and implemented essential features such as user registration, business listings, and review submissions.

#### Models and Migrations

To manage our data effectively, we've defined the following database models and migrations:

##### Business
- **id (Primary Key)**
- name (String, max length 50, unique)
- category (String)
- sub_category (String)
- owner_id (Foreign Key)
- hours_open (String)
- contacts (String)
- poster (String)
- location (String)
- created_at (DateTime)

##### Review
- **id (Primary Key)**
- user_id (Foreign Key)
- business_id (Foreign Key)
- comment (String)
- rating (Integer)
- created_at (DateTime)

##### Product
- **id (Primary Key)**
- name (String)
- description (String)
- poster (String)
- price (Float)
- business_id (Foreign Key)

##### User
- **id (Primary Key)**
- username (String)
- email (String)
- contacts (String)
- created_at (DateTime)
- password (String)

#### Validations

We've implemented data validations to ensure data integrity:

- Business: Name (unique) and character limits.
- Review: User and business associations, comment, and rating constraints.
- Product: Name and price constraints.

### Frontend (React)

The frontend of our project is built using React, offering an intuitive user interface for exploring and interacting with business listings, reviews, and user profiles. We've used React Router for seamless navigation and Axios for API communication.

## API Routes

Our Flask API provides the following routes, ensuring they return JSON data in the specified format:

### Business Routes

- **GET /businesses**: Retrieve a list of all businesses.
- **POST /businesses**: Create a new business listing.
- **GET /businesses/:id**: Get details of a specific business.
- **PATCH /businesses/:id**: Update business details.
- **DELETE /businesses/:id**: Delete a business listing.

### Review Routes

- **GET /reviews**: Retrieve a list of all reviews.
- **POST /reviews**: Submit a new review.
- **GET /reviews/:id**: Get details of a specific review.
- **PATCH /reviews/:id**: Update review details.
- **DELETE /reviews/:id**: Delete a review.

### Product Routes

- **GET /products**: Retrieve a list of all products.
- **POST /products**: Create a new product associated with a business.
- **GET /products/:id**: Get details of a specific product.
- **PATCH /products/:id**: Update product details.
- **DELETE /products/:id**: Delete a product.

### User Routes

- **GET /users**: Retrieve a list of all users.
- **POST /users**: Register a new user.
- **GET /users/:id**: Get details of a specific user.
- **PATCH /users/:id**: Update user details.
- **DELETE /users/:id**: Delete a user.

## Technologies Used

Our project leverages various technologies for both the frontend and backend, ensuring a seamless user experience:

**Backend (Flask API):**
- Python 3
- Flask
- Flask-Migrate
- Flask-RESTful
- Flask-CORS
- SQLAlchemy
- SQLite (for development)

**Frontend (React):**
- React.js
- React Router
- Axios

## Project Setup

To get started with our project, follow these steps:

### Backend (Flask API)

1. Clone the repository: `git clone [repository URL]`
2. Create a virtual environment: `python3 -m venv venv`
3. Activate the virtual environment: `source venv/bin/activate`
4. Install project dependencies: `pip install -r requirements.txt`
5. Set up the database: `flask db init`, `flask db migrate`, `flask db upgrade`
6. Run the Flask application: `flask run`

### Frontend (React)

1. Navigate to the frontend directory: `cd [frontend directory]`
2. Install project dependencies: `npm install`
3. Start the React development server: `npm start`

## Known Bugs

There are currently no known bugs in our project. We've thoroughly tested it to ensure a smooth user experience.

## Support and Contact

For contributions, suggestions, or inquiries, please feel free to contact us:

- Email: https://github.com/Nurdin-Ismail/Swift-Review
## License

This project is licensed under [Your License]. We provide this software as-is and disclaim all warranties, including implied warranties of merchantability and fitness. In no event shall the author be liable for any special, direct, indirect, or consequential damages or any damages whatsoever arising out of or in connection with the use or performance of this software.



---

# Qfuel - Fuel Your Day Project Documentation

## Project Overview

**Project Name:** Qfuel - Fuel Your Day  
**Tagline:** "Fuel Your Day with Wisdom: Qfuel - Where Quotes Ignite Inspiration!"

**Introduction:**  
Welcome to Qfuel, your daily source of inspiration! Qfuel is a unique platform designed to ignite your day with a burst of motivation, wisdom, and positivity. Our mission is to provide you with a daily dose of insightful quotes that fuel your mind and spirit.

## Frontend

### Technologies Used:
#### Frontend
- HTML
- CSS
- JavaScript
- React.js
- React Router DOM
#### Backend
- Node.js
- Express.js
- MongoDB for database
- Bcrypt for password hashing
- Jsonwebtoken for generating ACCESS_TOKEN and REFRESH_TOKEN

## Installation
Clone the repository to your local machine:
```bash
git clone https://github.com/PavanGuptaZ/Qfuel
```

### Setup Environment keys
Create .env files in both the frontend and backend folders:
#### In the Backend folder add the following variables
-	DATABASE_URL (MongoDB connection string)
-	PORT (Port number)
-	ACCESS_TOKEN
-	REFRESH_TOKEN
add Frontend origin in - backend/config/allowed origin.js
````JavaScript
const allowedOrigins = [
    'http://localhost:5173',
    'http://192.168.0.107:5173'
    'ADD REQUIRE ORIGINS'
]
export default allowedOrigins
````

it is going to help on CORS

#### In the Frontend folder add the following variables
- VITE_BACKEND_LINK (Link to the backend server)
ToRun
Navigate to the frontend and backend folders in the terminal and to run 
````bash
  cd frontend
  npm install
  npm run dev
````

````bash
  cd backend
  npm install
  npm run dev
````

Check DATABASEURL and VITE_BACKEND_LINK in the respective .env files and update if necessary.


##	Responsive Design
-	Qfuel - Fuel Your Day is designed with a focus on responsiveness, ensuring a seamless and enjoyable user experience across various devices and screen sizes.
-	Utilizing CSS media queries to adapt styles based on the device's characteristics.
-	Employing flexible grid and layout systems to enhance responsiveness.



## Pages:

1. **Home Page:**
    Contains information about the website, What We Offer, How Qfuel Works, Join the Qfuel Community, etc.

2. **Register Page:**
    Allows users to register with the following requirements:
     - Name: One or two words, no extra spacing, between 5 to 30 characters.
     - Email: Minimum of 3 and a maximum of 40 characters, total 50.
     - Password: No spacing, at least one capital, one small letter, one number, and one special character from @, &, *, #, $, !, ?. Limit of 3 to 20 characters.

3. **Login Page:**
    Allows users to log in with email and password, verified by the same regex code.

4. **Page Not Found:**
    Standard page for 404 errors.

5. **User Page:**
    Main page showing 3 random quotes with a "Load Again" button to fetch more quotes.
    Like button to appreciate and save quotes.

6. **Profile Page:**
    Displays user information (name, email) and liked quotes.

## React Query:

The entire project uses the Fetch API for network requests, and React Query (also known as Transatck Query) for managing asynchronous data.


## Authentication:

- Passwords are hashed using Bcrypt.
- ACCESS_TOKEN and REFRESH_TOKEN are generated using Jsonwebtoken.
- REFRESH_TOKEN is generated only during user login.
- ACCESS_TOKEN is regenerated upon expiration by checking REFRESH_TOKEN.

## Logging:

- Custom logger function records every entry in the logs folder and `console.log()` simultaneously.
##	Future Enhancements
-	Implement a feature to allow users to share their favorite quotes on social media platforms.
-	Add a feature to allow users to submit their own quotes for consideration.
-	Improve the user interface for a more engaging user experience.
-	Implement more robust error handling and display more informative error messages to the user.
-	Consider using a more secure and scalable database solution for future growth.
## GitHub and Netlify Links

- **GitHub Link:** [GITHUB_LINK](your_github_link_here)
- **Netlify Link:** [NETLIFY_LINK](your_netlify_link_here)

---

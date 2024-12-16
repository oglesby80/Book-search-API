📚 Google Books API Search Engine
This project refactors a fully functional Google Books API search engine that was previously built using a RESTful API. It now utilizes GraphQL with Apollo Server to enhance the API capabilities. The app is built using the MERN stack (MongoDB, Express.js, React, and Node.js) and allows users to search for books, save books to their accounts, and manage saved books.

🚀 Live Demo
You can access the deployed application here: Live Demo Link
(Replace with the actual link to your Render deployment)

📖 Table of Contents
Description
Features
Technologies
Installation
Usage
API Endpoints
Screenshots
License
Contact
📝 Description
This application integrates with the Google Books API to provide book search functionality. It allows users to:

Search for books.
Create an account with login/signup functionality.
Save books to their account.
View and delete saved books.
Logout securely.
The app was migrated from a RESTful API to a GraphQL API using Apollo Server for improved efficiency and flexibility. It includes secure user authentication with JWT (JSON Web Tokens).

✅ Features
Back-End Features
GraphQL API with Apollo Server:

Replace RESTful endpoints with GraphQL queries and mutations.
Queries: me
Mutations: login, addUser, saveBook, removeBook.
MongoDB Integration:

Save and retrieve user data, including saved books.
Authentication Middleware:

Uses JWT for secure user authentication.
Front-End Features
React Components:

Login/Signup: Modal-based form for user authentication.
SearchBooks: Search for books and save them to the account.
SavedBooks: View and delete saved books.
GraphQL Queries and Mutations:

GET_ME: Fetch the logged-in user's data.
LOGIN_USER: Log in to the app.
ADD_USER: Create a new user account.
SAVE_BOOK: Save a book to the user account.
REMOVE_BOOK: Delete a book from the saved books.
Responsive UI:

Built using React and Bootstrap for a clean and polished interface.
💻 Technologies
Back End
Node.js
Express.js
MongoDB & Mongoose
GraphQL
Apollo Server
Front End
React
React Router
Apollo Client
Bootstrap
Others
JSON Web Token (JWT)

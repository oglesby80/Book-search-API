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


⚙️ Installation
Clone the repository:

bash
Copy code
git clone https://github.com/your-username/googlebooks-app.git
cd googlebooks-app
Install dependencies:

At the root level:
bash
Copy code
npm install
Install dependencies for both server and client:
bash
Copy code
cd server && npm install  
cd ../client && npm install
Setup environment variables:

Create a .env file in the server folder with the following:
plaintext
Copy code
MONGODB_URI=your_mongodb_atlas_connection_string
JWT_SECRET=your_jwt_secret_key
PORT=3001
NODE_ENV=production
Run the app locally:

bash
Copy code
npm run develop
Build for production:

bash
Copy code
npm run build
🚀 Usage
Search for Books:

Enter a keyword to search for books using the Google Books API.
Login/Signup:

Create an account or log in to save books.
Save Books:

Save books to your account while logged in.
View and Remove Saved Books:

Manage books you've saved.
Logout:

Log out securely to end the session.
📡 API Endpoints (GraphQL)
Queries
me: Fetch the logged-in user's data.
Mutations
login(email: String!, password: String!): Log in a user.
addUser(username: String!, email: String!, password: String!): Create a new user.
saveBook(bookData: BookInput!): Save a book.
removeBook(bookId: String!): Remove a saved book.
📸 Screenshots
(Add relevant screenshots of the app here: login, search, and saved books pages.)

🛠 Deployment
The application is deployed on Render.
MongoDB database is hosted on MongoDB Atlas.
📝 License
This project is licensed under the MIT License.

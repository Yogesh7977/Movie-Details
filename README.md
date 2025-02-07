🎬 Movie Details Website
A web application where users can register, log in, and explore trending movies and TV shows. Users must log in to access detailed information about movies, including their ratings, original language, and more.

📋 Features
User Authentication:

Registration and Login system to secure access.
Restricts access to movie details for non-logged-in users.
Movie Listing:

Displays a list of trending movies and TV shows.
Each movie card includes a poster, title, rating, and language.
Movie Details:

Click on a movie to view its details.
Pagination:

Browse through multiple pages of trending movies.

Frontend: React, React Router
Backend: Node.js (optional for authentication), Firebase Authentication (optional)
API: The Movie Database (TMDb) for movie data
Styling: CSS or any preferred library (e.g., Bootstrap, TailwindCSS)

src/
├── components/
│   ├── Home.js        // Displays movie list
│   ├── MovieDetails.js // Displays selected movie details
│   ├── Login.js       // User login page
│   ├── Register.js    // User registration page
├── App.js             // Routes and main structure
├── index.js           // Entry point
├── styles.css         // Global styles


🚀 Getting Started
Prerequisites
Node.js: Install Node.js.
TMDb API Key: Sign up at TMDb to get an API key.


git clone https://github.com/your-username/movie-details-website.git
cd movie-details-website

npm install

REACT_APP_TMDB_API_KEY=your_tmdb_api_key

npm start

🌟 Usage
Register an account on the registration page.
Log in with your credentials.
Explore trending movies on the home page.
Click on a movie card to view detailed information.
Navigate through pages to explore more movies.



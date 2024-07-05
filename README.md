**TV Shows Search App**

This project is a simple React application that fetches TV show information from the TVMaze API based on user input.

Features
Search for TV shows by entering a search query.
Displays search results in a table with show title, language, genres, and official site link.
Technologies Used
React
Axios (for API requests)
TVMaze API
Getting Started

Structure of project

tv-shows-search-app/
├── public/
│   ├── index.html
│   └── favicon.ico
├── src/
│   ├── App.css
│   ├── App.js
│   ├── index.css
│   ├── index.js
│   ├── TableComponent.js
│   └── README.md
├── .gitignore
├── package.json
└── README.md

To run this project locally, follow these steps:

Clone the repository:

bash
Copy code
git clone <repository-url>
cd tv-shows-search-app
Install dependencies:

bash
Copy code
npm install
Add API Key:

Replace '5PGiUZKcp6c0Ed1IFEpt6m5RJvCK6RUp' with your actual API key in src/TableComponent.js.

Run the app:

bash
Copy code
npm start
Open http://localhost:3000 to view it in the browser.

Usage
Enter a TV show name or keyword in the search input to fetch TV show information.
Click on the official site link to visit the show's official website.
API Reference
This project uses the TVMaze API to fetch TV show data. For more details, refer to the TVMaze API documentation.

Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

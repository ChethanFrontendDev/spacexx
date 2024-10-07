A simple SpaceX Launch Tracker application built using Vite and React. This app showcases various SpaceX launches and mission information (static data) and is fully responsive across different devices.

Table of Contents
Features
Demo
Installation
Usage
Technologies Used
Project Structure
Contributing
License
Features
Static data about SpaceX launches and rockets
Responsive design for mobile, tablet, and desktop
Optimized performance with Vite
Demo
Check out the live demo of the app:

Live Demo

Installation
Clone the repository:

bash
Copy code
git clone https://github.com/ChethanFrontendDev/spacexx.git
cd spacexx
Install dependencies:

You can use npm (or yarn, depending on your preference):

bash
Copy code
npm install
Start the development server:

bash
Copy code
npm run dev
The app will be running at http://localhost:5173.

Usage
Explore the Launches and Rocket Information.
View static data related to different missions and rocket details.
Technologies Used
Vite: Fast development server and build tool
React: JavaScript library for building user interfaces
Tailwind CSS: Utility-first CSS framework for styling
React Router: For handling navigation between different pages
Project Structure
bash
Copy code
├── public               # Public assets
│   └── index.html       # Main HTML file
├── src
│   ├── components       # Reusable components (LaunchList, LaunchDetails, etc.)
│   ├── pages            # Main pages (Home, Launches, etc.)
│   ├── data             # Static data files
│   ├── App.jsx          # Main application component
│   └── main.jsx         # Vite main entry point
├── package.json         # Project dependencies and scripts
└── tailwind.config.js   # Tailwind CSS configuration

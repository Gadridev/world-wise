
# 🌍 WorldWise

WorldWise is a modern web application built using **React.js** that allows users to track their travel adventures across cities and countries. With an interactive map and an intuitive user interface, WorldWise provides travelers with a seamless way to record their journeys. This project is designed for educational and demonstration purposes, showcasing features like authentication simulation, map integration, and dynamic data handling via a fake API server.
##
![303_1x_shots_so](https://github.com/user-attachments/assets/e44bac69-17e2-41d9-abd1-9f1f1179011d)
## ✨ Features

### Core Functionality

-   **Interactive Map**: View and interact with a map displaying your travel destinations.
-   **City and Country Logs**: Record the cities and countries you’ve visited, with a timestamp for each.
-   **Authentication Simulation**: Users can log in and out manually to simulate an authentication process (no JWT or external auth libraries used).
-   **Location Tracking**: Automatically add your current location using a "Use Your Position" feature.
-   **Optimized Performance**: Implements **React.memo**, **useMemo**, and **useCallback** for efficient rendering and state updates.
-   **Responsive Design**: Optimized for both desktop and mobile devices for on-the-go travelers.

### Technologies Used

-   **React.js**: Component-based front-end framework.
-   **React.memo**: Prevents unnecessary re-renders of components by memoizing them.
-   **useMemo**: Optimizes expensive calculations by memoizing the results.
-   **useCallback**: Memoizes callback functions to avoid unnecessary re-creations.
-   **Leaflet.js**: Interactive map rendering.
-   **Fake API Server**: Simulates back-end operations for fetching cities and countries data.
-   **CSS**: Custom styles for a modern and polished UI.

----------

## 🚀 Live Demo

Explore the live application here: [WorldWise App](https://worldwise-jonas.netlify.app)

----------

## 🛠️ Installation

### Prerequisites

Make sure you have the following installed:

-   Node.js (v14 or later)
-   npm or yarn package manager

### Steps

1.  **Clone the repository**:
    
    bash
    
    Copy code
    
    `git clone https://github.com/Gadridev/world-wise.git
    cd worldwise` 
    
2.  **Install dependencies**:
    
    bash
    
    Copy code
    
    `npm install` 
    
3.  **Start the fake API server**: The app uses `json-server` to simulate a backend. Install and start the server:
    
    bash
    
    Copy code
    
    `npm install -g json-server
    json-server --watch data/db.json --port 5000` 
    
4.  **Run the development server**:
    `npm run dev` 
    
5.  **Open the application**: Visit `http://localhost:5173/` in your browser.
    

----------

## 📂 File Structure

The app follows a clean and modular file structure for better scalability and maintainability:
```
src/
│
├── components/       // Reusable UI components (e.g., Map, Button, Header)
├── contexts/         // Context API for global state management (e.g., AuthContext, CityContext)
├── hooks/            // Custom React hooks for shared logic
├── pages/            // Main application pages (e.g., Login, Dashboard, Home)
├── App.js            // Main application component
└── index.js          // Entry point for the React application
```
----------

## 🧑‍💻 Features Breakdown

### Authentication Simulation

-   A basic authentication flow (without JWT or secure token storage) is implemented using React Context.
-   Users can log in and log out manually.
-   User session is maintained in memory (not persistent).

### Map Integration

-   Leveraging **Leaflet.js** for rendering interactive maps.
-   Users can view their travel history by placing markers on the map.
-   A "Use Your Position" feature automatically fetches and adds the user’s current location to the map.

### City & Country Tracking

-   All data (cities and countries) is stored and fetched from a fake API server (`json-server`).
-   The dashboard dynamically updates with the visited cities and countries list.
-   Each log includes the name of the city, country, and the date of the visit.

### Performance Optimization

-   **React.memo**: Wraps reusable components to prevent re-renders when props haven't changed.
-   **useMemo**: Optimizes expensive calculations, such as filtering or sorting cities and countries data, by memoizing results.
-   **useCallback**: Memoizes callback functions passed as props to child components to prevent unnecessary re-creations during renders.

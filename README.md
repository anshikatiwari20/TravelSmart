# Travel Smart

## Overview

TravelSmart is an innovative AI-powered platform designed to simplify and enhance the travel planning experience. With features like Location Finder, it helps users discover new travel destinations based on their interests and preferences. The Trip Planner organizes your entire journey, suggesting activities, managing itineraries, and optimizing your travel schedule. Real-time Weather Forecasting ensures you’re always prepared for the weather conditions at your destination. Additionally, the Restaurant & Hotel Planner allows users to find and book the best restaurants and hotels according to their needs, whether they seek luxury, budget-friendly, or unique options. The Bookings feature takes it a step further by offering a seamless booking experience for flights, hotels, and restaurants directly through the platform, providing everything you need for a smooth and enjoyable trip in one place.

## Technologies Used
- **React**
- **Node.js**
- **MongoDB**
- **Express.js** 
- **Streamlit**
- **Python**

## Prerequisites
Before running the project, make sure you have the following installed on your system:

- **Node.js** :Required to run the backend server and manage dependencies.
- **Python**: Required to run Streamlit applications for AI-powered features.
- **Git**: For cloning the repository and version control.
- **MongoDB**: Ensure you have MongoDB installed and running.

## Setup Instructions

1. **Clone the Repository-**
First, clone the repository to your local machine by running:
   
```bash
    git clone https://github.com/anshikatiwari20/Travel_Smart_.git
```


2. **Navigate to the Project Folder-**
After cloning the repository, navigate to the project directory by running:
    
```bash
    cd Travel_Smart_
```


3. **Create an .env File**
Create an .env file in the root directory and add the following variables:
    
```bash
    GOOGLE_API_KEY=your-google-api-key
```
  This will install all the necessary packages listed in the package.json file.

4. **Install Python and Node.js Dependencies**
Install the required Python packages for the Streamlit application and required Node.js dependencies:
    
```bash
    pip install -r requirements.txt  
    npm install
```

5. **Run the MongoDB Server**
To connect to MongoDB, navigate to the src folder and run:
    
```bash
    cd src  
    nodemon server.js
```

6. **Run the Streamlit Application**
Start the Streamlit server in a separate terminal:
    
```bash
    streamlit run app.py
```

7. **Run the Application Server**
In another terminal, start the main Node.js application:
    
```bash
    nodemon server.js
```

8. **Access the Application**
- The Streamlit application will be available at: http://localhost:8501
- The Node.js backend server will be available at: http://localhost:3000

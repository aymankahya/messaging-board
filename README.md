# Mini Message Board

## Project Overview

Mini Message Board is a simple web application developed as part of The Odin Project's fullstack curriculum. This project serves as an introduction to fullstack development especially server-side domain, combining basic frontend and backend technologies to create a functional message board system with a clean, responsive user interface.

<p align="center">
  <a href="https://app.netlify.com/sites/mesaging-board/deploys" target="_blank">
    <img src="https://api.netlify.com/api/v1/badges/d8282bfb-dcb0-4ce3-a019-218906e31d64/deploy-status" alt="Netlify Status" />
  </a>
</p>

<p align="center">
<img src="https://github.com/aymankahya/messaging-board/assets/63832251/ee961b59-c648-4e0c-bfa9-c82195b7d55f" alt="Messaging App Board"/>
</p>



## Key Features

- Message board functionality with the ability to post and view messages
- Simple user identification system
- RESTful API for message handling
- Persistent data storage using MongoDB

## Tech Stack

### Frontend
- React.js with TypeScript
- Material UI

### Backend
- Node.js with Express.js
- TypeScript for type-safe development
- MongoDB for database management
- Mongoose as the ODM (Object Document Mapper)

### Deployment
- Frontend deployed on Netlify
- Backend deployed on Fly.io

## Key Implementations

1. **Message Board**: Users can post messages and view all messages on the board.

2. **User Identification**: Implemented a simple system to allow users to set a username or post as "Anonymous". This is managed client-side using local storage.

3. **User Interface**: Utilized Material-UI components and custom styling to ensure a consistent look across devices.

4. **API Integration**: Developed a RESTful API with endpoints for fetching messages and posting new ones.

5. **Database Integration**: Integrated MongoDB to store and retrieve message data.

6. **TypeScript Usage**: Leveraged TypeScript in both frontend and backend for enhanced code quality and developer experience.

## Running the Project Locally

1. Clone the repository
2. Navigate to the project root and install dependencies
```bash
npm install
cd backend
npm install
```
3. Start the backend server
```bash
npm run dev
```
4. In a new terminal, start the frontend development server
```bash
cd ..
npm run dev
```
5. Open your browser and visit `http://localhost:5173`

## Future Enhancements

- Implement real-time updates using WebSockets
- Add user authentication and authorization
- Introduce message threading and replies
- Implement message search functionality

## Conclusion

This Mini Message Board project has been a valuable learning experience in fullstack development. Through building this application, I've gained practical insights into:

1. Frontend Development: Using React with TypeScript to create a responsive user interface.
2. Backend Architecture: Setting up an Express.js server to handle API requests.
3. Database Integration: Implementing basic CRUD operations with MongoDB.
4. API Development: Creating and consuming RESTful endpoints.

While this project is a starting point in the fullstack world, backend in particular. It has provided hands-on experience with connecting frontend and backend components, crafting the server-side of a fullstack application and creating RESTful endpoints as well as discovering database management and integration through ODM such as mongoose.

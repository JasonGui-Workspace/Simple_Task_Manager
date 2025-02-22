# Simple Task Manager API

## Description
This is a simple RESTful API example built with Express.js for managing tasks. It demonstrates basic CRUD (Create, Read, Update, Delete) operations using an in-memory array as the data store.

## Features
- Create new tasks with title, description, and status
- Retrieve all tasks or a specific task by ID
- Update existing tasks
- Delete tasks
- Simple in-memory storage (data will be lost on server restart)

## Installation
1. Make sure you have Node.js installed
2. Clone the repository:
   ```bash
   git clone [repository-url]
   ```
3. Navigate to the project directory:
   ```bash
   cd [project-directory]
   ```
4. Install dependencies:
   ```bash
   npm install express body-parser
   ```

## Usage
1. Start the server:
   ```bash
   node app.js
   ```
2. The server will run on port 3000 by default (or the port specified in the environment variable PORT)

### API Endpoints
- **GET /tasks** - Get all tasks
- **POST /tasks** - Create a new task
  ```json
  {
    "title": "Task title",
    "description": "Task description",
    "status": "pending"
  }
  ```
- **GET /tasks/:id** - Get a specific task by ID
- **PUT /tasks/:id** - Update a task
- **DELETE /tasks/:id** - Delete a task

### Example Requests
Create a new task:
```bash
curl -X POST http://localhost:3000/tasks \
  -H "Content-Type: application/json" \
  -d '{"title": "New Task", "description": "This is a new task", "status": "pending"}'
```
Get all tasks:
```bash
curl http://localhost:3000/tasks
```
Get a specific task by ID:
```bash
curl http://localhost:3000/tasks/1
```
Update a task:
```bash
curl -X PUT http://localhost:3000/tasks/1 \
  -H "Content-Type: application/json" \
  -d '{"title": "Updated Task", "description": "This is an updated task", "status": "completed"}'
```
Delete a task:
```bash
curl -X DELETE http://localhost:3000/tasks/1
```

## Notes
- This is a simple example for demonstration purposes
- Data is stored in memory and will be lost when the server restarts
- For production use, consider adding proper error handling, validation, and database integration

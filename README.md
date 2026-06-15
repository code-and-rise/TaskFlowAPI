# TaskFlow API
TaskFlow API - RESTful backend for task management system built with Node.js.

## Stack
- Node.js
- PostgreSQL

## Features
### Auth
- register
- login
- token auth

### Core
- CRUD tasks
- user-based data (multi-user system)

### Additionally
- filters (status, from/to date, title)
- pagination
- simple analytics endpoint (overview, status distribution, productivity)

## API structure
```
POST /api/auth/login
POST /api/auth/register
GET /api/tasks
GET /api/tasks/:id
POST /api/tasks
PUT /api/tasks/:id
DELETE /api/tasks/:id
```

## Live demo
<a href="https://taskflowapi-4gko.onrender.com">https://taskflowapi-4gko.onrender.com</a>
# TaskFlow API
TaskFlow API – RESTful backend for task management system built with Node.js.

## Stack
- Node.js
- PostgreSQL

## Features
### Auth
- register
- login
- logout
- token auth

### Core
- CRUD tasks
- user-based data (multi-user system)

### Bonus (ako stigneš)
- filters (status, date)
- pagination
- simple analytics endpoint

## API structure
```
POST /api/auth/login
POST /api/auth/register
GET /api/tasks
POST /api/tasks
PUT /api/tasks/{id}
DELETE /api/tasks/{id}
```

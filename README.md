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
Auth (get JWT)
```
POST /api/auth/login
POST /api/auth/register
```
Tasks (requires Authorization)
```
GET /api/tasks
GET /api/tasks/:id
POST /api/tasks
PUT /api/tasks/:id
DELETE /api/tasks/:id
```
Analytics (requires Authorization)
```
GET /api/analytics/overview
GET /api/analytics/status-distribution
GET /api/analytics/productivity
```

## Live demo
<a href="https://taskflowapi-4gko.onrender.com">https://taskflowapi-4gko.onrender.com</a>
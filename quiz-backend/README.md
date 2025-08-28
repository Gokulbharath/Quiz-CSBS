# Quiz Backend

## Features
- Admin can add, edit, delete quiz questions
- Questions stored in MongoDB
- REST API for CRUD and random question retrieval

## Endpoints
- `POST /api/questions` — Add question
- `PUT /api/questions/:id` — Edit question
- `DELETE /api/questions/:id` — Delete question
- `GET /api/questions` — List all questions
- `GET /api/questions/random` — Get a random question

## Setup
1. Install dependencies: `npm install`
2. Set MongoDB URI in `.env`
3. Start server: `npm run dev` (with nodemon) or `npm start`

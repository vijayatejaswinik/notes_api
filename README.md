# Notes API

A simple REST API built with **Node.js** and **Express** to manage notes (Create, Read, Delete).

---

## 🚀 How to Run

1. Clone the repository:
   ```sh
   git clone https://github.com/your-username/notes_api.git
   cd notes_api
   ```

2. Install dependencies:
```sh
npm install
```
3. Start the server:
```sh
node index.js
```
Server runs on: http://localhost:3000

📌 API Endpoints
➕ Create a Note
```
POST /notes
Content-Type: application/json

{
  "title": "Study",
  "content": "Do DSA practice"
}
```
✅ Response:
```
json
Copy
Edit
{
  "id": 1,
  "title": "Study",
  "content": "Do DSA practice"
}
```
📖 Get All Notes
```
GET /notes
```
✅ Response:
```
[
  {
    "id": 1,
    "title": "Study",
    "content": "Do DSA practice"
  }
]
```
❌ Delete a Note
```
DELETE /notes/1
```
✅ Response:

```
{ "message": "Note deleted successfully" }
```
📄 Tech Stack
```
Node.js

Express.js

REST API principles
```

📌 Author: 
Kammari Vijaya Tejaswini


---

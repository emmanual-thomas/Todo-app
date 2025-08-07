# 📝 MERN ToDo List App

A simple and functional ToDo List application built using the **MERN stack**:
- **MongoDB** for database
- **Express** for backend API
- **React** for frontend
- **Node.js** for server

---

## 📁 Project Structure

```
todo-app/
│
├── server/                 # Backend
│   ├── models/
│   │   └── Todo.js
│   └── server.js
│
├── client/                 # Frontend (React)
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   │   ├── TodoForm.js
│   │   │   ├── TodoItem.js
│   │   │   └── FilterButtons.js
│   │   ├── App.js
│   │   └── App.css
│   └── package.json
│
├── README.md
```

---

## ⚙️ Prerequisites

Ensure you have the following installed:
- [Node.js](https://nodejs.org/) (v14+)
- [MongoDB Atlas Account](https://www.mongodb.com/cloud/atlas) or a local MongoDB instance
- [Git](https://git-scm.com/)

---

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/mern-todo-app.git
cd mern-todo-app
```

---

### 2. Backend Setup (Express + MongoDB)

```bash
cd server
npm install
```

#### 🔐 Configure MongoDB
Edit the MongoDB URI inside `server.js`:
```js
const MONGO_URI = 'your_mongodb_connection_string';
```

#### ▶️ Start Backend Server
```bash
node server.js
```

Server will run on [http://localhost:5000](http://localhost:5000)

---

### 3. Frontend Setup (React)

In a new terminal:

```bash
cd client
npm install
```

#### ▶️ Start React App

```bash
npm start
```

This will open the app in your browser at [http://localhost:3000](http://localhost:3000)

---

## 📦 API Endpoints

| Method | Endpoint             | Description            |
|--------|----------------------|------------------------|
| GET    | `/api/todos`         | Get all todos          |
| POST   | `/api/todos`         | Add a new todo         |
| PUT    | `/api/todos/:id`     | Update an existing todo|
| DELETE | `/api/todos/:id`     | Delete a todo          |

---

## ✅ Features

- Add new tasks
- Mark tasks as complete/incomplete
- Edit or delete tasks
- Filter tasks: All / Active / Completed
- Clear all completed tasks

---

## 🛠 Tech Stack

- **Frontend**: React, Axios
- **Backend**: Express, Node.js
- **Database**: MongoDB + Mongoose
- **Styling**: CSS

---

## 🧑‍💻 Author

**Emmanual Thomas**  
GitHub: [emmanual-thomas](https://github.com/emmanual-thomas)

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

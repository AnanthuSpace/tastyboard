
# **Restaurant Menu Management Application**  

This is a full-stack application built with **React, Express, and MongoDB** that allows users to create and manage menus with multiple menu items. Users can dynamically add menus, view their details, and manage menu items efficiently.  

---

##  Features

 Create menus with a name and description  
 Add multiple items to each menu  
 View and interact with menus dynamically  
 Mobile responsive design  
 Hosted for easy access  

---

##  Tech Stack

### Frontend:
- React (Vite)
- TypeScript  
- Tailwind CSS  
- Axios  
- React Router  

### Backend: 
- Express.js
- TypeScript
- MongoDB (Mongoose ORM)  
- CORS  
- dotenv  

### Database:
- MongoDB  

---

##  Installation & Setup

### 1️ Clone the Repository  
```sh
git clone https://github.com/yourusername/restaurant-menu-app.git
cd restaurant-menu-app
```

### 2️ Install Dependencies

#### Frontend:
```sh
cd client
npm install
```

#### Backend:
```sh
cd server
npm install
```

### 3️ Setup Environment Variables

#### Backend (`server/.env`) 
```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
CORS_ORIGIN=http://localhost:5173
```

#### Frontend (`client/.env`)
```env
VITE_API_URL=http://localhost:5000
```

---

## Running the Application**  

### **Start Backend**  
```sh
cd server
npm run dev
```

### Start Frontend
```sh
cd client
npm run dev
```

The app will be available at **`http://localhost:5173`**  

---

## Deployment  

The application has been deployed to **[Live Demo](your-live-link.com)**  

---

##  Project Structure

```
restaurant-menu-app/
│── client/         # Frontend (React)
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── App.tsx
│   │   ├── main.tsx
│   ├── public/
│   ├── index.html
│   ├── vite.config.ts
│── server/         # Backend (Express.js)
│   ├── models/
│   ├── routes/
│   ├── controllers/
│   ├── repository/
│   ├── interfaces/
│   ├── models/
│   ├── services/
│   ├── app.ts
│   ├── server.tss
│── .gitignore
│── package.json
│── README.md
```

---

## API Endpoints 

### **Menus**  

| Method | Endpoint       | Description            |
|--------|--------------|------------------------|
| GET    | `/menus`      | Get all menus         |
| POST   | `/menus`      | Create a new menu     |

### Menu Items

| Method | Endpoint           | Description                |
|--------|--------------------|----------------------------|
| PUT    | `/menus/add-item`  | Add an item to a menu      |

---

##  Future Improvements

- Edit & delete menus and items  
- Use Prisma for ORM  
- Implement authentication  

---


**Developed by Ananthu Mohan** 

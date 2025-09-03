# Mearn_Stack_project_Medicine_delvery_Site
# Mern_Stack_Project_E_Commerce
This is i made using react , javascript [ES6],express , for databse use MongoDB, and make admin panel user panel seprate.


## Savanpharma – MERN Pharmacy medicne delvering (Monorepo)

Savanpharma is a MERN stack application consisting of:
- **Frontend**: customer-facing React app
- **Admin**: admin dashboard for managing menu and orders
- **Backend**: Express/MongoDB REST API with image uploads

This repository is organized as a monorepo with three apps under `frontend/`, `admin/`, and `backend/`.

### Project Structure
```
backend/   # Express API, MongoDB models, image uploads (Multer)
frontend/  # Customer React app (Vite)
admin/     # Admin React app (Vite)
```

### Tech Stack
- **Frontend/Admin**: React 19, Vite, React Router
- **Backend**: Node.js, Express 5, Mongoose 8, Multer, JWT, CORS, dotenv
- **DB**: MongoDB (local by default)

### Features
- **Customer app**:
  - Browse menu/categories and view food items
  - Add to cart and manage quantities
  - Login/Signup flows (JWT-based)
  - Place order (integration surface for payments)
- **Admin app**:
  - Add new food items with images (uploaded to `backend/uploads/`)
  - View and manage menu list
  - View orders and manage status

> Note: In the admin panel, some order-related work is pending (e.g., improving the orders list/status updates and related flows). See "Admin – Pending Work" below.

---

## Getting Started

### Prerequisites
- Node.js LTS and npm
- MongoDB running locally (or a MongoDB URI)

### Backend (API)
Location: `backend/`

Default config:
- Port: `4000`
- MongoDB: `mongodb://127.0.0.1:27017/Savanpharma` (set in `backend/config/db.js`)
- Static uploads: served from `/images` → `backend/uploads/`

Scripts:
```
npm run server     # starts API with nodemon
```

Start the backend:
```
cd backend
npm install
npm run server
```

API base URL: `http://localhost:4000/`

Mounted routes:
- `GET /` → health check ("API Working")
- `POST /api/food/add` → add food item (with image)
- `GET  /api/food/list` → list food items
- `POST /api/user/register` → create user
- `POST /api/user/login` → login user
- `POST /api/cart/add` → add to cart
- `POST /api/cart/remove` → remove from cart
- `POST /api/cart/get` → get user cart
- `GET  /images/<file>` → serve uploaded images

> Tip: The backend imports `dotenv/config` but currently uses hardcoded values. To switch to environment variables, update `backend/server.js` and `backend/config/db.js` accordingly.

### Frontend (Customer App)
Location: `frontend/`

Scripts:
```
npm run dev        # start dev server (Vite)
npm run build      # production build
npm run preview    # preview production build
```

Start the app:
```
cd frontend
npm install
npm run dev
```

Vite will start on `http://localhost:5173` by default.

### Admin (Dashboard)
Location: `admin/`

Scripts:
```
npm run dev        # start dev server (Vite)
npm run build      # production build
npm run preview    # preview production build
```

Start the app:
```
cd admin
npm install
npm run dev
```

Vite will also try `http://localhost:5173`. If the customer app is already running, it will pick another port (e.g., `5174`).

---

## Configuration
- Ensure MongoDB is running locally or update the connection string in `backend/config/db.js`.
- Image uploads are stored under `backend/uploads/` and served at `http://localhost:4000/images/...`.
- If you deploy, remember to:
  - Use environment variables for `PORT`, `MONGO_URI`, `JWT_SECRET`, and Stripe keys (if payments are enabled)
  - Serve uploads from a persistent storage location

---

## Admin – Pending Work
- Order management enhancements are pending, including:
  - Refining orders list UI/UX
  - Adding robust status update flows
  - Syncing order states with backend endpoints consistently

If you plan to contribute, feel free to open an issue or PR tackling these items.

---

## Development Tips (Windows PowerShell)
- Run each app in its own terminal:
```
# Terminal 1
cd backend; npm run server

# Terminal 2
cd frontend; npm run dev

# Terminal 3
cd admin; npm run dev
```

---

## License
This project is for educational/demo purposes. Add a license if you intend to distribute.



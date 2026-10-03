# 🍯 HONEY — Full-Stack E-Commerce Platform

A full-stack e-commerce platform for selling honey and bee products, consisting of a customer-facing store, an admin dashboard, and a REST API backend.

The project is organized into three main applications:

* **Frontend** — Customer-facing e-commerce store
* **Dashboard** — Admin panel for managing products, categories, orders, and dashboard statistics
* **Backend** — REST API responsible for application data, authentication, orders, products, categories, and dashboard services

---

## 📌 Project Structure

```text
HONEY/
├── frontend/       # Customer Store
├── dashboard/      # Admin Dashboard
├── backend/        # REST API
└── README.md
```

---

# 🛍️ Frontend — Customer Store

The frontend provides the customer-facing shopping experience, including product browsing, categories, cart management, checkout, and API integration.

### Tech Stack

* React 19
* React Router
* Redux Toolkit
* React Redux
* Axios
* Firebase
* Tailwind CSS
* shadcn
* Base UI
* Motion
* Swiper
* Lucide React
* React Icons
* Tailwind Merge
* Class Variance Authority
* CLSX

### Main Features

* Home page
* Product listing
* Product categories
* Product search
* Product filtering
* Price slider
* Shopping cart
* Add-to-cart functionality
* Checkout form
* Order success flow
* Product and category data fetching
* API integration with Axios
* Global state management with Redux Toolkit
* Reusable UI components

### Frontend Structure

```text
frontend/
├── app/
│   ├── axios.js
│   └── store.js
│
├── components/
│   ├── cart/
│   ├── category/
│   ├── checkout/
│   ├── common/
│   ├── Header/
│   ├── home/
│   ├── products/
│   └── ui/
│
├── context/
├── features/
│   ├── cart/
│   ├── category/
│   └── products/
│
├── firebase/
├── Hooks/
├── lib/
├── pages/
├── routes/
├── services/
└── styles/
```

---

# 📊 Dashboard — Admin Panel

The dashboard is the administration interface for managing the e-commerce platform.

### Tech Stack

* React 19
* React Router
* Redux Toolkit
* React Redux
* Axios
* Firebase
* Tailwind CSS
* Flowbite
* Flowbite React
* Motion
* Recharts
* SweetAlert2
* React Icons

### Main Features

* Admin authentication
* Login and registration
* Public and private routes
* Dashboard overview
* Dashboard statistics
* Charts and data visualization
* Product management
* Category management
* Order management
* Order status management
* API integration
* Global state management with Redux Toolkit

### Dashboard Structure

```text
dashboard/
├── app/
│   ├── axios.js
│   └── store.js
│
├── components/
│   ├── auth/
│   ├── dashboard/
│   ├── layout/
│   ├── orders/
│   ├── products/
│   └── ui/
│
├── features/
│   ├── auth/
│   ├── category/
│   ├── dashboardStatus/
│   ├── orders/
│   └── products/
│
├── firebase/
├── Layout/
├── page/
│   ├── auth/
│   ├── dashboard/
│   ├── orders/
│   └── product/
│
├── routes/
├── services/
└── utils/
```

---

# ⚙️ Backend — REST API

The backend provides the API layer connecting the frontend applications with the application data and services.

### Tech Stack

* Node.js
* Express 5
* Firebase Admin
* Axios
* CORS
* Dotenv
* JWKS-RSA

### Main Features

* REST API
* Product API
* Category API
* Order API
* Dashboard API
* Authentication middleware
* Firebase Admin integration
* Dashboard statistics
* Order management
* Product management
* Category management
* Telegram service integration

### Backend Structure

```text
backend/
├── config/
│   ├── firebase.js
│   └── serviceAccountKey.json
│
├── controllers/
│   ├── category.js
│   ├── dashboardController.js
│   ├── orderController.js
│   └── ProductController.js
│
├── middleware/
│   └── auth.js
│
├── routes/
│   ├── category.js
│   ├── dashboardRoutes.js
│   ├── orderRoutes.js
│   └── ProductRoutes.js
│
├── services/
│   ├── category.js
│   ├── dashboardStatisticsService.js
│   ├── orderService.js
│   ├── ProductService.js
│   └── telegramService.js
│
└── server.js
```

---

# 🔄 Application Architecture

```text
                    ┌─────────────────────┐
                    │   Customer Store    │
                    │      Frontend       │
                    └──────────┬──────────┘
                               │
                               │ HTTP Requests
                               ▼
                    ┌─────────────────────┐
                    │      Backend        │
                    │   REST API / Node   │
                    │      Express        │
                    └──────────┬──────────┘
                               │
              ┌────────────────┼────────────────┐
              │                │                │
              ▼                ▼                ▼
         Products          Categories        Orders
              │
              ▼
       Dashboard Services
              │
              ▼
      ┌─────────────────────┐
      │   Admin Dashboard   │
      │       React        │
      └─────────────────────┘
```

---

# 🧩 Core Modules

### Store

The customer application handles:

* Browsing products
* Browsing categories
* Searching and filtering
* Shopping cart
* Checkout
* Order submission

### Admin Dashboard

The administration application handles:

* Authentication
* Products
* Categories
* Orders
* Order status
* Dashboard statistics
* Data visualization

### Backend API

The backend handles:

* Products
* Categories
* Orders
* Dashboard statistics
* Authentication middleware
* Backend services
* Telegram notifications/service integration

---

# 🛠️ Getting Started

## 1. Clone the Repository

```bash
git clone <YOUR_REPOSITORY_URL>
cd HONEY
```

## 2. Frontend

```bash
cd frontend
npm install
npm run dev
```

## 3. Dashboard

```bash
cd dashboard
npm install
npm run dev
```

## 4. Backend

```bash
cd backend
npm install
npm run dev
```

> Make sure the required environment variables and Firebase configuration are provided before running the applications.

---

# 🔐 Environment Variables

Environment variables are required for the applications to run correctly.

Do not commit sensitive credentials or private configuration files to the public repository.

Example:

```env
# Example only
API_URL=
FIREBASE_CONFIG=
```

Use your local `.env` files for actual values.

---

# 🔒 Security

Sensitive configuration files and credentials should remain local and must not be committed to the public repository.

Make sure files such as:

```text
.env
serviceAccountKey.json
```

are excluded from Git tracking.

---

# 📚 Technologies

| Area                        | Technologies                              |
| --------------------------- | ----------------------------------------- |
| Frontend                    | React, React Router, Redux Toolkit, Axios |
| UI                          | Tailwind CSS, shadcn, Base UI, Flowbite   |
| Animation                   | Motion                                    |
| Charts                      | Recharts                                  |
| Icons                       | Lucide React, React Icons                 |
| Backend                     | Node.js, Express                          |
| Database / Backend Services | Firebase / Firebase Admin                 |
| Authentication              | Firebase + Authentication Middleware      |
| API                         | REST API                                  |
| Notifications               | Telegram Service                          |
| State Management            | Redux Toolkit, React Redux                |

---

# 📁 Repository Organization

This repository combines the three parts of the HONEY platform into one codebase:

```text
HONEY
│
├── frontend
│   └── Customer E-Commerce Store
│
├── dashboard
│   └── Admin Management Panel
│
└── backend
    └── REST API & Backend Services
```

This structure keeps the complete full-stack project together in a single repository.

---

# 👨‍💻 Author

**Mohamed Zarea**

Frontend Developer | React.js

GitHub: `MOHAMEDzarea2002`

---

## 📌 Project Status

Full-stack e-commerce project containing:

**Customer Store + Admin Dashboard + REST API Backend**

# Nexora AI Tool ⚡

A multi-functional AI-powered tool aggregator built with the **MERN stack**, integrating the latest in generative technologies. Nexora enables users to generate article, blog-title, images, summaries, remove backgrounds/objects, and more — all through a single, polished interface.

---

## 🌐 Live Preview

🔗 **Frontend:**  
[https://nexoraaitool.vercel.app/](https://nexoraaitool.vercel.app/)

> 🐢 Both frontend and backend are hosted on **Vercel**. If idle, the initial load might take a few seconds.

---

## 📌 Features

- 🧠 **Article & Blog-title Generation**
- 🖼️ **Image Generation**
- ✂️ **Background/Object Removal**
- 📄 **PDF Review**
- 🔐 **Clerk Authentication**
- ⚡ **Smooth Animations** (Framer Motion)
- 🔥 **Toast Notifications** (react-hot-toast)
- 📱 **Fully Responsive UI** (Mobile & Desktop)

---

## 🧰 Tech Stack

| Frontend        | Backend           | AI / Cloud APIs                      | Database |
| --------------- | ----------------- | ------------------------------------ | -------- |
| React.js        | Node.js (Express) | 🔮 OpenAI, Gemini                    | MongoDB  |
| React Router    | Clerk Auth        | 🖼️ Clipdrop (BG/Object Removal)      | Mongoose |
| TailwindCSS     | Multer            | ☁️ Cloudinary (Uploads & BG Removal) |          |
| Lucide React    | express-validator |                                      |          |
| Framer Motion   | pdf-parse         |                                      |          |
| React Hot Toast | Axios             |                                      |          |

---

## ⚡Getting Started

### 🔧 Backend Setup

```bash
cd server
npm install
```

### Create a .env file in /server:

```bash
PORT=PORT
DATABASE_URL=your_mongodb_connection_string
CLERK_PUBLISHABLE_KEY=your_clerk_frontend_key
CLERK_SECRET_KEY=your_clerk_backend_key
GEMINI_API_KEY=your_gemini_api_key
CLIPDROP_API_KEY=your_clipdrop_api_key
CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret
```

#### Run the server:

```bash
npm run dev
```

---

### 🎨 Frontend Setup

```bash
cd client
npm install
```

Update the frontend .env to point to your backend:

```bash
VITE_CLERK_PUBLISHABLE_KEY=CLERK_PUBLISHABLE_KEY
VITE_BASE_URL=BACKEND_URL=BACKEND_URL
```

#### Run the frontend server:

```bash
npm run dev
```

---

### 🚀 Deployment

Frontend: Deployed on Vercel

Backend: Deployed on Vercel

---

### 🧩 Folder Structure

- /client => React frontend
- /Server => Node.js + Express backend

---

### ✅ Future Improvements

- ✅ Tool History / Logs
- ✅ Session Storage for AI outputs
- ⏳ Typing indicator (for chat tools)
- 🔄 Image Upscaler + Enhancer
- 📊 Admin Dashboard (Optional)
- 🔉 Voice Assistant (AI-based)

---

## 📬 Dev?

Jatin Sasoni :)

---

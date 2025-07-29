import "dotenv/config";
import express from "express";
import cors from "cors";
import { connectToDB } from "./config/db.js";
import { clerkMiddleware, requireAuth } from "@clerk/express";
import AIrouter from "./Routes/AI-Routes.js";
import connectCloudinary from "./config/cloudinary.js";
import userRouter from "./Routes/User-Routes.js";

//* Initialize App
const app = express();
await connectCloudinary();

//* Middlewares
app.use(cors());
app.use(express.json());
app.use(clerkMiddleware());

//* Routes
app.get("/", (req, res) => res.send("Server is live!"));

//* Protected Routes
app.use(requireAuth());
app.use("/api/ai", AIrouter);
app.use("/api/user", userRouter);

//* PORT
const PORT = process.env.PORT || 3000;

//* DATABASE
await connectToDB(process.env.DATABASE_URL);

//* Server
app.listen(PORT, () => console.log(`Server started at PORT: ${PORT}`));

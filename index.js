import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import session from 'express-session';
import flash from 'connect-flash';

import authRoutes from "./routes/authRoutes.js"
import studentRoutes from "./routes/studentRoutes.js"
import adminRoutes from "./routes/adminRoutes.js"

import Student from './middleware/attachStudent.js';

dotenv.config();

const app = express();

// Body parsing for POST forms
app.use(express.urlencoded({ extended: true }));

// Static files
app.use(express.static('static'));

// Allow uploaded college icons to be served
app.use('/uploads', express.static('uploads'));

// EJS
app.set('view engine', 'ejs');
app.set('views', './views');

// Sessions
app.use(session({
  secret: process.env.SESSION_SECRET || 'dev-secret',
  resave: false,
  saveUninitialized: false
}));

// Flash messages
app.use(flash());

// Attach logged-in student to res.locals
app.use(Student);

// Routes
app.use("/",authRoutes)
app.use("/student",studentRoutes)
app.use("/admin",adminRoutes)

// Basic error handler (so students see something helpful)
app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).json({
    message: 'Server error',
    error: err.message
  });
});

const port = process.env.PORT || 3000;

// Connect to MongoDB
await mongoose.connect(process.env.MONGODB_URI);
console.log('Connected to MongoDB');

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
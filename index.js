const express = require('express');
const { connectToMongoDB } = require("./connect");
const urlRoute = require('./routes/url');
const path = require('path');

const app = express();
const PORT = 8001;

// Connect to MongoDB
connectToMongoDB("mongodb://localhost:27017/short-url")
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("MongoDB connection error:", err));

// Set up middleware
app.use(express.json());  // Parse JSON bodies
app.use(express.urlencoded({ extended: true }));  // Parse form data

// Set EJS as the view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Route for the home page (form to shorten URL)
app.get('/', (req, res) => {
  res.render('index', { shortUrl: null });
});

// Use the URL routes for shortening and redirecting
app.use("/url", urlRoute);

// Start the server
app.listen(PORT, () => console.log(`Server started at PORT: ${PORT}`));

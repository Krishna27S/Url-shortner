TO RUN THE PROJECT - Node index.js


# URL Shortener

A simple URL shortener application built with Node.js and Express. This application allows users to enter a long URL and receive a shortened version, which can be used to redirect to the original URL.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Contributing](#contributing)
- [License](#license)

## Features

- Shorten long URLs quickly and efficiently.
- Redirect from shortened URLs to the original URLs.
- Check if a URL has already been shortened.
- User-friendly interface.

## Technologies Used

- Node.js
- Express.js
- MongoDB (using Mongoose for ORM)
- nanoid (for generating unique IDs)
- EJS (for rendering views)

## Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/your-username/url-shortener.git
   cd url-shortener
   ```

2. **Install dependencies:**

   Ensure you have Node.js and npm installed, then run:

   ```bash
   npm install
   ```

3. **Set up the environment:**

   Create a `.env` file in the root directory and add your MongoDB connection string:

   ```bash
   MONGODB_URI=mongodb://localhost:27017/url-shortener
   PORT=8001
   ```

4. **Start the server:**

   ```bash
   npm start
   ```

5. **Open your browser:**

   Visit `http://localhost:8001` to access the URL shortener.

## Usage

- Enter a URL in the input field.
- Click the "Shorten URL" button to generate a shortened version.
- Copy the shortened URL and use it as needed.

## API Endpoints

### Shorten a URL

- **Endpoint:** `POST /shorten`
- **Request Body:**
  - `originalUrl`: The URL to be shortened.
  
- **Response:**
  - Returns the shortened URL.

### Redirect from Short URL

- **Endpoint:** `GET /:shortId`
- **Parameters:**
  - `shortId`: The unique ID of the shortened URL.
  
- **Response:**
  - Redirects to the original URL.

## Contributing

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-YourFeature`).
3. Make your changes.
4. Commit your changes (`git commit -m 'Add some feature'`).
5. Push to the branch (`git push origin feature-YourFeature`).
6. Create a new Pull Request.

![image](https://github.com/user-attachments/assets/c3aa746e-d8a9-4b85-be02-6ebbb9d9a36c)

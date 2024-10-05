const express = require('express');
const Url = require('../models/url');
const router = express.Router();

// Dynamic import for nanoid
let nanoid;
(async () => {
    const module = await import('nanoid');
    nanoid = module.nanoid;
})();

// Route to shorten a URL
router.post('/shorten', async (req, res) => {
    // Ensure nanoid is loaded
    if (!nanoid) {
        await new Promise(resolve => setTimeout(resolve, 100));
    }

    const { originalUrl } = req.body;

    // Check if the URL has already been shortened
    const existingUrl = await Url.findOne({ originalUrl });
    if (existingUrl) {
        // Render the form again with the already existing short URL
        return res.render('index', { shortUrl: `http://localhost:8001/url/${existingUrl.shortId}` });
    }

    // Generate a unique short ID
    const shortId = nanoid(8);

    // Save the new shortened URL to the database
    const newUrl = new Url({ originalUrl, shortId });
    await newUrl.save();

    // Render the page with the new shortened URL
    res.render('index', { shortUrl: `http://localhost:8001/url/${shortId}` });
});

// Route to handle redirect from short URL to original URL
router.get('/:shortId', async (req, res) => {
    const { shortId } = req.params;

    // Find the URL document based on the shortId
    const url = await Url.findOne({ shortId });
    if (url) {
        // Redirect to the original URL
        return res.redirect(url.originalUrl);
    }

    // If no short URL found, send 404 error
    res.status(404).send('Short URL not found');
});

module.exports = router;
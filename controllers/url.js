const shortid = require("shortid");
const URL = require('../models/url');

async function handlegenerateNewShortUrl(req,res){
    const body = req.body;
    if(!body.url) return res.statur(400).json({error: 'url is required'})
    const shortID = shortid();
    await URL.create({
        shortId: shortID,
        redirectURL: body.url,
        visitHistory: []

    }) ;

    return res.json({id: shortID});
}

module.exports = {
    handlegenerateNewShortUrl
}
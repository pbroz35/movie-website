const express = require("express");
const path = require("path");
const cors = require('cors');
const fetch = require('node-fetch');

const router = express.Router();


router.get('/', async (req, res) => {
    try {
        const { query } = req.query;
        if (!query) {
            return res.status(400).json({ msg: "Query is required" });
        }

        const url = `https://api.themoviedb.org/3/search/movie?query=${query}&api_key=5cd218ca6e4843789fa5bba7bf068e80`;

        const options = {
            method: 'GET',
            headers: {
                accept: 'application/json',
            },
        };

        const response = await fetch(url, options);
        const data = await response.json();

        if (response.ok) {
            console.log("Successfully got search!");
            res.json(data);
        } else {
            console.error('Error fetching movies');
            res.status(response.status).json({ msg: "Error, failed to fetch movies" });
        }
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
});

module.exports = router;
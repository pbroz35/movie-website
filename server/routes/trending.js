
const express = require("express");
const router = express.Router();
const path = require("path");
const cors = require('cors');


router.get("/", async (req, res)=>{
    res.header('Access-Control-Allow-Origin', '*');
    try {
        // URL of the external API to fetch popular movies
        const url = `https://api.themoviedb.org/3/trending/movie/day?language=en-US&api_key=5cd218ca6e4843789fa5bba7bf068e80`;

        // Options for the fetch request, specifying the method and headers
        const options = {
            method: 'GET',
            headers: {
                accept: 'application/json'
            }
        }

        // Making the fetch request to the external API
        const response = await fetch(url, options);

        // Parsing the response as JSON
        const data = await response.json();

        // Checking if the response is successful
        if(response.ok){
            // Sending the fetched data as the response in JSON format

           // console.log((data));
            res.json(data);
        }
        else {
            // Logging an error message if the fetch was not successful
            console.error('Error fetching movies');
            // Sending an error response with the appropriate status code
            res.status(response.status).json({ msg: "Error, failed to fetch movies" });
        }
    } 

    catch(error) {
        // Sending a 500 Internal Server Error response in case of any exceptions
        res.status(500).json({ error: 'Internal server error' });
    }


})


//export the router
module.exports = router;
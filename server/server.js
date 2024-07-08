const express = require('express');
const app = express()
const path = require('path');
const PORT = process.env.PORT || 3500;
const cors = require('cors');

//built-in middleware for json
app.use(express.json());

//cors - cross orgin resource sharing
 app.use(cors());

// Routes
// app.use('/', require('./routes/top-movies'));

//router to private API server, which will fetch data
app.use("/get-top-movies", require('./routes/top-movies'));

//router to private API server, which will fetch searches
app.use("/get-search", (req,res) =>{
    res.send("getting search");
})


app.listen(PORT, ()=> console.log(`server is running on port ${PORT}`));

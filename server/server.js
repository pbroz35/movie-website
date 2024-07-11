const express = require('express');
const app = express()
const path = require('path');
const PORT = process.env.PORT || 3500;
const cors = require('cors');

//built-in middleware for json
app.use(express.json());

//cors - cross orgin resource sharing
 app.use(cors());

//router to private API server, which will fetch data
app.use("/get-top-movies", require('./routes/top-movies'));

//router to private API server, which will fetch searches
app.use("/get-search", require('./routes/search'));

app.use("/trending", require('./routes/trending'))


app.listen(PORT, ()=> console.log(`server is running on port ${PORT}`));

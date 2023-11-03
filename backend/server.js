const express = require('express');
const dotenv = require('dotenv').config();
const dbConfig = require('./config/dbconfig');
const cors = require('cors');
const app = express();
app.use(cors())
const apiroutes = require('./routes/route');
app.use(express.json());
app.use('/api/portfolio',apiroutes);

const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log('listening on port ' + port);
});
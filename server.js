require('dotenv'). config();

const express = require('express');

const app = express();

app.listen(process.env.PORT || 3000, () => {
    console.log( `Server running on port: ${process.env.PORT}`)
});
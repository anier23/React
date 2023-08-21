// JavaScript source code
const express = require('express');
const app = express();
app.use((req, res, next) => {
    res.status(200).json({
        message: 'It is works'

    });

});
module.exports = app;

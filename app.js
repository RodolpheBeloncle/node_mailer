const cors = require('cors');
const express = require('express');

const contactRouter = require('./routers/contact');

const app = express();

require('dotenv').config();

app.use(
  cors({
    origin: process.env.CLIENT_URL,
  })
);
app.use(express.json());

app.use('/contact', contactRouter);

module.exports = app;

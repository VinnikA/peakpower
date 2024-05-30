const express = require('express');
const logger = require('morgan');
const cors = require('cors');
require('dotenv').config();

const { errorHandler } = require('./src/helpers');

console.clear();

const app = express();

const formatsLogger = app.get('env') === 'development' ? 'dev' : 'short';

app.use(logger(formatsLogger));
app.use(cors());
app.use(express.json());

app.get('/api/hello', (req, res) => {
  res.status(200).json({ message: 'Hello world' });
});

app.use((req, res) => {
  res.status(404).json({ message: 'Not found' });
});

app.use(errorHandler);

module.exports = app;

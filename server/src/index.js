const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();
const middlewares = require('./middleware');
const logs = require('./api/logs');

const app = express();

mongoose.connect(process.env.DATABASE_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use(morgan('common')); // used for log information
app.use(helmet()); // for adding additional security
app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
  })
);
app.use(express.json()); // This is used to parde the json request body

app.get('/', (req, res) => {
  res.json({
    message: 'Hello World!',
  });
});

app.use('/api/logs', logs);

app.use(middlewares.notFound);
app.use(middlewares.errorHandler);

const port = process.env.PORT || 1337;
app.listen(port, () => {
  console.log('listening to http://localhost:1337');
});

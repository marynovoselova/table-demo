const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors');
const checkCors = require('./src/helpers/cors');

const db = require('./src/db/db')

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');

const app = express();
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cookieParser());
app.use(cors({origin: checkCors}));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/api', indexRouter);
app.use('/api/users', usersRouter);

module.exports = app;

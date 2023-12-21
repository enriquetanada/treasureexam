const express = require('express');
const appError = require('./utils/appError');
const treasureRouter = require('./routes/treasureRoute');
const connectDB = require('./dbconfig');

const app = express();

//Middlewares
app.use(express.json());

//Routes

app.use('/api/v1/treasures', treasureRouter);

app.all('*', (req, res, next) => {
    next(new appError(`Can't find ${req.originalUrl} on this server`, 404))
    res.status(404).json({
      status: 'failed',
      message: `Can't find ${req.originalUrl} on this server`
  }) 
})

const PORT = 3000;

app.listen(PORT, () => {
  connectDB();
  console.log(`App running on port ${PORT}...`);
});


module.exports = app;
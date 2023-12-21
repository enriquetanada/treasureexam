const db = require('./sequelize/models/index.js');

const connectDB = async () => {
    console.log("Checking database connection");
  
    try {
      await db.sequelize.authenticate();
      console.log("Database connection established");
  
    } catch (e) {
      console.log(e)
      console.log('Database connection failed');
    }
}

module.exports = connectDB;

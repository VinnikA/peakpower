const app = require('./app');
const mongoose = require('mongoose');

const { PORT = 7777, DB_PEAKPOWER } = process.env;

mongoose.set('strictQuery', true);

mongoose
  .connect(DB_PEAKPOWER)
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server running. Use our API on port: ${PORT}`);
    });
    console.log('Database connection successful');
  })
  .catch((err) => {
    console.log(err.message);
    process.exit(1);
  });

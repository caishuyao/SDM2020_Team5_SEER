const mongoose = require('mongoose');
const URI = require('../config/index');

const dburl = process.env.MONGODB_URI || URI;
const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};
mongoose.connect(dburl, options);

// When successfully connected
mongoose.connection.on('connected', () => {
  console.log('Established Mongoose Default Connection');
  console.log(dburl);
});

// When connection throws an error
mongoose.connection.on('error', (err) => {
  console.log(dburl);
  console.log(`Mongoose Default Connection Error : ${err}`);
});

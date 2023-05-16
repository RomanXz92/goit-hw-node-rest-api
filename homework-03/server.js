// qOpgtdCd23Ma7ZKf
// console.log('Welcome Roman');
// const mongoose = require('mongoose');
// mongoose.set('strictQuery', true);
// const { DB_HOST } = require('./config');
// mongoose
//   .connect(DB_HOST)
//   .then(() => console.log('Database connection successful'))
//   .catch(error => console.log(error));

const app = require('./app');
const mongoose = require('mongoose');
const DB_HOST =
  'mongodb+srv://Roman:qOpgtdCd23Ma7ZKf@cluster0.fukzxmm.mongodb.net/contacts_reader?retryWrites=true&w=majority';

mongoose.set('strictQuery', true);
mongoose
  .connect(DB_HOST)
  .then(() => {
    app.listen(3000);
  })
  .catch(error => {
    console.log(error.message);
    process.exit(1);
  });

//app.listen(3000, () => console.log('Server running'));

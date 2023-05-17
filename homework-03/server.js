// qOpgtdCd23Ma7ZKf

const app = require('./app');
const mongoose = require('mongoose');
const DB_HOST =
  'mongodb+srv://Roman:qOpgtdCd23Ma7ZKf@cluster0.fukzxmm.mongodb.net/contacts_reader?retryWrites=true&w=majority';

mongoose.set('strictQuery', true);
mongoose
  .connect(DB_HOST)
  .then(() => {
    app.listen(3000, () => console.log('Server running'));
  })
  .catch(error => {
    console.log(error.message);
    process.exit(1);
  });

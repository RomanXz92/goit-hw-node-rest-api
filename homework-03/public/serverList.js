const moment = require('moment');
const fs = require('fs/promises');

app.use(async (req, res, next) => {
  const { method, url } = req;
  const data = moment().format('DD-MM-YYYY_hh:mm:ss');
  await fs.appendFile('./public/server.log', `\n${method} ${url} ${data}`);
  next();
});

const next = require('next');
const dev = process.env.NODE_ENV !== 'production';
const nextApp = next({ dev });
const handle = nextApp.getRequestHandler();
const express = require('express');

// Router (Example)
const route = require('./routes/route.js');
const mongoose = require('mongoose');
mongoose.set('strictQuery', false);

mongoose
  .connect(
    'mongodb+srv://plutoniumVikas:1234567890@cluster-v.0x22h8i.mongodb.net/group62Database',
    {
      useNewUrlParser: true,
    }
  )
  .then(() => console.log('MongoDb is connected'))
  .catch((err) => console.log(err));

nextApp.prepare().then(() => {
  const app = express();
  // Example: Register routes
  app.use('/', route);
  app.use(express.json());

  // Rendering page per request
  app.get('*', (req, res) => {
    return handle(req, res);
  });

  app.use(function (req, res) {
    return res.status(400).send({ status: false, message: 'path not found' });
  });
  const port = process.env.PORT || 3000;
  app.listen(port, () => {
    console.log(`Listening on port ${port}...`);
  });
});

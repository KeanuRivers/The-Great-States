const db = require('../config/connection');
const { Myth } = require('../models');

const stateData = require('./stateData.json');

db.once('open', async () => {
  await Myth.deleteMany({});


  const technologies = await Myth.insertMany(stateData);

  console.log('States seeded!');
  process.exit(0);
});

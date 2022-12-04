const db = require('../config/connection');
const { Tech, Matchup } = require('../models');

const stateData = require('./stateData.json');

db.once('open', async () => {
  await Tech.deleteMany({});
  await Matchup.deleteMany({});

  const technologies = await Tech.insertMany(techData);

  console.log('States seeded!');
  process.exit(0);
});

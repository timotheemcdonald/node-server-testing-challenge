const knex = require("knex");

const knexfile = require("../knexfile.js");
const environment = process.env.NODE_ENV || "development";

module.exports = knex(knexfile[environment]);

// const knex = require('knex')('development')
// const config = require('../knexfile')


// module.exports = knex(config);

// const knex = require("knex")
// const knexfile = require("../knexfile")

// module.exports = knex(knexfile)
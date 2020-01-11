const { Pool } = require("pg");

const config = require('../config/config');

const pool = new Pool(config.database.poolSettings);

const query = async (sql) => {
  const client = await pool.connect();

  try{
    const res = await client.query(sql);
    return res.rows;
  } finally {
    client.release();
  }
}

module.exports = { query };
const { Pool } = require('pg');

const { poolSettings } = require('../config/config');

const pool = new Pool(poolSettings);

class Database {
    async query(query) {
        const client = await pool.connect();

        try {
            const res = await client.query(query);
            return res.rows;
        } finally {
            client.release();
        }
    }
}

module.exports = new Database();
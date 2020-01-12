'use strict'

const config = require('../config').database
const db = require('mssql');
var isNull = require('../script').isNull

module.exports = {
    'query': function (queryString) {
        if (isNull(queryString)) {
            return null;

        } else {
            db.close();
            return new Promise((resolve, reject) => {

                console.log('Establishing connection to Database...')
                db.connect(config).then(pool => {

                    console.log('Connected to Database!');
                    return pool.request().query(queryString);

                }).then(results => {

                    console.log('Query succeded!');
                    console.log('Closing connection...');
                    db.close();
                    resolve(results);

                }).catch(error => {

                    console.log('Error executing query :(', error);
                    console.log('Closing connection...');
                    db.close();
                    reject(error);

                });
            });
        }
    }
};

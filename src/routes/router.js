const express = require('express');

const institucionalRouter = require('./institucionalRouter');

const router = express.Router();

router.use('/', institucionalRouter);

module.exports = router;
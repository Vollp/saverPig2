const express = require('express');

const institucionalRouter = require('./institucionalRouter');
const valoresRouter = require('./valoresRouter');

const router = express.Router();

router.use('/', institucionalRouter);
router.use('/valores', valoresRouter);

module.exports = router;
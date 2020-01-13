const express = require('express');

const Values = require('../models/Values');

const router = express.Router();

router.post('/', async (req, res) => {
    const { salario, economia } = req.body;

    const response = await Values.cadastrarValores(salario, economia);

    res.json(response)
});

module.exports = router;
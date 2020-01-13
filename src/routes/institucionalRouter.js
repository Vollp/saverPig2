const express = require('express');
const path = require('path');

const User = require('../models/User');

const router = express.Router();

router.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname + '/../public/views/index.html'));
});

router.get('/cadastro', (req, res) => {
    res.sendFile(path.resolve(__dirname + '/../public/views/singUp.html'));
});

router.get('/login', (req, res) => {
    res.sendFile(path.resolve(__dirname + '/../public/views/SingIn.html'));
});

router.post('/cadastro', async (req, res) => {
    console.log(req.body)

    const { name, lastName, email, password, cPassword } = req.body;

    const response = await User.register(name, lastName, email, password, cPassword);

    if(response != null){
        res.redirect('/login');
    }
    
    res.status(400).json(response);
});

router.post('/login', async (req, res) => {
    const { email, password } = req.body;

    const response = await User.login(email, password);

    response == 200 ? res.redirect('http://localhost:3001').status(200).json(response) : res.status(400).json(response);
})

module.exports = router;
const express = require('express');
const router = express.Router();
const axios = require('axios');

const BASE_URL = 'https://backend-academy-osf.herokuapp.com/api';
const SECRET_KEY = '$2a$08$S7ywFQvTnICkPEJfEhSBIuc5lVn9MRBWuO6esbw810490In27vky.'

router.get('/signup', function(req, res, next){
    res.render('signup', { title: 'Alibazon' });
});

router.get('/signin', function(req, res, next){
    res.render('signin', { title: 'Alibazon' });
});

module.exports = router;
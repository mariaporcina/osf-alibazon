const express = require('express');
const router = express.Router();
const axios = require('axios');

const BASE_URL = 'https://backend-academy-osf.herokuapp.com/api';
const SECRET_KEY = '$2a$08$S7ywFQvTnICkPEJfEhSBIuc5lVn9MRBWuO6esbw810490In27vky.'

/* GET home page. */
router.get('/', async function(req, res, next) {
    const rootCategories = await axios.get(`${BASE_URL}/categories/parent/root?secretKey=${SECRET_KEY}`)
    .then(res => res.data)
    .catch(err => console.error(err));

    res.render('index', {
        title: 'Alibazon',
        categories: rootCategories
    });
});

module.exports = router;
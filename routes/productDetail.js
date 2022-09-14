const express = require('express');
const router = express.Router();
const axios = require('axios');

const BASE_URL = 'https://backend-academy-osf.herokuapp.com/api';
const SECRET_KEY = '$2a$08$S7ywFQvTnICkPEJfEhSBIuc5lVn9MRBWuO6esbw810490In27vky.'

router.get('/:category/:subCategory/:subsubCategory/:product', async function(req, res, next) {
    const productId = req.params.product;

    const response = await axios.get(`${BASE_URL}/products/product_search?id=${productId}&secretKey=${SECRET_KEY}`)
    .then(res => res.data)
    .catch(err => console.error(err));

    res.render('productDetail', { title: 'Alibazon' });
});

module.exports = router;
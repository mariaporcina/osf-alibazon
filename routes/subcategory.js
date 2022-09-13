const express = require('express');
const router = express.Router();
const axios = require('axios');

const BASE_URL = 'https://backend-academy-osf.herokuapp.com/api';
const SECRET_KEY = '$2a$08$S7ywFQvTnICkPEJfEhSBIuc5lVn9MRBWuO6esbw810490In27vky.'

router.get('/:category', async function(req, res, next) {
    const categoryId = req.params.category;
    const response = await axios.get(`${BASE_URL}/categories/parent/${categoryId}?secretKey=${SECRET_KEY}`)

    const categories = response.data;

    res.render('subcategory', { title: 'Alibazon', categories: categories })
});

router.get('/:category/:subCategory', async function(req, res, next) {
    const subCategoryId = req.params.subCategory;
    const response = await axios.get(`${BASE_URL}/categories/parent/${subCategoryId}?secretKey=${SECRET_KEY}`)

    const categories = response.data;

    res.render('subcategory', { title: 'Alibazon', categories: categories })
});

// router.get('/:category/:subCategory/:subsubCategory', async function(req, res, next) {
//     const subsubCategoryId = req.params.subsubCategory;
//     const response = await axios.get(`${BASE_URL}/categories/parent/${subsubCategoryId}?secretKey=${SECRET_KEY}`)

//     const categories = response.data;

//     res.render('category', { title: 'Alibazon', categories: categories })
// });

module.exports = router;
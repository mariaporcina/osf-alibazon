const express = require('express');
const router = express.Router();
const axios = require('axios');

const BASE_URL = 'https://backend-academy-osf.herokuapp.com/api';
const SECRET_KEY = '$2a$08$S7ywFQvTnICkPEJfEhSBIuc5lVn9MRBWuO6esbw810490In27vky.'

router.get('/:category', async function(req, res, next) {
    const categoryId = req.params.category;
    const response = await axios.get(`${BASE_URL}/categories/parent/${categoryId}?secretKey=${SECRET_KEY}`)

    const categories = response.data;

    res.render('subcategory', { title: 'Alibazon', categories: categories, subcategory: false })
});

router.get('/:category/:subCategory', async function(req, res, next) {
    const subCategoryId = req.params.subCategory;
    const categoryId = req.params.category;
    const response = await axios.get(`${BASE_URL}/categories/parent/${subCategoryId}?secretKey=${SECRET_KEY}`)

    const categories = response.data;

    res.render('subcategory', { title: 'Alibazon', categories: categories, subcategory: true, rootCategory: categoryId })
});

module.exports = router;
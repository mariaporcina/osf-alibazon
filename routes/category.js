let express = require('express');
let router = express.Router();
let axios = require('axios');

const BASE_URL = 'https://backend-academy-osf.herokuapp.com/api';
const SECRET_KEY = '$2a$08$S7ywFQvTnICkPEJfEhSBIuc5lVn9MRBWuO6esbw810490In27vky.'

router.get('/:id', async function(req, res, next) {
    const categoryId = req.params.id;
    const response = await axios.get(`${BASE_URL}/categories?secretKey=${SECRET_KEY}`)

    const categories = response.data;
    const filteredCategories = categories.filter( ({ parent_category_id }) => parent_category_id === categoryId);

    res.render('category', { title: 'Alibazon', categories: filteredCategories })
});

router.get('/:category/:subCategory', async function(req, res, next) {
    const categoryId = req.params.category;
    const subCategoryId = req.params.subCategory;
    const response = await axios.get(`${BASE_URL}/categories/parent/${subCategoryId}?secretKey=${SECRET_KEY}`)

    // const categories = response.data;
    // const filteredCategories = categories.filter( ({ parent_category_id }) => parent_category_id === categoryId);

    res.render('category', { title: 'Alibazon', categories: undefined })
});

module.exports = router;
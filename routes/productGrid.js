const express = require('express');
const router = express.Router();
const axios = require('axios');

const BASE_URL = 'https://backend-academy-osf.herokuapp.com/api';
const SECRET_KEY = '$2a$08$S7ywFQvTnICkPEJfEhSBIuc5lVn9MRBWuO6esbw810490In27vky.'

router.get('/:category/:subCategory/:subsubCategory', async function(req, res, next) {
    const categoryId = req.params.category;
    const subCategoryId = req.params.subCategory;
    const subsubCategoryId = req.params.subsubCategory;

    const response = await axios.get(`${BASE_URL}/products/product_search?primary_category_id=${subsubCategoryId}&secretKey=${SECRET_KEY}`)
    .then(res => res.data)
    .catch(err => console.error(err));

    res.render('productGrid', {
        title: 'Alibazon',
        products: response,
        rootCategory: categoryId,
        subCategory: subCategoryId,
        subSubCategory: subsubCategoryId
    });
});

module.exports = router;
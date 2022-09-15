const express = require('express');
const router = express.Router();
const axios = require('axios');

const BASE_URL = 'https://backend-academy-osf.herokuapp.com/api';
const SECRET_KEY = '$2a$08$S7ywFQvTnICkPEJfEhSBIuc5lVn9MRBWuO6esbw810490In27vky.'

router.get('/:category', async function(req, res, next) {
    const categoryId = req.params.category;

    const categories = await axios.get(`${BASE_URL}/categories/parent/${categoryId}?secretKey=${SECRET_KEY}`)
    .then(res => res.data)
    .catch(err => console.error(err));

    const breadcrumbName = categoryId[0].toUpperCase() + categoryId.slice(1);

    const breadcrumbs = [
        {
            url: `/${ categoryId }`,
            name: breadcrumbName,
        }
    ];

    res.render('subcategory', {
        title: 'Alibazon',
        categories: categories,
        subcategory: false,
        breadcrumbs: breadcrumbs
    });
});

router.get('/:category/:subCategory', async function(req, res, next) {
    const subCategoryId = req.params.subCategory;
    const categoryId = req.params.category;

    const categories = await axios.get(`${BASE_URL}/categories/parent/${subCategoryId}?secretKey=${SECRET_KEY}`)
    .then(res => res.data)
    .catch(err => console.error(err));

    const breadcrumbs = [];

    let breadcrumbUrl = '';
    for (let paramater in req.params){
        const currentParameter = req.params[paramater];
        let breadcrumbName = '';

        if(currentParameter.includes('-')){
            let splited = currentParameter.split('-');
            for(let i = 0; i < splited.length; i++) {
                splited[i] = splited[i][0].toUpperCase() + splited[i].slice(1);
            };
            breadcrumbName = splited.join(' ');
        } else {
            breadcrumbName = currentParameter[0].toUpperCase() + currentParameter.slice(1);
        }

        breadcrumbUrl += `/${ currentParameter }`;
        breadcrumbs.push({ url: breadcrumbUrl, name: breadcrumbName });
    }

    res.render('subcategory', {
        title: 'Alibazon',
        categories: categories,
        subcategory: true,
        rootCategory: categoryId,
        breadcrumbs: breadcrumbs
    });
});

module.exports = router;
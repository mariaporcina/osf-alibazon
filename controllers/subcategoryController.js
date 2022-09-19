// required
const axios = require('axios');

// helpers
const constantValues = require('../helpers/constantValues');

// scripts
const breadcrumbsGenerator = require('../scripts/breadcrumbsGenerator');

const getCategory = async (req, res, next) => {
    const categoryId = req.params.category;

    const categories = await axios.get(`${constantValues.BASE_URL}/categories/parent/${categoryId}?secretKey=${constantValues.SECRET_KEY}`)
    .then(res => res.data)
    .catch(err => console.error(err));

    const breadcrumbs = breadcrumbsGenerator.mountBreadcrumbs(req.params);

    res.render('subcategory', {
        title: 'Alibazon',
        categories: categories,
        subcategory: false,
        breadcrumbs: breadcrumbs
    });
}

const getSubcategory = async (req, res, next) => {
    const subCategoryId = req.params.subCategory;
    const categoryId = req.params.category;

    const categories = await axios.get(`${constantValues.BASE_URL}/categories/parent/${subCategoryId}?secretKey=${constantValues.SECRET_KEY}`)
    .then(res => res.data)
    .catch(err => console.error(err));

    const breadcrumbs = breadcrumbsGenerator.mountBreadcrumbs(req.params);

    res.render('subcategory', {
        title: 'Alibazon',
        categories: categories,
        subcategory: true,
        rootCategory: categoryId,
        breadcrumbs: breadcrumbs
    });
}

module.exports = {
    getCategory: getCategory,
    getSubcategory: getSubcategory
};
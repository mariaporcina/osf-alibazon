// required
const axios = require('axios');

// helpers
const constantValues = require('../helpers/constantValues');

// scripts
const breadcrumbsGenerator = require('../scripts/breadcrumbsGenerator');

const getSubSubCategory = async (req, res, next) => {
    const categoryId = req.params.category;
    const subCategoryId = req.params.subCategory;
    const subsubCategoryId = req.params.subsubCategory;

    const response = await axios.get(`${constantValues.BASE_URL}/products/product_search?primary_category_id=${subsubCategoryId}&secretKey=${constantValues.SECRET_KEY}`)
    .then(res => res.data)
    .catch(err => console.error(err));

    const breadcrumbs = breadcrumbsGenerator.mountBreadcrumbs(req.params);

    res.render('productGrid', {
        title: 'Alibazon',
        products: response,
        rootCategory: categoryId,
        subCategory: subCategoryId,
        subSubCategory: subsubCategoryId,
        breadcrumbs: breadcrumbs
    });
}

module.exports = {
    getSubSubCategory: getSubSubCategory
};
const express = require('express');
const router = express.Router();
const axios = require('axios');

const BASE_URL = 'https://backend-academy-osf.herokuapp.com/api';
const SECRET_KEY = '$2a$08$S7ywFQvTnICkPEJfEhSBIuc5lVn9MRBWuO6esbw810490In27vky.'

router.get('/:category/:subCategory/:subsubCategory/:product', async function(req, res, next) {
    const productId = req.params.product;

    const product = await axios.get(`${BASE_URL}/products/product_search?id=${productId}&secretKey=${SECRET_KEY}`)
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
        } else if(paramater === 'product'){
            breadcrumbName = product[0].name;
        } else {
            breadcrumbName = currentParameter[0].toUpperCase() + currentParameter.slice(1);
        }

        breadcrumbUrl += `/${ currentParameter }`;
        breadcrumbs.push({ url: breadcrumbUrl, name: breadcrumbName });
    }

    const largeImage = product[0].image_groups.find(item => item.view_type === 'large' && !item.variation_value);

    res.render('productDetail', {
        title: 'Alibazon',
        product: product[0],
        breadcrumbs: breadcrumbs,
        largeImages: largeImage.images
    });
});

module.exports = router;
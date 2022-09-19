// required
const axios = require('axios');

// helpers
const constantValues = require('../helpers/constantValues');

const getHome = async (req, res, next) => {
    const rootCategories = await axios.get(`${constantValues.BASE_URL}/categories/parent/root?secretKey=${constantValues.SECRET_KEY}`)
    .then(res => res.data)
    .catch(err => console.error(err));

    res.render('index', {
        title: 'Alibazon',
        categories: rootCategories
    });
}

module.exports = {
    getHome: getHome
};
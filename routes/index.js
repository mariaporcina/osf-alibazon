let express = require('express');
let router = express.Router();
let axios = require('axios');

const BASE_URL = 'https://backend-academy-osf.herokuapp.com/api';
const SECRET_KEY = '$2a$08$S7ywFQvTnICkPEJfEhSBIuc5lVn9MRBWuO6esbw810490In27vky.'

/* GET home page. */
router.get('/', async function(req, res, next) {
  const response = await axios.get(`${BASE_URL}/categories?secretKey=${SECRET_KEY}`)

  const categories = response.data;
  const rootCategories = categories.filter( ({ parent_category_id }) => parent_category_id === 'root');

  res.render('index', {
    title: 'Alibazon',
    categories: rootCategories
  });
});

module.exports = router;

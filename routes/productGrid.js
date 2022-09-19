const express = require('express');
const router = express.Router();

const productGridController = require('../controllers/productGridController');

router.get('/:category/:subCategory/:subsubCategory', productGridController.getSubSubCategory);

module.exports = router;
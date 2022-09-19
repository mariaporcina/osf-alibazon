const express = require('express');
const router = express.Router();

const subcategoryController = require('../controllers/subcategoryController');

router.get('/:category', subcategoryController.getCategory);

router.get('/:category/:subCategory', subcategoryController.getSubcategory);

module.exports = router;
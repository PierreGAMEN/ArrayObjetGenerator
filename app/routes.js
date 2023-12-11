const express = require('express');
const router = express.Router();
const controller = require('./controller.js')
const generator = require('../public/JS/generator.js')

router.get('/', controller.home);


module.exports = router;
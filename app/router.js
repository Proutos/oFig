const express = require('express');
const path = require('path');

// on importe nos controllers
const mainController = require(path.join(__dirname, 'controllers', 'mainController'));
const cartController = require(path.join(__dirname, 'controllers', 'cartController'));


const router = express.Router();

// page d'accueil
router.get('/', mainController.homePage);

// page article
router.get('/article/:id', mainController.articlePage);

// page panier
router.get('/cart', cartController.cartPage);


// on exporte le router 
module.exports = router;
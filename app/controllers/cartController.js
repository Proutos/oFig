const path = require('path');

const cartController = {

  // méthode pour afficher le panier
  cartPage: (request, response) => {
    const filePath = path.resolve(__dirname + '/../views/panier.ejs');
    response.render(filePath);
  }

};


module.exports = cartController;

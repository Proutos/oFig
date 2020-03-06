const path = require('path');
const dataMapper = require(path.join(__dirname, '..', 'dataMapper'));

const mainController = {

  // méthode pour la page d'accueil
  homePage: (request, response) => {
    const monSuperCallback = (figList) => {
      response.render('accueil', {listOfFigurines: figList});
    };
    dataMapper.getAllFigurines(monSuperCallback);


  },

  // méthode pour la page article
  articlePage: (request, response) => {
    const monCallback = (article) => {
      //console.log(article);
      response.render('article', {superArticle: article});
    }
    let id = request.params.id;
    dataMapper.getOneFigurine(id, (monCallback));
  }

};


module.exports = mainController;

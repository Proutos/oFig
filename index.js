const express = require('express');
const app = express();
const path = require('path');

// on importe le router
const router = require('./app/router');

// un peu de config
const PORT = process.env.PORT || 5000;

// servir les fichiers statiques qui sont dans "integration"
app.use(express.static('integration'));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'app', 'views'));

// routage !
app.use(router);


// on lance le serveur
app.listen(PORT, () => {
  console.log(`Listening on ${PORT}`);
});

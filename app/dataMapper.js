const sqlite = require('sqlite3');
const database = new sqlite.Database(__dirname + '/../DB/data.sqlite');

const dataMapper = {

    getAllFigurines: (callback) => {
        database.all('SELECT * FROM figurine', (err, data) => {
            if (err) {
                console.log('Erreur dans getAllFigurines');
            }else {
                callback(data);
            }
        })
    },

    getOneFigurine: (id, callback) => {

        const preparedQuery = `SELECT * FROM figurine WHERE ID = ${id}`;
            
        database.get(preparedQuery, (err, data) => {
            if (err) {
                console.log('Erreur dans getOneFigurine');
            }else {
                //console.log(data);
                callback(data);
            }
        });

    }
};

module.exports = dataMapper;
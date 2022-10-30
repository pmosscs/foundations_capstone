const { sequelize } = require('./config');

module.exports = {
    addHouse: (req, res) => {
        // console.log(req.body);
        let { address, notes, img } = req.body;

        sequelize.query(`
            INSERT INTO houses (address, notes, img, contacted)
            VALUES ('${address}', '${notes}', '${img}', FALSE)
        `).then(dbRes => {
            res.status(200).send([dbRes])
        })
        .catch(err => console.log(err))
    },

    getAllHouses: (req, res) => {

        sequelize.query(`
        SELECT * FROM houses
        `).then(dbRes => {
            res.status(200).send(dbRes[0])
        }).catch(err => console.log(err))
    }

}
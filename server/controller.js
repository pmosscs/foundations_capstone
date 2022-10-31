const { sequelize } = require('./config');

module.exports = {
    addHouse: (req, res) => {
        // console.log(req.body);
        let { address, notes, img } = req.body;

        sequelize.query(`
            INSERT INTO houses (address, notes, img, contacted, archived)
            VALUES ('${address}', '${notes}', '${img}', FALSE, FALSE)
        `).then(dbRes => {
            res.status(200).send([dbRes])
        })
        .catch(err => console.log(err))
    },

    getAllHouses: (req, res) => {

        sequelize.query(`
        SELECT * FROM houses
        WHERE archived = FALSE AND contacted = FALSE
        ORDER BY house_id DESC;

        
        `).then(dbRes => {
            res.status(200).send(dbRes[0])
        }).catch(err => console.log(err))
    },

    deleteHouse: (req, res) => {
        let { id } = req.params

        sequelize.query(`
        DELETE 
        FROM houses
        WHERE house_id = ${id}
        `).then(dbRes => res.status(200).send(dbRes[0]))
        .catch(err => console.log(err))
    },

    getAllContactedHouses: (req, res) => {

        sequelize.query(`
        SELECT * FROM houses
        WHERE archived = FALSE AND contacted = TRUE
        ORDER BY house_id DESC;

        
        `).then(dbRes => {
            res.status(200).send(dbRes[0])
        }).catch(err => console.log(err))
    },

    changeContacted: (req, res) => {
        let id = req.params.id

        sequelize.query(`
            UPDATE houses
            SET contacted = true
            WHERE house_id = ${id};
        `).then(dbRes => {
            res.status(200).send(dbRes[0])
        }).catch(err => console.log(err))
    },

    undoContacted: (req, res) => {
        let id = req.params.id

        sequelize.query(`
            UPDATE houses
            SET contacted = false
            WHERE house_id = ${id};
        `).then(dbRes => {
            res.status(200).send(dbRes[0])
        }).catch(err => console.log(err))
    },

    archiveHouse: (req, res) => {
        let id = req.params.id

        sequelize.query(`
            UPDATE houses
            SET archived = true
            WHERE house_id = ${id};
        `).then(dbRes => {
            res.status(200).send(dbRes[0])
        }).catch(err => console.log(err))
    },

    getArchived: (req, res) => {

        sequelize.query(`
        SELECT * FROM houses
        WHERE archived = true
        ORDER BY house_id DESC;

        `).then(dbRes => {
            res.status(200).send(dbRes[0])
        }).catch(err => console.log(err))
    },

    undoArchive: (req, res) => {
        let id = req.params.id

        sequelize.query(`
            UPDATE houses
            SET archived = false
            WHERE house_id = ${id};
        `).then(dbRes => {
            res.status(200).send(dbRes[0])
        }).catch(err => console.log(err))
    },

    getAddresses: (req, res) => {
        sequelize.query(`
        SELECT * FROM houses
        WHERE archived = FALSE;
        `)
        .then(dbRes => {
            res.status(200).send(dbRes[0])
        })
    }

}
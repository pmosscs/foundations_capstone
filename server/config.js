require('dotenv').config();
const { Sequelize } = require('sequelize');
const { DATABASE_URL } = process.env;


const sequelize = new Sequelize(DATABASE_URL, {
    dialect: 'postgres',
    dialectOptions: {
        ssl: {
            rejectUnauthorized: false
        }
    }
})

module.exports = {
    sequelize
}
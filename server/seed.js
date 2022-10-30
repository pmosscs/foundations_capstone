const { sequelize } = require('./config')

async function seed () {
    await sequelize.query(`
    DROP TABLE IF EXISTS houses;

    CREATE TABLE houses (
        house_id SERIAL PRIMARY KEY,
        address VARCHAR(100),
        notes VARCHAR(500),
        img VARCHAR(255),
        contacted BOOLEAN
    );
    
    `)
}

seed();
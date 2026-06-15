const {
    Sequelize
} = require('sequelize');



if (process.env.NODE_ENV === "production") {
    sequelize = new Sequelize(process.env.DATABASE_URL, {
        dialect: 'postgres',
        dialectOptions: {
            ssl: {
                require: true,
                rejectUnauthorized: false
            }
        }
    });
} else {
    var sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
        host: process.env.DB_HOST,
        dialect: 'postgres',
    });

}

module.exports = sequelize;
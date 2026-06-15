const {
    Sequelize
} = require('sequelize');


const sequelize = new Sequelize('TaskFlowAPI_DB', 'taskflowapiadmin', 'baze podataka', {
    host: 'localhost',
    dialect: 'postgres',
});



module.exports = sequelize;
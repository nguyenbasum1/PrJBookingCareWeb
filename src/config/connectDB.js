const { Sequelize } = require('sequelize');
// Option 3: Passing parameters separately (other dialects)
const sequelize = new Sequelize('nguyenbasum', 'root', null, {
    host: 'localhost',
    dialect: 'mysql',
    logging: false,
});
const connectDB = async () => {
    try {
        await sequelize.authenticate();
        console.log('Connection has been database nguyenbasum successfully.');
    } catch (error) {
        console.error('Unable to connect to the database nguyenbasum:', error);
    }
}
module.exports = connectDB;
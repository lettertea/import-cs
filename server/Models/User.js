const Sequelize = require('sequelize');


module.exports = (db) => {
    const User = db.define('User', {
            id: {
                type: Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },

            email: {
                type: Sequelize.STRING,
                allowNull: false
            },

            password: {
                type: Sequelize.STRING,
                allowNull: false
            }},

        //OPTIONS//
        {
            db: db,
            timestamps: true    //Establishes 'createdAt' & 'updatedAt' column
        });

    return User
};
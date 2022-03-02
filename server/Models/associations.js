/// ASSOCIATIONS ///
const {db} = require("../Database/db");
const User = require('./User')(db);
const Setting = require('./Setting')(db);
const KeyboardMaps = require('./KeyboardMaps')(db);
const HistoryEntry = require('./HistoryEntry')(db);
const Role = require('./Role')(db);

//Setting -> User
User.hasOne(Setting, {
    foreignKey: {
        allowNull: false
    }
});
Setting.belongsTo(User);

//*KeyboardMap -> Setting
Setting.hasMany(KeyboardMaps, {
    foreignKey: {
        allowNull: false
    }
});
KeyboardMaps.belongsTo(Setting);

//*HistoryEntry -> User
User.hasMany(HistoryEntry, {
    foreignKey: {
        allowNull: false
    }
});
HistoryEntry.belongsTo(User)

//*User -> Role
Role.hasMany(User)
User.belongsTo(Role)



/// SYNCHRONIZATION ///
User.sync({force: false, alter: true});
Setting.sync({force: false, alter: true});
KeyboardMaps.sync({force: false, alter: true});
HistoryEntry.sync({force: false, alter: true});
Role.sync({force: true, alter: true});
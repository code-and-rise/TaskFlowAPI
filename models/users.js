const {
  DataTypes
} = require('sequelize');

const sequelize = require('../config/db');

const users = sequelize.define('users', {
  id: {
    autoIncrement: true,
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true
  },
  name: {
    type: DataTypes.STRING(100),
    allowNull: false
  },
  email: {
    type: DataTypes.STRING(150),
    allowNull: false,
    unique: "users_email_key"
  },
  password: {
    type: DataTypes.STRING(255),
    allowNull: false
  }
}, {
  sequelize,
  tableName: 'users',
  schema: 'public',
  hasTrigger: true,
  timestamps: true,
  underscored: true,
  indexes: [{
      name: "users_email_key",
      unique: true,
      fields: [{
        name: "email"
      }, ]
    },
    {
      name: "users_pkey",
      unique: true,
      fields: [{
        name: "id"
      }, ]
    },
  ]
});

module.exports = users;
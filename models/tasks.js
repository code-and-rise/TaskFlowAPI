const {
  DataTypes
} = require('sequelize');
const sequelize = require('../config/db');

const tasks = sequelize.define('tasks', {
  id: {
    autoIncrement: true,
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true
  },
  user_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'users',
      key: 'id'
    }
  },
  title: {
    type: DataTypes.STRING(255),
    allowNull: false
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: true
  },
  status: {
    type: DataTypes.ENUM("pending", "in_progress", "done"),
    allowNull: true,
    defaultValue: "pending"
  },
  due_date: {
    type: DataTypes.DATEONLY,
    allowNull: true
  }
}, {
  sequelize,
  tableName: 'tasks',
  schema: 'public',
  hasTrigger: true,
  timestamps: true,
  underscored: true,
  indexes: [{
    name: "tasks_pkey",
    unique: true,
    fields: [{
      name: "id"
    }, ]
  }, ]
});



module.exports = tasks;
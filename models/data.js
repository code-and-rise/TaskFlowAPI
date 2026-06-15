const _tasks = require("./tasks");
const _users = require("./users");

_tasks.belongsTo(_users, {
  as: "user",
  foreignKey: "user_id"
})

_users.hasMany(_tasks, {
  as: "tasks",
  foreignKey: "user_id"
});

const data = {
  _users,
  _tasks
}

module.exports = data;
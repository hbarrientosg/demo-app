const casual = require('casual');
const moment = require('moment-timezone');

// const byId = x => x.id;
const MAX_USERS = 100;

casual.define('user', () => ({
  id: casual._uuid(),
  name: casual.name,
  avatarUrl: `https://api.adorable.io/avatars/134/${casual.name}`, 
  createAt: moment().toISOString()
}));

module.exports = () => {
  const { assignment } = casual;
  const data = {
    users: []
  };

  // Add Topics
  for (let id = 0; id < MAX_USERS; id += 1) {
    data.users.push(casual.user);
  }

  return data;
};

'use strict';
const Sequelize = require('sequelize');
const sequelize = new Sequelize(
  'postgres://postgres:postgres@localhost/boardlab',
  {
    logging: false,
    operatorsAliases: false
  }
);

const Post = sequelize.define('Post', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  content: {
    type: Sequelize.TEXT
  },
  postedBy: {
    type: Sequelize.STRING
  },
  university: {
    type: Sequelize.STRING
  },
  laboratory: {
    type: Sequelize.STRING
  },
  trackingCookie: {
    type: Sequelize.STRING
  }
}, {
  freeseTableName: true,
  timestamps: true
});

Post.sync();
module.exports = Post;
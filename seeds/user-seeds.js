const { User } = require("../models");

const userData = [
  {
    username: "Ibikunle",
    password: "test1",
  },
  {
    username: "oluwafemi",
    password: "test2",
  },
  {
    username: "ip",
    password: "test3",
  },
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;

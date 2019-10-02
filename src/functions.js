const fetch = require("node-fetch");

const functions = {
  add: (num1, num2) => num1 + num2,
  isNull: () => null,
  isTrue: () => true,
  isFalse: () => false,
  isUndefined: () => undefined,
  isDefined: () => "",
  getUsers: () => ["user1", "user2", "user3", "admin"],
  getSelf: () => {
    return { firstName: "Rahman", lastName: "Younus", userName: "rahman95" };
  },
  getUserName: () => "rahman95",
  returnValue: value => value,
  getGithubUser: () => {
    return fetch("https://api.github.com/users/rahman95").then(res =>
      res.json()
    );
  }
};

module.exports = functions;

const mongoose = require('mongoose');
const mongooseeder = require('mongooseeder');
const models = require('./../models');

const mongodbUrl = 'mongodb://localhost/demo_exploring_mongoose_development';

mongooseeder.seed({
  mongodbUrl: mongodbUrl,
  models: models,
  clean: true,
  mongoose: mongoose,
  seeds: () => {
    var users = [];

    for (let i = 0; i < 20; i++) {
      let user = {
        fname: `Foo${ i }`,
        lname: `Bar${ i }`,
        username: `foobar${ i }`,
        email: `foobar${ i }@example.com`
      };
      users.push(user);
    }

    return models.User.insertMany(users);
    // return Promise.all([
    //   models.User.insertMany(users),
    //   models.Post.insertMany(posts)
    // ]);
  }
});

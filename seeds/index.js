const mongoose = require('mongoose');
const mongooseeder = require('mongooseeder');
const models = require('./../models');
const env = process.env.NODE_ENV || 'development';
const config = require('./config/mongo')[env];

const envUrl = process.env[config.use_env_constiable];
const localUrl = `mongodb://${ config.host }/${ config.database }`;
const mongodbUrl =  envUrl ? envUrl : localUrl;

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

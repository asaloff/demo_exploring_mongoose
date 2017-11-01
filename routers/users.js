var express = require('express');
var router = express.Router();
var models = require('./../models');
var User = models.User;

// Index
router.get('/', (req, res) => {
  User.find()
  .then((users) => {
    res.render('users/index', { users });
  })
  .catch((e) => res.status(500).send(e.stack));
});


// Show
router.get('/:id', (req, res) => {
  User.findById(req.params.id)
    .then(user => {
      if (user) {
        res.render('users/show', { user });
      } else {
        res.status(404).send('User Not Found');
      }
    })
    .catch((e) => res.status(500).send(e.stack));
});


module.exports = router;

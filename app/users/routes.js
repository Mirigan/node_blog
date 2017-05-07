var express = require('express');
var router = express.Router();
var usersController = require('./usersController')

router.get('/', usersController.index);
router.post('/', usersController.create);
router.get('/:id', usersController.find);
router.put('/:id', usersController.update);
router.delete('/:id', usersController.destroy);

module.exports = router;
